import { asyncError } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import ErrorHandler from "../utils/error.js";
import { sendEmail } from "../utils/features.js";

export const createOrder = asyncError(async (req, res, next) => {
  const {
    eventInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  await Order.create({
    user: req.user._id,
    eventInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  });
  const eventInfoStr = eventInfo.map((item) => JSON.stringify(item)).join(" ");
  const orderItemsStr = orderItems
    .map((item) => `${item.name}: ${item.price}`)
    .join(", ");

  const subject = "Your order summary";
  const text = `You have placed an order with the following details:\n
                Event Info: ${eventInfoStr}\n
                Order Items: ${orderItemsStr}\n
                Payment Method: ${paymentMethod}\n
                Items Price: ${itemsPrice}\n
                Tax Price: ${taxPrice}\n
                Shipping Charges: ${shippingCharges}\n
                Total Amount: ${totalAmount}`;

  await sendEmail(subject, req.user.email, text);

  res.status(201).json({
    success: true,
    message: "Order Placed Successfully",
  });
});

export const getAdminOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({});

  res.status(200).json({
    success: true,
    orders,
  });
});

export const getMyOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

export const getOrderDetails = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler("Order Not Found", 404));

  res.status(200).json({
    success: true,
    order,
  });
});

export const proccessOrder = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) return next(new ErrorHandler("Order Not Found", 404));

  if (order.orderStatus === "Preparing") order.orderStatus = "Shipped";
  else if (order.orderStatus === "Shipped") {
    order.orderStatus = "Delivered";
    order.deliveredAt = new Date(Date.now());
  } else return next(new ErrorHandler("Order Already Delivered", 400));

  await order.save();

  res.status(200).json({
    success: true,
    message: "Order Processed Successfully",
  });
});

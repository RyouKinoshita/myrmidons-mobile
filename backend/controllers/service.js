import { asyncError } from "../middlewares/error.js";
import { Service } from "../models/service.js";
import ErrorHandler from "../utils/error.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary";
import { Category } from "../models/category.js";

export const getAllServices = asyncError(async (req, res, next) => {
  const { keyword, category } = req.query;

  const services = await Service.find({
    name: {
      $regex: keyword ? keyword : "",
      $options: "i",
    },
    category: category ? category : undefined,
  });

  res.status(200).json({
    success: true,
    services,
  });
});
export const getAdminServices = asyncError(async (req, res, next) => {
  const services = await Service.find({}).populate("category");

  // const outOfStock = services.filter((i) => i.stock === 0);

  res.status(200).json({
    success: true,
    services,
    // outOfStock: outOfStock.length,
    // inStock: services.length - outOfStock.length,
  });
});

export const getServiceDetails = asyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id).populate("category");

  if (!service) return next(new ErrorHandler("Service not found", 404));

  res.status(200).json({
    success: true,
    service,
  });
});

export const createService = asyncError(async (req, res, next) => {
  const { name, description, category, price } = req.body;

  if (!req.file) return next(new ErrorHandler("Please add image", 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await Service.create({
    name,
    description,
    category,
    price,
    images: [image],
  });

  res.status(200).json({
    success: true,
    message: "Service Created Successfully",
  });
});

export const updateService = asyncError(async (req, res, next) => {
  const { name, description, category, price } = req.body;

  const service = await Service.findById(req.params.id);
  if (!service) return next(new ErrorHandler("Service not found", 404));

  if (name) service.name = name;
  if (description) service.description = description;
  if (category) service.category = category;
  if (price) service.price = price;
  // if (stock) service.stock = stock;

  await service.save();

  res.status(200).json({
    success: true,
    message: "Service Updated Successfully",
  });
});

export const addServiceImage = asyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id);
  if (!service) return next(new ErrorHandler("Service not found", 404));

  if (!req.file) return next(new ErrorHandler("Please add image", 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  service.images.push(image);
  await service.save();

  res.status(200).json({
    success: true,
    message: "Image Added Successfully",
  });
});

export const deleteServiceImage = asyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id);
  if (!service) return next(new ErrorHandler("Service not found", 404));

  const id = req.query.id;

  if (!id) return next(new ErrorHandler("Please Image Id", 400));

  let isExist = -1;

  service.images.forEach((item, index) => {
    if (item._id.toString() === id.toString()) isExist = index;
  });

  if (isExist < 0) return next(new ErrorHandler("Image doesn't exist", 400));

  await cloudinary.v2.uploader.destroy(service.images[isExist].public_id);

  service.images.splice(isExist, 1);

  await service.save();

  res.status(200).json({
    success: true,
    message: "Image Deleted Successfully",
  });
});

export const deleteService = asyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id);
  if (!service) return next(new ErrorHandler("Service not found", 404));

  for (let index = 0; index < service.images.length; index++) {
    await cloudinary.v2.uploader.destroy(service.images[index].public_id);
  }
  await service.remove();
  res.status(200).json({
    success: true,
    message: "Service Deleted Successfully",
  });
});

export const addCategory = asyncError(async (req, res, next) => {
  await Category.create(req.body);

  res.status(201).json({
    success: true,
    message: "Category Added Successfully",
  });
});

export const getAllCategories = asyncError(async (req, res, next) => {
  const categories = await Category.find({});

  res.status(200).json({
    success: true,
    categories,
  });
});

export const deleteCategory = asyncError(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) return next(new ErrorHandler("Category Not Found", 404));
  const services = await Service.find({ category: category._id });

  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    service.category = undefined;
    await service.save();
  }

  await category.remove();

  res.status(200).json({
    success: true,
    message: "Category Deleted Successfully",
  });
});

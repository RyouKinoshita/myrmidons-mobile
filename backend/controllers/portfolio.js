import { asyncError } from "../middlewares/error.js";
import { Portfolio } from "../models/portfolio.js";
import ErrorHandler from "../utils/error.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary";

export const getAllPortfolios = asyncError(async (req, res, next) => {
  const portfolios = await Portfolio.find({});

  res.status(200).json({
    success: true,
    portfolios,
  });
});
export const getAdminPortfolios = asyncError(async (req, res, next) => {
  const portfolios = await Portfolio.find({});

  res.status(200).json({
    success: true,
    portfolios,
  });
});

export const getPortfolioDetails = asyncError(async (req, res, next) => {
  const portfolio = await Portfolio.findById(req.params.id);

  if (!portfolio) return next(new ErrorHandler("Portfolio not found", 404));

  res.status(200).json({
    success: true,
    portfolio,
  });
});

export const createPortfolio = asyncError(async (req, res, next) => {
  const { name, location, date } = req.body;

  if (!req.file) return next(new ErrorHandler("Please add image", 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await Portfolio.create({
    name,
    location,
    date,
    images: [image],
  });

  res.status(200).json({
    success: true,
    message: "Portfolio Created Successfully",
  });
});

export const updatePortfolio = asyncError(async (req, res, next) => {
  const { name, location, date } = req.body;

  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) return next(new ErrorHandler("Portfolio not found", 404));

  if (name) portfolio.name = name;
  if (location) portfolio.location = location;
  if (date) portfolio.date = date;

  await portfolio.save();

  res.status(200).json({
    success: true,
    message: "Portfolio Updated Successfully",
  });
});

export const addPortfolioImage = asyncError(async (req, res, next) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) return next(new ErrorHandler("Portfolio not found", 404));

  if (!req.file) return next(new ErrorHandler("Please add image", 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  portfolio.images.push(image);
  await portfolio.save();

  res.status(200).json({
    success: true,
    message: "Image Added Successfully",
  });
});

export const deletePortfolioImage = asyncError(async (req, res, next) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) return next(new ErrorHandler("Portfolio not found", 404));

  const id = req.query.id;

  if (!id) return next(new ErrorHandler("Please Image Id", 400));

  let isExist = -1;

  portfolio.images.forEach((item, index) => {
    if (item._id.toString() === id.toString()) isExist = index;
  });

  if (isExist < 0) return next(new ErrorHandler("Image doesn't exist", 400));

  await cloudinary.v2.uploader.destroy(portfolio.images[isExist].public_id);

  portfolio.images.splice(isExist, 1);

  await portfolio.save();

  res.status(200).json({
    success: true,
    message: "Image Deleted Successfully",
  });
});

export const deletePortfolio = asyncError(async (req, res, next) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) return next(new ErrorHandler("Portfolio not found", 404));

  for (let index = 0; index < portfolio.images.length; index++) {
    await cloudinary.v2.uploader.destroy(portfolio.images[index].public_id);
  }
  await portfolio.remove();
  res.status(200).json({
    success: true,
    message: "Portfolio Deleted Successfully",
  });
});

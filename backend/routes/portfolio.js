import express from "express";
import {
  addPortfolioImage,
  createPortfolio,
  deletePortfolio,
  deletePortfolioImage,
  getAdminPortfolios,
  getAllPortfolios,
  getPortfolioDetails,
  updatePortfolio,
} from "../controllers/portfolio.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all/portfolios", getAllPortfolios);
router.get(
  "/admin/adminportfolios",
  isAuthenticated,
  isAdmin,
  getAdminPortfolios
);

router
  .route("/single/portfolio/:id")
  .get(getPortfolioDetails)
  .put(isAuthenticated, isAdmin, updatePortfolio)
  .delete(isAuthenticated, isAdmin, deletePortfolio);

router.post(
  "/portfolio/new",
  isAuthenticated,
  isAdmin,
  singleUpload,
  createPortfolio
);

router
  .route("/portfolio/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addPortfolioImage)
  .delete(isAuthenticated, isAdmin, deletePortfolioImage);

export default router;

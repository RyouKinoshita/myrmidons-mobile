import express from "express";
import {
  addCategory,
  addServiceImage,
  createService,
  deleteCategory,
  deleteService,
  deleteServiceImage,
  getAdminServices,
  getAllCategories,
  getAllServices,
  listAllServices,
  getServiceDetails,
  updateService,
} from "../controllers/service.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllServices);
router.get("/allservices", listAllServices);
router.get("/admin", isAuthenticated, isAdmin, getAdminServices);

router
  .route("/single/:id")
  .get(getServiceDetails)
  .put(isAuthenticated, isAdmin, updateService)
  .delete(isAuthenticated, isAdmin, deleteService);

router.post("/new", isAuthenticated, isAdmin, singleUpload, createService);

router
  .route("/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addServiceImage)
  .delete(isAuthenticated, isAdmin, deleteServiceImage);

router.post("/category", isAuthenticated, isAdmin, addCategory);

router.get("/categories", getAllCategories);

router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory);

export default router;

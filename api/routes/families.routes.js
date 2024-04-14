import express from "express";
import {
  getFamilies,
  getFamily,
  storeFamily,
  editFamily,
  removeFamily,
} from "../controllers/families.controllers.js";
import {
  validateId,
  validateStoreFamily,
  validateEditFamily,
} from "../../middlewares/validation.middleware.js";
var router = express.Router();

router.get("/families", getFamilies);
router.get("/families/:id", validateId(), getFamily);
router.post("/families", validateStoreFamily(), storeFamily);
router.put("/families/:id", validateEditFamily(), editFamily);
router.delete("/families/:id", validateId(), removeFamily);

export default router;

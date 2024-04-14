import express from "express";
import {
  getBreeds,
  getBreed,
  storeBreed,
  editBreed,
  removeBreed,
} from "../controllers/breeds.controllers.js";
import {
  validateId,
  validateStoreBreed,
  validateEditBreed,
} from "../../middlewares/validation.middleware.js";

var router = express.Router();

router.get("/breeds", getBreeds);
router.get("/breeds/:id", validateId(), getBreed);
router.post("/breeds", validateStoreBreed(), storeBreed);
router.put("/breeds/:id", validateEditBreed(), editBreed);
router.delete("/breeds/:id", validateId(), removeBreed);

export default router;

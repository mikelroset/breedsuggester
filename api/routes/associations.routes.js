import express from "express";
import {
  getAssociations,
  getAssociation,
  storeAssociation,
  editAssociation,
  removeAssociation,
} from "../controllers/associations.controllers.js";
import {
  validateId,
  validateStoreAssociation,
  validateEditAssociation,
} from "../../middlewares/validation.middleware.js";

var router = express.Router();

router.get("/associations", getAssociations);
router.get("/associations/:id", validateId(), getAssociation);
router.post("/associations", validateStoreAssociation(), storeAssociation);
router.put("/associations/:id", validateEditAssociation(), editAssociation);
router.delete("/associations/:id", validateId(), removeAssociation);

export default router;

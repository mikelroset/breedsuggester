import express from "express";
import {
  getFamilies,
  getFamily,
  storeFamily,
  editFamily,
  removeFamily,
} from "../controllers/families.controllers.js";

var router = express.Router();

router.get("/families", getFamilies);
router.get("/families/:id", getFamily);
router.post("/families", storeFamily);
router.put("/families/:id", editFamily);
router.delete("/families/:id", removeFamily);

export default router;

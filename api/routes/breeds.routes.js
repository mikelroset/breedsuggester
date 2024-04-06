import express from "express";
import {
  getBreeds,
  getBreed,
  storeBreed,
  editBreed,
  removeBreed,
} from "../controllers/breeds.controllers.js";

var router = express.Router();

router.get("/breeds", getBreeds);
router.get("/breeds/:id", getBreed);
router.post("/breeds", storeBreed);
router.put("/breeds/:id", editBreed);
router.delete("/breeds/:id", removeBreed);

export default router;

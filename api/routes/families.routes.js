import express from "express";
import {
    getFamilies,
    getFamily,
    createFamily,
    updateFamily,
    deleteFamily,
  } from "../controllers/families.controllers.js";

var router = express.Router();

router.get("/families", getFamilies);
router.get("/families/:id", getFamily);
router.post("/families", createFamily);
router.put("/families/:id", updateFamily);
router.delete("/families/:id", deleteFamily);

export default router;
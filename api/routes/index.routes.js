import express from "express";
import { getHome, getAbout } from "../controllers/index.controllers.js";

var router = express.Router();

router.get('/', getHome);
router.get('/about', getAbout);

export default router;
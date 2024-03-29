import express from "express";
import { getHome, getAbout } from "../controllers/index.controllers.js";
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', getHome);
router.get('/about', getAbout);

export default router;
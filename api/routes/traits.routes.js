import express from "express";
import {
    getTraits,
    getTrait,
  } from "../controllers/traits.controllers.js";

var router = express.Router();

router.get('/traits', getTraits);
router.get('/traits/:id', getTrait);

export default router;
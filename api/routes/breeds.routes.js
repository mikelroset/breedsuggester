import express from "express";
import {
    getBreeds,
    getBreed,
    createBreed,
    updateBreed,
    deleteBreed,
  } from "../controllers/breeds.controllers.js";

var router = express.Router();

router.get('/breeds', getBreeds);
router.get('/breeds/:id', getBreed);
router.post('/breeds', createBreed);
router.put('/breeds/:id', updateBreed);
router.delete('/breeds/:id', deleteBreed);

export default router;
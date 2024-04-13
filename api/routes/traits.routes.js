import express from "express";
import { getTraits, getTrait } from "../controllers/traits.controllers.js";
import { validateId } from "../../middlewares/validation.middleware.js";
var router = express.Router();

router.get("/traits", getTraits);
router.get("/traits/:id", validateId(), getTrait);

export default router;

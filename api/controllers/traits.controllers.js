import { validationResult } from "express-validator";
import {
  findTraitsByLanguage,
  findTraitById,
} from "../models/traits.models.js";

export const getTraits = async (req, res) => {
  try {
    const result = await findTraitsByLanguage(req.language);
    res.json(result[0]);
  } catch (error) {
    console.error("Error retrieving traits:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getTrait = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;

  try {
    const result = await findTraitById(id, req.language);

    if (result[0].length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send("Trait not found");
    }
  } catch (error) {
    console.error("Error retrieving trait:", error);
    res.status(500).send("Internal Server Error");
  }
};

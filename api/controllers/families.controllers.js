import { validationResult } from "express-validator";
import {
  findFamilies,
  findFamilyById,
  createFamily,
  createFamilyTranslation,
  updateFamily,
  updateFamilyTranslation,
  deleteFamily,
} from "../models/families.models.js";

export const getFamilies = async (req, res) => {
  try {
    const result = await findFamilies(req.language);
    res.json(result[0]);
  } catch (error) {
    console.error("Error retrieving families:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getFamily = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;

  try {
    const result = await findFamilyById(id, req.language);

    if (result[0].length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send("Family not found");
    }
  } catch (error) {
    console.error("Error retrieving family:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const storeFamily = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { internal_name, translations } = req.body;

  try {
    const [result] = await createFamily(internal_name);
    const familyId = result.insertId;

    for (let translation of translations) {
      const { language_code, name, description } = translation;
      const translationValues = [familyId, language_code, name, description];

      await createFamilyTranslation(translationValues);
    }
    res.status(201).send("Family created successfully");
  } catch (error) {
    console.error("Error creating family:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const editFamily = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;
  const { internal_name, translations } = req.body;
  let tablesUpdated = [];

  try {
    // Update internal name if available
    if (internal_name) {
      const result = await updateFamily(id, internal_name);
      tablesUpdated.push("family");
    }

    // Update translations if available
    if (translations.length > 0) {
      for (let translation of translations) {
        const { language_code, name, description } = translation;
        await updateFamilyTranslation(name, description, id, language_code);
      }

      tablesUpdated.push("family_translations.");
    }

    if (tablesUpdated.length > 0) {
      res.status(200).send(`${tablesUpdated.join(", ")} updated successfully.`);
    } else {
      res.status(200).send("No update.");
    }
  } catch (error) {
    console.error("Error updating family:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const removeFamily = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;

  try {
    const result = await deleteFamily(id);

    if (result[0].affectedRows === 0) {
      res.status(404).send("Family not found");
      return;
    }
    res.send("Family deleted successfully.");
  } catch (error) {
    console.error("Error deleting family:", error);
    res.status(500).send("Internal Server Error");
  }
};

import { validationResult } from "express-validator";
import {
  findAssociations,
  findAssociationById,
  createAssociation,
  updateAssociationById,
  deleteAssociationById,
} from "../models/associations.models.js";

export const getAssociations = async (req, res) => {
  try {
    const result = await findAssociations();
    res.json(result[0]);
  } catch (error) {
    console.error("Error retrieving associations:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getAssociation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;

  try {
    const result = await findAssociationById(id);

    if (result[0].length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send("Association not found");
    }
  } catch (error) {
    console.error("Error retrieving association:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const storeAssociation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, long_name } = req.body;

  try {
    const result = await createAssociation(name, long_name);
    res.status(201).send("Association created successfully");
  } catch (error) {
    console.error("Error creating association:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const editAssociation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;
  const { name, long_name } = req.body;

  const newValues = [];
  const fieldsToUpdate = [];

  if (name) {
    newValues.push(name);
    fieldsToUpdate.push("name = ?");
  }

  if (long_name) {
    newValues.push(long_name);
    fieldsToUpdate.push("long_name = ?");
  }

  try {
    const result = await updateAssociationById(id, fieldsToUpdate, newValues);
    res.status(200).send("Association updated successfully");
  } catch (error) {
    console.error("Error updating association:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const removeAssociation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.params.id;

  try {
    const result = await deleteAssociationById(id);

    if (result[0].affectedRows === 0) {
      res.status(404).send("Association not found");
      return;
    }

    res.send("Association deleted successfully.");
  } catch (error) {
    console.error("Error deleting association:", error);
    res.status(500).send("Internal Server Error");
  }
};

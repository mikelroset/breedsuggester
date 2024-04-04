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
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send("Invalid association ID");
  }

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
  const { name, long_name } = req.body;

  if (!name || !long_name) {
    return res.status(400).send("Missing required fields (name, long_name)");
  }

  try {
    const result = await createAssociation(name, long_name);
    res.status(201).send("Association created successfully");
  } catch (error) {
    console.error("Error creating association:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const editAssociation = async (req, res) => {
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
  const id = req.params.id;

  try {
    const result = await deleteAssociationById(id);

    if (result.affectedRows === 0) {
      res.status(404).send("Association not found");
      return;
    }

    res.send("Association deleted successfully.");
  } catch (error) {
    console.error("Error deleting association:", error);
    res.status(500).send("Internal Server Error");
  }
};

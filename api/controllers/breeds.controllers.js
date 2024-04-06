import {
  findBreeds,
  findBreedById,
  createBreed,
  createBreedTrait,
  createBreedAssociation,
  createBreedTranslation,
  updateBreed,
  updateBreedTranslation,
  deleteBreed,
  deleteBreedTraits,
  deleteBreedAssociations,
} from "../models/breeds.models.js";

export const getBreeds = async (req, res) => {
  try {
    const result = await findBreeds(req.language);
    res.json(result[0]);
  } catch (error) {
    console.error("Error retrieving breeds:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getBreed = async (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    return res.status(400).send("Invalid breed ID");
  }

  try {
    const result = await findBreedById(id);

    if (result[0].length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send("Breed not found");
    }
  } catch (error) {
    console.error("Error retrieving breed:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const storeBreed = async (req, res) => {
  const {
    internal_name,
    original_name,
    family_id,
    min_height,
    max_height,
    min_weight,
    max_weight,
    traits,
    associations,
    translations,
  } = req.body;

  try {
    const [result] = await createBreed(
      internal_name,
      original_name,
      family_id,
      min_height,
      max_height,
      min_weight,
      max_weight
    );
    const breedId = result.insertId;

    // Add Breed traits
    for (const trait of traits) {
      await createBreedTrait(breedId, trait);
    }

    // Add Breed associations
    for (const association of associations) {
      await createBreedAssociation(breedId, association);
    }

    // Add Breed translations
    for (const translation of translations) {
      const { language_code, name, appearance, history, behavior } =
        translation;
      const translationValues = [
        breedId,
        language_code,
        name,
        appearance,
        history,
        behavior,
      ];

      await createBreedTranslation(translationValues);
    }

    res.status(201).send("Breed created successfully");
  } catch (error) {
    console.error("Error creating breed:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const editBreed = async (req, res) => {
  const id = req.params.id;
  const {
    internal_name,
    original_name,
    family_id,
    min_height,
    max_height,
    min_weight,
    max_weight,
    traits,
    associations,
    translations,
  } = req.body;

  let tablesUpdated = [];

  try {
    // Update breed table values if fields are changed
    const breedFieldsToUpdate = {};

    if (internal_name) breedFieldsToUpdate.internal_name = internal_name;
    if (original_name) breedFieldsToUpdate.original_name = original_name;
    if (family_id) breedFieldsToUpdate.family_id = family_id;
    if (min_height) breedFieldsToUpdate.min_height = min_height;
    if (max_height) breedFieldsToUpdate.max_height = max_height;
    if (min_weight) breedFieldsToUpdate.min_weight = min_weight;
    if (max_weight) breedFieldsToUpdate.max_weight = max_weight;

    if (Object.keys(breedFieldsToUpdate).length > 0) {
      const breedFields = Object.keys(breedFieldsToUpdate)
        .map(
          (key) =>
            `${key} = ${
              typeof breedFieldsToUpdate[key] === "string"
                ? '"' + breedFieldsToUpdate[key] + '"'
                : breedFieldsToUpdate[key]
            }`
        )
        .join(", ");

      await updateBreed(breedFields, id);
      tablesUpdated.push("breed");
    }

    // Update breed_traits table
    if (traits && traits.length > 0) {
      await deleteBreedTraits(id);

      for (let i = 0; i < traits.length; i++) {
        await createBreedTrait(id, traits[i]);
      }
      tablesUpdated.push("breed_traits");
    }

    // Update breed_associations table
    if (associations && associations.length > 0) {
      await deleteBreedAssociations(id);

      for (let i = 0; i < associations.length; i++) {
        await createBreedAssociation(id, associations[i]);
      }
      tablesUpdated.push("breed_associations");
    }

    // Update breed_translations table
    if (translations && translations.length > 0) {
      for (let translation of translations) {
        const breedTranslationFieldsToUpdate = [];
        for (let [key, value] of Object.entries(translation)) {
          if (value) {
            breedTranslationFieldsToUpdate.push(`${key} = "${value}"`);
          }
        }

        if (breedTranslationFieldsToUpdate.length > 0) {
          const breedNewTranslations =
            breedTranslationFieldsToUpdate.join(", ");

          await updateBreedTranslation(
            id,
            translation.language_code,
            breedNewTranslations
          );

          tablesUpdated.push("breed_translations");
        }
      }
    }

    if (tablesUpdated.length > 0) {
      res.status(200).send(`${tablesUpdated.join(", ")} updated successfully.`);
    } else {
      res.status(200).send("No update.");
    }
  } catch (error) {
    console.error("Error updating breed:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const removeBreed = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteBreed(id);

    if (result.affectedRows === 0) {
      res.status(404).send("Breed not found");
      return;
    }
    res.send("Breed deleted successfully.");
  } catch (error) {
    console.error("Error deleting breed:", error);
    res.status(500).send("Internal Server Error");
  }
};

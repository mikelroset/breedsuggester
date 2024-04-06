import pool from "../../database/connection.js";

export const findBreeds = (language) => {
  return pool.query(
    `
    SELECT
    breed.id,
    breed.internal_name,
    breed.original_name,
    breed.min_height,
    breed.max_height,
    breed.min_weight,
    breed.max_weight,
    family_translations.name AS family_name,
    breed_translations.language_code,
    breed_translations.name,
    breed_translations.appearance,
    breed_translations.history,
    breed_translations.behavior,
    GROUP_CONCAT(DISTINCT association.name ORDER BY association.name SEPARATOR '; ') AS associations,
    GROUP_CONCAT(DISTINCT trait_translations.name ORDER BY trait_translations.name SEPARATOR '; ') AS traits
  FROM
    breed
    LEFT JOIN family ON breed.family_id = family.id
    LEFT JOIN family_translations ON family.id = family_translations.family_id AND family_translations.language_code = ?
    LEFT JOIN breed_translations ON breed.id = breed_translations.breed_id AND breed_translations.language_code = ?
    LEFT JOIN breed_associations ON breed.id = breed_associations.breed_id
    LEFT JOIN association ON breed_associations.association_id = association.id
    LEFT JOIN breed_traits ON breed.id = breed_traits.breed_id
    LEFT JOIN trait_translations ON breed_traits.trait_id = trait_translations.trait_id AND trait_translations.language_code = ?
  GROUP BY breed.id
  ORDER BY breed.internal_name ASC;
    `,
    [language, language, language]
  );
};

export const findBreedById = (id, language) => {
  return pool.query(
    `
    SELECT 
        breed.id, 
        breed.internal_name, 
        breed.original_name, 
        breed.min_height, 
        breed.max_height, 
        breed.min_weight, 
        breed.max_weight, 
        family_translations.name AS family_name, 
        breed_translations.language_code, 
        breed_translations.name, 
        breed_translations.appearance, 
        breed_translations.history, 
        breed_translations.behavior, 
        GROUP_CONCAT(DISTINCT association.name ORDER BY association.name SEPARATOR '; ') AS associations, 
        GROUP_CONCAT(DISTINCT trait_translations.name ORDER BY trait_translations.name SEPARATOR '; ') AS traits 
      FROM 
        breed 
        LEFT JOIN family ON breed.family_id = family.id 
        LEFT JOIN family_translations ON family.id = family_translations.family_id 
          AND family_translations.language_code = ? 
        LEFT JOIN breed_translations ON breed.id = breed_translations.breed_id 
          AND breed_translations.language_code = ? 
        LEFT JOIN breed_associations ON breed.id = breed_associations.breed_id 
        LEFT JOIN association ON breed_associations.association_id = association.id 
        LEFT JOIN breed_traits ON breed.id = breed_traits.breed_id 
        LEFT JOIN trait_translations ON breed_traits.trait_id = trait_translations.trait_id 
          AND trait_translations.language_code = ?
      WHERE breed.id = ?
      GROUP BY breed.id 
      ORDER BY breed.internal_name ASC;
    `,
    [language, language, language, id]
  );
};

export const createBreed = (
  internal_name,
  original_name,
  family_id,
  min_height,
  max_height,
  min_weight,
  max_weight
) => {
  return pool.query(
    `INSERT INTO breed (internal_name, original_name, family_id, min_height, max_height, min_weight, max_weight) VALUES (?, ?, ?, ?, ?, ?, ?);`,
    [
      internal_name,
      original_name,
      family_id,
      min_height,
      max_height,
      min_weight,
      max_weight,
    ]
  );
};

export const createBreedTrait = (breedId, trait) => {
  return pool.query(
    `INSERT INTO breed_traits (breed_id, trait_id) VALUES (?, ?);`,
    [breedId, trait]
  );
};

export const createBreedAssociation = (breedId, associationId) => {
  return pool.query(
    `INSERT INTO breed_associations (breed_id, association_id) VALUES (?, ?);`,
    [breedId, associationId]
  );
};

export const createBreedTranslation = (translationValues) => {
  return pool.execute(
    `INSERT INTO breed_translations (breed_id, language_code, name, appearance, history, behavior) VALUES (?, ?, ?, ?, ?, ?)`,
    translationValues
  );
};

export const updateBreed = (breedNewValues, id) => {
  return pool.query(`UPDATE breed SET ${breedNewValues} WHERE id = ?;`, [id]);
};

export const updateBreedTranslation = (id, language, breedNewTranslations) => {
  console.log(
    `UPDATE breed_translations SET ${breedNewTranslations} WHERE breed_id = ${id} AND language_code = ${language};`
  );
  return pool.query(
    `UPDATE breed_translations SET ${breedNewTranslations} WHERE breed_id = ? AND language_code = ?;`,
    [id, language]
  );
};

export const deleteBreed = (id) => {
  return pool.query(
    `DELETE breed, translations, traits, associations
    FROM breed
    LEFT JOIN breed_translations AS translations ON breed.id = translations.breed_id
    LEFT JOIN breed_traits AS traits ON breed.id = traits.breed_id
    LEFT JOIN breed_associations AS associations ON breed.id = associations.breed_id
    WHERE breed.id = ?;`,
    [id]
  );
};

export const deleteBreedTraits = (id) => {
  return pool.query(`DELETE FROM breed_traits WHERE breed_id = ?;`, [id]);
};

export const deleteBreedAssociations = (id) => {
  return pool.query(`DELETE FROM breed_associations WHERE breed_id = ?;`, [id]);
};

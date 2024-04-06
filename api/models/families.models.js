import pool from "../../database/connection.js";

export const findFamilies = (language) => {
  return pool.query(
    `SELECT family.id, family.internal_name, family_translations.language_code, family_translations.name, family_translations.description 
    FROM family 
    JOIN family_translations ON family.id = family_translations.family_id
    WHERE family_translations.language_code = ?;`,
    [language]
  );
};

export const findFamilyById = (id, language) => {
  return pool.query(
    `SELECT family.id, family.internal_name, family_translations.language_code, family_translations.name, family_translations.description 
    FROM family 
    JOIN family_translations ON family.id = family_translations.family_id
    WHERE family_id = ? AND family_translations.language_code = ?;`,
    [id, language]
  );
};

export const createFamily = (internal_name) => {
  return pool.query(`INSERT INTO family (internal_name) VALUES (?)`, [
    internal_name,
  ]);
};

export const createFamilyTranslation = (translationValues) => {
  return pool.execute(
    `INSERT INTO family_translations (family_id, language_code, name, description) VALUES (?, ?, ?, ?)`,
    translationValues
  );
};

export const updateFamily = (id, internal_name) => {
  return pool.query(`UPDATE family SET internal_name = ? WHERE id = ?;`, [
    internal_name,
    id,
  ]);
};

export const updateFamilyTranslation = (name, description, id, language) => {
  return pool.query(
    `UPDATE family_translations SET name = ?, description = ? WHERE family_id = ? AND language_code = ?`,
    [name, description, id, language]
  );
};

export const deleteFamily = (id) => {
  return pool.query(
    `DELETE family, translations FROM family LEFT JOIN family_translations AS translations ON family.id = translations.family_id WHERE family.id = ?`,
    [id]
  );
};

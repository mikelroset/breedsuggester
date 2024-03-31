import pool from "../../database/connection.js";

export const findTraitsByLanguage = (language) => {
    
    return pool.query(`
        SELECT trait.id, trait.internal_name, trait_translations.language_code, trait_translations.name 
        FROM trait 
        JOIN trait_translations ON trait.id = trait_translations.trait_id
        WHERE trait_translations.language_code = ?;
        `, [language]);
};

export const findTraitById = (id, language) => {
    
    return pool.query(`
        SELECT trait.id, trait.internal_name, trait_translations.language_code, trait_translations.name 
        FROM trait 
        JOIN trait_translations ON trait.id = trait_translations.trait_id
        WHERE trait.id = ? AND trait_translations.language_code = ?;
        `, [id, language]);
};
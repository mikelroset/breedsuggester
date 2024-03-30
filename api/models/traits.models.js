import pool from "../../database/connection.js";

export const getTraitsByLanguage = (language) => {
    
    return pool.query(`
        SELECT trait.id, trait.internal_name, trait_translations.language_code, trait_translations.name 
        FROM trait 
        JOIN trait_translations ON trait.id = trait_translations.trait_id
        WHERE trait_translations.language_code = ?;
        `, [language]);
};

export const getTraitById = (id, language) => {
    
    return pool.query(`
        SELECT trait.id, trait.internal_name, trait_translations.language_code, trait_translations.name 
        FROM trait 
        JOIN trait_translations ON trait.id = trait_translations.trait_id
        WHERE trait.id = ? AND trait_translations.language_code = ?;
        `, [id, language]);
};
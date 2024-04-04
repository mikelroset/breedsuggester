import pool from "../../database/connection.js";

export const findAssociations = () => {
    
    return pool.query(`
        SELECT *
        FROM association;
    `);
};

export const findAssociationById = (id) => {
    
    return pool.query(`
        SELECT *
        FROM association
        WHERE id = ?
    `, [id]);
};

export const createAssociation = (name, long_name) => {

    return pool.query(`
        INSERT INTO association (name, long_name) 
        VALUES (?, ?)
    `, [name, long_name]);
};

export const updateAssociationById = (id, fieldsToUpdate, newValues) => {

    return pool.query(`
        UPDATE association SET ${fieldsToUpdate} WHERE id = ?
    `, [...newValues, id]);
};

export const deleteAssociationById = (id) => {

    return pool.query(`
        DELETE FROM association
        WHERE id = ?
    `, [id]);
};
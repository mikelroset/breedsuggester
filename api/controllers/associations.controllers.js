import { 
    findAssociations, 
    findAssociationById, 
    createAssociation, 
    updateAssociationById, 
    deleteAssociationById 
} from "../models/associations.models.js";

export const getAssociations = async (req, res) => {
    
    try {
        const associations = await findAssociations();
        res.json(associations[0]);
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
        const association = await findAssociationById(id);
        
        if (association[0].length > 0) {
            res.json(association[0]);
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
    console.log(req.body);

    if (!name || !long_name) {
        return res.status(400).send("Missing required fields (name, long_name)");
    }

    try {
        const newAssociation = await createAssociation(name, long_name);
        res.status(201).send("Association created successfully");
    } catch (error) {
        console.error("Error creating association:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const editAssociation = (req, res) => {
    const id = req.params.id;
    res.send(`editAssociation ${id}`);
};

export const removeAssociation = (req, res) => {
    const id = req.params.id;
    res.send(`removeAssociation ${id}`);
};
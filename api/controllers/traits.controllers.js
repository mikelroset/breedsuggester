import { getTraitsByLanguage, getTraitById } from "../models/traits.models.js";

export const getTraits = async (req, res) => {

    try {
        const traits = await getTraitsByLanguage(req.language);
        res.json(traits[0]);
    } catch (error) {
        console.error("Error retrieving traits:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const getTrait = async (req, res) => {

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send("Invalid trait ID");
    }

    try {
        const trait = await getTraitById(id, req.language);
        if (trait) {
            res.json(trait[0]);
        } else {
            res.status(404).send("Trait not found");
        }
    } catch (error) {
        console.error("Error retrieving trait:", error);
        res.status(500).send("Internal Server Error");
    }
};
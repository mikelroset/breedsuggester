import express from "express";
import { 
    getAssociations, 
    getAssociation, 
    createAssociation, 
    updateAssociation, 
    deleteAssociation 
  } from "../controllers/associations.controllers.js";


var router = express.Router();

router.get('/associations', getAssociations);
router.get('/associations/:id', getAssociation);
router.post('/associations', createAssociation);
router.put('/associations/:id', updateAssociation);
router.delete('/associations/:id', deleteAssociation);

export default router;
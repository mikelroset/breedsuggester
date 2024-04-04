import express from "express";
import { 
    getAssociations, 
    getAssociation,
    storeAssociation,
    editAssociation,
    removeAssociation
  } from "../controllers/associations.controllers.js";


var router = express.Router();

router.get('/associations', getAssociations);
router.get('/associations/:id', getAssociation);
router.post('/associations', storeAssociation);
router.put('/associations/:id', editAssociation);
router.delete('/associations/:id', removeAssociation);

export default router;
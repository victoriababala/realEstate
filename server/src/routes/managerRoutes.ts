import express from 'express';
import { createManager, getManager, updateManager } from '../controllers/managerController';


const router = express.Router();


router.get("/:cognitoId", getManager);
router.post("/", createManager);
router.put("/:cognitoId", updateManager);

export default router;
import express from 'express';

import { authMiddleware } from '../middleware/authMiddleware';
import multer from 'multer';
import { createProperty, getProperties, getProperty, listLeasesByProperty } from '../controllers/propertyController';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();


router.get("/", getProperties);
router.get("/:id", getProperty);
router.get("/:propertyId/leases", listLeasesByProperty);
router.post("/",authMiddleware(["manager"]),upload.array("photos"), createProperty);


export default router;
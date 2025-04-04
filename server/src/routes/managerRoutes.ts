import express from "express";
import {
  createManager,
  getManager,
  getManagerProperties,
  updateManager,
} from "../controllers/managerController";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.post("/", createManager);
router.put("/:cognitoId", updateManager);
router.put("/:cognitoId/properties", getManagerProperties);

export default router;

import express from "express";
import { getBusiness, createBusiness, updateBusiness } from "../controllers/Business.js";

const router = express.Router();

// Starting with /Business
router.get("/", getBusiness);
router.get("/:id", getBusiness);
router.get("/:name", getBusiness);

router.post("/", createBusiness);

router.patch("/", updateBusiness);

export default router;

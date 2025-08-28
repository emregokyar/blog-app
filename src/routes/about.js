import express from "express";
import { aboutPage } from "../controllers/aboutController.js";

const router= express.Router();
router.get("/about", aboutPage);
export default router;
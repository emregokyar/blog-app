import express from "express";
import { indexPage } from "../controllers/indexController.js";

const router= express.Router();
router.get("/", indexPage);
export default router;
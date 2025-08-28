import express from "express";
import { postPage } from "../controllers/postController.js";

const router= express.Router();
router.get("/posts", postPage);
export default router;
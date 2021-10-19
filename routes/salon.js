import express from "express";
import { addSalon, getSalon } from "../controllers/Salon";
import formidable from "express-formidable";

const router = express.Router();

router.post("/salon", formidable(), addSalon);
router.get("/salon", getSalon);

module.exports = router;

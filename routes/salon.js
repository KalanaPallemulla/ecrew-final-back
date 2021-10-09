import express from "express";
import { addSalon } from "../controllers/Salon";

const router = express.Router();

router.get("/", addSalon);

module.exports = router;

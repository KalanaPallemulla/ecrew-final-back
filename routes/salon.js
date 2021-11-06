import express from "express";
import {
  addSalon,
  getSalon,
  addLocation,
  getLocations,
} from "../controllers/Salon";
import formidable from "express-formidable";
import Salon from "../models/Salon";

const router = express.Router();

router.post("/salon", formidable(), addSalon);
router.get("/salon", getSalon);

router.get("/salon/image/:id", async (req, res) => {
  try {
    let salon = await Salon.findById(req.params.id).exec();
    // console.log(salon);
    if (salon && salon.images && salon.images.data !== null) {
      res.set("Content-Type", salon.images.contentType);
      return res.send(salon.images.data);
    }
    // res.send(salon.images.data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/salon/locations", addLocation);
router.get("/salon/locations", getLocations);

module.exports = router;

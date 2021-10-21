import Salon from "../models/Salon";
import fs from "fs";

export const addSalon = async (req, res) => {
  console.log("MMMMM");
  try {
    const fields = req.fields;
    const files = req.files;
    console.log(files.image);

    const { name, location, contact, openTime, closeTime } = fields;

    //Validations
    if (!name) {
      return res.status(400).json({ msg: "Name is required" });
    }
    if (!location) {
      return res.status(400).json({ msg: "Location is required" });
    }
    {
      if (!contact) return res.status(400).json({ msg: "Contact is required" });
    }
    if (!openTime) {
      return res.status(400).send({ msg: "Open Time is required" });
    }
    if (!closeTime) {
      return res.status(400).send({ msg: "Close Time is required" });
    }

    // if (!features) return res.status(400).send({ msg: "Features is required" });

    let salon = new Salon(fields);

    if (files.image) {
      salon.images.data = fs.readFileSync(files.image.path);
      salon.images.contentType = files.image.type;
    }

    salon.save((err, result) => {
      if (err) {
        console.log("Saving salon error =>", err);
        res.status(400).json(err);
      }
      res.send({ msg: "Salon Added" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: err.message,
    });
  }
};

export const getSalon = async (req, res) => {
  try {
    let salon = await Salon.find()
      .select("-image.data")
      .sort("-createdAt")
      .exec();
    if (salon.length == 0)
      return res.status(400).send({ msg: " There are no salons" });
    res.json(salon);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: err.message,
    });
  }
};

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const salonSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    location: {
      type: String,
      required: "Location is required",
    },
    // features: [
    //   {
    //     service: {
    //       type: String,
    //       required: "Service is required",
    //     },
    //     price: {
    //       type: String,
    //       required: "Price is required",
    //     },
    //   },
    // ],
    images: {
      type: Buffer,
      contentType: String,
    },
    openTime: {
      type: String,
      required: true,
    },
    closeTime: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Salon", salonSchema);

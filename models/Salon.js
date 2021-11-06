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
      data: Buffer,
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
    parking: {
      type: Boolean,
      default: false,
    },
    wifi: {
      type: Boolean,
      default: false,
    },
    ac: {
      type: Boolean,
      default: false,
    },
    grade: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Salon", salonSchema);

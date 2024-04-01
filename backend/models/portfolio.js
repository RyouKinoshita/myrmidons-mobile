import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter event name"],
    trim: true,
    maxLength: [100, "Event name cannot exceed 100 characters"],
  },
  location: {
    type: String,
    require: [true, "Please enter the location of event"],
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    default: 0,
  },
  images: [{ public_id: String, url: String }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Portfolio = mongoose.model("Portfolio", schema);

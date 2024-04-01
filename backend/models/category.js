import mongoose from "mongoose";

const schema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please Enter Category"],
  },
  // category = [
  //   "Digital Marketing",
  //   "Social Media Management",
  //   "Graphics & Video Production",
  //   "Web Development",
  //   "Customer Service & QA",
  //   "Project Management",
  //   "Photography",
  //   "KOL",
  //   "Studio Services",
  //   "PC/Mobile Game Management",
  // ];
});

export const Category = mongoose.model("Category", schema);

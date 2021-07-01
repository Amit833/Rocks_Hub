const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EmploymentSchema = new Schema(
  {
    company: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    date_attended: { type: String },
    date_end: { type: String },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Employment = model("Employment", EmploymentSchema);
module.exports = Employment;

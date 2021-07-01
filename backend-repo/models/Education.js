const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EducationSchema = new Schema(
  {
    school: { type: String, required: true },
    degree: [{ type: String, required: true }],
    date_attended: { type: String },
    date_end: { type: String },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Education = model("Education", EducationSchema);
module.exports = Education;

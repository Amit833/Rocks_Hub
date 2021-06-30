const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProfileSchema = new Schema(
  {
    main_service: { type: String, required: true },
    skills: [{ type: String, required: true }],
    expertise_level: {
      type: String,
      enum: ["Entry level", "Intermediate", "Expert"],
      default: "user",
      required: true,
    },
    languages: [{ type: String, required: true }],
    education: { type: Schema.Types.ObjectId, ref: "Education" },
    past_experience: { type: String, required: true },
    hourly_rate: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Profile = model("Profile", ProfileSchema);
module.exports = Profile;

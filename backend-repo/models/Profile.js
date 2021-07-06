const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProfileSchema = new Schema(
  {
    main_service: { type: String },
    skills: [{ type: String, required: true }],
    expertise_level: {
      type: String,
      enum: ["Entry level", "Intermediate", "Expert"],
      default: "Expert",
      required: true,
    },
    languages: [{ type: String, required: true }],
    user: { type: Schema.Types.ObjectId, ref: "Education" },
    education: { type: Schema.Types.ObjectId, ref: "Education" },
    employment: { type: Schema.Types.ObjectId, ref: "Employment" },

    past_experience: { type: String },
    hourly_rate: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Profile = model("Profile", ProfileSchema);
module.exports = Profile;

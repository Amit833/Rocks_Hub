const Profile = require("../models/Profile");
const Education = require("../models/Education");

exports.addProfile = async (req, res, next) => {
  const info = req.body;
  try {
    const profiles = await Profile.create(info);
    res.json(profiles);
  } catch (err) {
    next(err);
  }
};

exports.getProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    res.send(profiles);
  } catch (err) {
    next(err);
  }
};

exports.getProfile = async (req, res, next) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id)
      .populate({ path: "employment" })
      .populate("education");
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  const { id } = req.params;
  try {
    const profileUpdate = await Profile.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(profileUpdate);
  } catch (err) {
    next(err);
  }
};

exports.deleteProfile = async (req, res, next) => {
  const { id } = req.params;
  try {
    const profileRemove = await Profile.findByIdAndDelete(id);
    res.json(profileRemove);
  } catch (err) {
    next(err);
  }
};

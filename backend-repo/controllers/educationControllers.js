const Education = require("../models/Education");

exports.addEducation = async (req, res, next) => {
  const info = req.body;
  try {
    const educations = await Education.create(info);
    res.json(educations);
  } catch (err) {
    next(err);
  }
};

exports.getEducations = async (req, res, next) => {
  try {
    const educations = await Education.find();
    res.send(educations);
  } catch (err) {
    next(err);
  }
};

exports.getEducation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const education = await Education.findById(id);
    res.json(education);
  } catch (err) {
    next(err);
  }
};

exports.updateEducation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const educationUpdate = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(educationUpdate);
  } catch (err) {
    next(err);
  }
};

exports.deleteEducation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const educationRemove = await Education.findByIdAndDelete(id);
    res.json(educationRemove);
  } catch (err) {
    next(err);
  }
};

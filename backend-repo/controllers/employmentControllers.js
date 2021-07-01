const Employment = require("../models/Employment");

exports.addEmployment = async (req, res, next) => {
  const info = req.body;
  try {
    const employments = await Employment.create(info);
    res.json(employments);
  } catch (err) {
    next(err);
  }
};

exports.getEmployments = async (req, res, next) => {
  try {
    const employments = await Employment.find();
    res.send(employments);
  } catch (err) {
    next(err);
  }
};

exports.getEmployment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employment = await Employment.findById(id);
    res.json(employment);
  } catch (err) {
    next(err);
  }
};

exports.updateEmployment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employmentUpdate = await Employment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(employmentUpdate);
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employmentRemove = await Employment.findByIdAndDelete(id);
    res.json(employmentRemove);
  } catch (err) {
    next(err);
  }
};

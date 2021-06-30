const Joi = require("joi");

const validateSchema = (req, res, next) => {
  const data = req.body;
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),

    email: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .required()
      .pattern(
        new RegExp(
          /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
        )
      ),
    location: Joi.string(),
    role: Joi.string(),
  });

  const { error, value } = schema.validate(data);
  if (error) next(error);
  next();
};

module.exports.validateSchema = validateSchema;

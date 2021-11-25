const Joi = require('joi');

const validateLogin = (req, res, next) => {
  console.log(req.body.username.length);
  const { error } = Joi.object({
    username: Joi.string().regex(/\w+/).min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate(req.body);

  if (error) next(error);
  
  next();
};

module.exports = validateLogin;

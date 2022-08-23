const { body } = require("express-validator");

module.exports = {
  // ------------------------------------------------------------------------------------------------------------
  // name Validator
  nameValidation: body("fullName")
    .isLength({ max: 30, min: 4 })
    .withMessage(" name or title must be between 3 to 30 characters")
    .isAlpha()
    .withMessage("wrong input format"),
  // ------------------------------------------------------------------------------------------------------------
  // email Validator
  emailValidation: body("email").isEmail().withMessage("invalid email id"),
  // ------------------------------------------------------------------------------------------------------------
  // address Validator
  addressValidation: body("address").isLength({ max: 30 }),
  // ------------------------------------------------------------------------------------------------------------
  // stream Validator
  streamValidation: body("stream")
    .isNumeric()
    .withMessage("invalid stream selection"),
  // ------------------------------------------------------------------------------------------------------------
  // year Validator
  yearValidation: body("year")
    .isNumeric()
    .withMessage("invalid year selection"),

  // ------------------------------------------------------------------------------------------------------------
  // title Validator
  titleValidation: body("title")
    .isLength({ max: 30, min: 4 })
    .withMessage(" name or title must be between 3 to 30 characters"),
  // ------------------------------------------------------------------------------------------------------------
  // password Validator
  passwordValidation: body("title")
    .isLength({ min: 7 })
    .withMessage(" password length must be more than 7 character")
    .isStrongPassword()
    .withMessage("password is not strong"),
  // ------------------------------------------------------------------------------------------------------------
  // id Validator
  idValidation: body("id").isNumeric().withMessage("invalid id selection"),
  // ------------------------------------------------------------------------------------------------------------
  // category Validator
  categoryValidation: body("category")
    .isLength({ max: 20, min: 4 })
    .withMessage("invalid input ")
    .isAlpha()
    .withMessage("invalid input"),

  // ------------------------------------------------------------------------------------------------------------
  // quantity Validator
  quantityValidation: body("quantity")
    .isNumeric()
    .withMessage("quantity is not a number"),
  // ------------------------------------------------------------------------------------------------------------
  // status Validator
  statusValidation: body("status").isBoolean().withMessage("invalid selection"),
};

const { body } = require("express-validator");

module.exports = {
  // ------------------------------------------------------------------------------------------------------------
  // first Validator
  firstNameValidation: body("firstName")
    .isLength({ max: 30, min: 4 })
    .withMessage(" name or title must be between 3 to 30 characters")
    .isAlpha()
    .withMessage("wrong input format"),
  // ------------------------------------------------------------------------------------------------------------
  // middleName Validator
  middleNameValidation: (req, res, next) => {
    const { middleName } = req.body;

    if (
      (!/^[A-Za-z\s]+$/.test(middleName) && middleName.length) ||
      (middleName.length <= 3 && middleName.length >= 30)
    ) {
      return res
        .status(400)
        .json({ message: /^[A-Za-z\s]+$/.test(middleName) });
    }

    next();
  },
  // ------------------------------------------------------------------------------------------------------------
  // lastName Validator
  lastNameValidation: body("lastName")
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
  // streamName input Validator
  streamValidationInput: body("streamName")
    .isAlpha()
    .isLength({ max: 30 })
    .withMessage("invalid stream name"),
  // ------------------------------------------------------------------------------------------------------------
  // stream code Validator
  streamValidationCode: body("streamCode")
    .isAlpha()
    .isLength({ max: 5 })
    .withMessage("invalid stream code"),
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

// body("middleName")
//   .isLength({ max: 30 })
//   .withMessage(" name or title must be between 3 to 30 characters")
//   .isAlpha()
//   .withMessage("wrong input format");

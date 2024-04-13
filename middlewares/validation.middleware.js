import { param, body } from "express-validator";

// Global validation settings
export const validateId = () => {
  return [param("id").isInt().withMessage("Id must be an integer")];
};

// Associations validation settings
export const validateStoreAssociation = () => {
  return [
    body("name")
      .notEmpty()
      .isLength({ max: 5 })
      .escape()
      .withMessage("Max length is 5 characters"),
    body("long_name").notEmpty().escape(),
  ];
};

export const validateEditAssociation = () => {
  return [
    param("id").isInt().withMessage("ID must be an integer"),
    body("name")
      .optional()
      .isLength({ max: 5 })
      .escape()
      .withMessage("Max length is 5 characters"),
    body("long_name").optional().escape(),
  ];
};

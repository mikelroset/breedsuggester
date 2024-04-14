import { param, body } from "express-validator";

// Global validation settings
export const validateId = () => {
  return [param("id").isInt().withMessage("Must be an integer")];
};

// Associations validation settings
export const validateStoreAssociation = () => {
  return [
    body("name")
      .notEmpty()
      .isLength({ max: 5 })
      .escape()
      .withMessage("Max length 5 characters"),
    body("long_name").notEmpty().escape(),
  ];
};

export const validateEditAssociation = () => {
  return [
    param("id").isInt().withMessage("Must be an integer"),
    body("name")
      .optional()
      .isLength({ max: 5 })
      .escape()
      .withMessage("Max length 5 characters"),
    body("long_name").optional().escape(),
  ];
};

// Breeds validation settings
export const validateStoreBreed = () => {
  return [
    body("internal_name").notEmpty().isString().escape(),
    body("original_name").isString().escape(),
    body("family_id").notEmpty().isInt(),
    body("min_height")
      .notEmpty()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("max_height")
      .notEmpty()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("min_weight")
      .notEmpty()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("max_weight")
      .notEmpty()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("traits").notEmpty().isArray(),
    body("associations").notEmpty().isArray(),
    body("translations").notEmpty().isArray(),
    body("**.breed_id").notEmpty().isInt(),
    body("**.language_code")
      .notEmpty()
      .isString()
      .isLength({ max: 5, min: 5 })
      .withMessage("Must be a string with 5 characters"),
    body("**.name").notEmpty().isString().escape(),
    body("**.appearance").notEmpty().isString().escape(),
    body("**.history").notEmpty().isString().escape(),
    body("**.behavior").notEmpty().isString().escape(),
  ];
};

export const validateEditBreed = () => {
  return [
    body("internal_name").optional().isString().escape(),
    body("original_name").isString().escape(),
    body("family_id").optional().isInt(),
    body("min_height")
      .optional()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("max_height")
      .optional()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("min_weight")
      .optional()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("max_weight")
      .optional()
      .isInt()
      .isLength({ max: 4 })
      .withMessage("Max length 4 characters"),
    body("traits").optional().isArray(),
    body("associations").optional().isArray(),
    body("translations").optional().isArray(),
    body("**.breed_id").optional().isInt(),
    body("**.language_code")
      .optional()
      .isString()
      .isLength({ max: 5, min: 5 })
      .withMessage("Must be a string with 5 characters"),
    body("**.name").optional().isString().escape(),
    body("**.appearance").optional().isString().escape(),
    body("**.history").optional().isString().escape(),
    body("**.behavior").optional().isString().escape(),
  ];
};

// Families validation settings

export const validateStoreFamily = () => {
  return [
    body("internal_name").notEmpty().isString().escape(),
    body("translations").notEmpty().isArray(),
    body("**.family_id").notEmpty().isInt(),
    body("**.language_code")
      .notEmpty()
      .isString()
      .isLength({ max: 5, min: 5 })
      .withMessage("Must be a string with 5 characters"),
    body("**.name").notEmpty().isString().escape(),
    body("**.description").optional().isString().escape(),
  ];
};

export const validateEditFamily = () => {
  return [
    body("internal_name").optional().isString().escape(),
    body("translations").optional().isArray(),
    body("**.family_id").optional().isInt(),
    body("**.language_code")
      .optional()
      .isString()
      .isLength({ max: 5, min: 5 })
      .withMessage("Must be a string with 5 characters"),
    body("**.name").optional().isString().escape(),
    body("**.description").optional().isString().escape(),
  ];
};

/**
 * Validation utilities
 * Centralized validation functions
 */

const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
const validateEmail = (email) => REGEX_PATTERNS.email.test(email);

/**
 * Validate required fields
 * @param {object} data - Data object
 * @param {array} requiredFields - Array of required field names
 * @returns {object} { isValid: boolean, error?: string }
 */
const validateRequiredFields = (data, requiredFields) => {
  const missing = requiredFields.filter((field) => !data[field]);

  if (missing.length > 0) {
    return {
      isValid: false,
      error: `${missing.join(", ")} ${missing.length > 1 ? "are" : "is"} required`,
    };
  }

  return { isValid: true };
};

/**
 * Validate contact form data
 * @param {object} formData - Form data to validate
 * @returns {object} { isValid: boolean, error?: string }
 */
const validateContactForm = (formData) => {
  const { name, email, message } = formData;

  // Check required fields
  const requiredCheck = validateRequiredFields(formData, [
    "name",
    "email",
    "message",
  ]);
  if (!requiredCheck.isValid) {
    return requiredCheck;
  }

  // Validate email format
  if (!validateEmail(email)) {
    return {
      isValid: false,
      error: "Invalid email format",
    };
  }

  return { isValid: true };
};

export {
  validateEmail,
  validateRequiredFields,
  validateContactForm,
  REGEX_PATTERNS,
};

/**
 * Response utilities
 * Centralized response formatting
 */

/**
 * Send success response
 * @param {object} res - Express response object
 * @param {string} message - Success message
 * @param {object} data - Response data
 * @param {number} statusCode - HTTP status code
 */
const sendSuccessResponse = (res, message, data = null, statusCode = 200) => {
  res.status(statusCode).json({
    status: "success",
    message,
    ...(data && { data }),
  });
};

/**
 * Send error response
 * @param {object} res - Express response object
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @param {string} error - Additional error info (dev only)
 */
const sendErrorResponse = (res, message, statusCode = 400, error = null) => {
  const response = {
    status: "error",
    message,
  };

  if (process.env.NODE_ENV === "development" && error) {
    response.error = error;
  }

  res.status(statusCode).json(response);
};

export { sendSuccessResponse, sendErrorResponse };

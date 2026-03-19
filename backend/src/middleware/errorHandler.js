const { createErrorResponse } = require("../../components/responseComponent");

const errorHandler = (error, _req, res, _next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json(
    createErrorResponse(error.message || "Unexpected server error", {
      statusCode,
    })
  );
};

module.exports = errorHandler;

const createSuccessResponse = (data, meta = {}) => ({
  ok: true,
  meta,
  data,
});

const createErrorResponse = (message, details = null) => ({
  ok: false,
  error: {
    message,
    details,
  },
});

module.exports = {
  createSuccessResponse,
  createErrorResponse,
};

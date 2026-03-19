const {
  getSiteSnapshot,
  getEmployees,
  getEmployeeBySlug,
  getPricing,
  getIntegrations,
} = require("../services/siteService");
const { createSuccessResponse } = require("../../components/responseComponent");

const getHealth = (_req, res) => {
  res.json(
    createSuccessResponse(
      {
        status: "ok",
      },
      {
        timestamp: new Date().toISOString(),
      }
    )
  );
};

const getSite = (_req, res) => {
  res.json(createSuccessResponse(getSiteSnapshot()));
};

const listEmployees = (_req, res) => {
  res.json(createSuccessResponse(getEmployees()));
};

const getEmployee = (req, res, next) => {
  const employee = getEmployeeBySlug(req.params.slug);

  if (!employee) {
    const error = new Error("Employee not found");
    error.statusCode = 404;
    return next(error);
  }

  res.json(createSuccessResponse(employee));
};

const listPricing = (_req, res) => {
  res.json(createSuccessResponse(getPricing()));
};

const listIntegrations = (_req, res) => {
  res.json(createSuccessResponse(getIntegrations()));
};

module.exports = {
  getHealth,
  getSite,
  listEmployees,
  getEmployee,
  listPricing,
  listIntegrations,
};

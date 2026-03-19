const {
  employees,
  pricing,
  integrations,
  siteSnapshot,
} = require("../models/siteModel");

const getSiteSnapshot = () => siteSnapshot;

const getEmployees = () => employees;

const getEmployeeBySlug = (slug) =>
  employees.find((employee) => employee.slug === slug) || null;

const getPricing = () => pricing;

const getIntegrations = () => integrations;

module.exports = {
  getSiteSnapshot,
  getEmployees,
  getEmployeeBySlug,
  getPricing,
  getIntegrations,
};

const express = require("express");

const {
  getHealth,
  getSite,
  listEmployees,
  getEmployee,
  listPricing,
  listIntegrations,
} = require("../controllers/siteController");

const router = express.Router();

router.get("/health", getHealth);
router.get("/site", getSite);
router.get("/employees", listEmployees);
router.get("/employees/:slug", getEmployee);
router.get("/pricing", listPricing);
router.get("/integrations", listIntegrations);

module.exports = router;

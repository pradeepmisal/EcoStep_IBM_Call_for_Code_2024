const express = require("express");
const getEmission = require("../controllers/emissionController");
const router = express.Router();

router.post("/", getEmission);

module.exports = router;

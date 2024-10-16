// routes/chatbotRoutes.js
const express = require("express");
const { askQuestion } = require("../controllers/chatbotController");

const router = express.Router();

// Route to ask a question
router.post("/ask", askQuestion);

module.exports = router;

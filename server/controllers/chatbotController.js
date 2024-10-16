// controllers/chatbotController.js
const axios = require("axios");

let systemInitialized = false; // Track initialization status

const initializeSystem = async () => {
  if (!systemInitialized) {
    try {
      const response = await axios.post("http://127.0.0.1:5000/initialize");
      systemInitialized = response.data.success; // Update initialization status
    } catch (error) {
      throw new Error("Error initializing system");
    }
  }
};

const askQuestion = async (req, res) => {
  const { question } = req.body;
  try {
    await initializeSystem(); // Ensure the system is initialized

    const response = await axios.post("http://127.0.0.1:5000/ask", {
      question,
    });
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing question", error: error.message });
  }
};

module.exports = {
  askQuestion,
};

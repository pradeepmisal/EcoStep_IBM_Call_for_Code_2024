# EcoStep: Carbon Awareness Made Easy

EcoStep is a user-friendly web application designed to help users calculate and reduce their carbon footprint. Additionally, it includes a question-answering system focused on carbon emissions and environmental topics, utilizing IBM WatsonX AI for natural language processing.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js
- **AI & Vector Storage**: IBM WatsonX AI, FAISS, LangChain

## Features

- Calculate and reduce carbon footprint
- Create and manage a vector database of carbon-related Q&A pairs
- Utilize IBM WatsonX AI for natural language processing
- Process and answer questions based on a carbon footprint report and pre-existing Q&A pairs
- Implement Retrieval-Augmented Generation (RAG) for more accurate and context-aware responses


## Getting Started

Follow these instructions to set up EcoStep on your local machine for development and testing.

### Prerequisites

#### For the Web Application

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- A code editor (e.g., Visual Studio Code)

#### For the Q&A System

- Python 3.7+
- IBM Cloud account with WatsonX AI service
- Required Python packages (see `requirements.txt`)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Tech-Avinya-07/EcoStep_Carbon-Awareness-Made-Easy.git
   cd EcoStep_Carbon-Awareness-Made-Easy
   ```

2. **Install Dependencies**

   Client-Side (Frontend):

   ```bash
   cd client
   npm install
   ```

   Server-Side (Backend):

   ```bash
   cd server
   npm install
   ```

   Q&A System (Python):

   ```bash
   cd CarbonFootPrintChatbot
   pip install -r requirements.txt
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the server directory and add the following variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   EMISSION_API_KEY=your_emission_api_key
   RAPIDAPI_KEY=your_rapidapi_key
   RAPIDAPI_HOST=your_rapidapi_host
   JWT_SECRET_KEY=your_jwt_secret_key
   ```

   create a .env file in the chatbot directory with these variables:

   ```plaintext
   URL=https://us-south.ml.cloud.ibm.com
   API_KEY=your_ibm_watson_api_key
   PROJECT_ID=your_ibm_watsonx_project_id
   ```

4. **Run the Application**

   Run the Python Chatbot:

   ```bash
   python faissibm.py
   ```

   Start the backend server

   ```bash
   npm start
   ```

   Start the frontend application:

   ```bash
   npm run dev
   ```

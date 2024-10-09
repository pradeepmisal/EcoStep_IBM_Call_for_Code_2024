# EcoStep: Carbon Awareness Made Easy

EcoStep is a user-friendly web app that helps you easily calculate and reduce your carbon footprint.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js

## Getting Started

Follow these instructions to set up EcoStep on your local machine for development and testing.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- A code editor (e.g., Visual Studio Code)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Tech-Avinya-07/EcoStep_Carbon-Awareness-Made-Easy.git
   cd EcoStep_Carbon-Awareness-Made-Easy
   ```

2. **Install Dependencies**

   Navigate to both the frontend and backend directories and install the necessary packages.

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

3. **Set Up Environment Variables**

   Create a `.env` file in the server directory and add the following variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   EMISSION_API_KEY=your_emission_api_key
   RAPIDAPI_KEY=your_rapidapi_key
   RAPIDAPI_HOST=your_rapidapi_host
   JWT_SECRET_KEY=your_jwt_secret_key
   ```

4. **Run the Application**

   Start the backend server:

   ```bash
   npm start
   ```

   Start the frontend application:

   ```bash
   npm run dev
   ```

// Import required modules
const express = require('express'); // Express framework for creating the server
const mongoose = require('mongoose'); // Mongoose for MongoDB interactions
const cors = require('cors'); // CORS middleware to handle cross-origin requests
const vacationRoutes = require('./routes/vacationRoutes'); // Import vacation routes

// Create an Express app
const app = express();

// Use CORS to allow cross-origin requests (e.g., for frontend-backend communication)
app.use(cors());

// Middleware to parse JSON data in incoming requests
app.use(express.json());

// Use vacationRoutes for handling API requests related to vacations
// All routes defined in vacationRoutes will be prefixed with '/api'
app.use('/api', vacationRoutes);

// Define the port on which the server will run
// Use the PORT environment variable if available, otherwise default to 27017
const PORT = process.env.PORT || 27017;

// Start the server and listen for requests on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Import required modules
const express = require('express');  // Importing Express framework
const router = express.Router();     // Creating an Express Router instance
const Employee = require('../db');   // Importing the Employee model from the database file

// Route to get all employee vacation data
// This route is called when a GET request is made to '/vacations'
// It fetches the employee data (including vacations) from the MongoDB database
router.get('/vacations', async (req, res) => {
  try {
    // Fetch all employees from the database
    const employees = await Employee.find();

    // Send the employee data in JSON format as a response
    res.json(employees);
  } catch (err) {
    // If an error occurs, send a 500 status and the error message
    res.status(500).json({ error: 'Failed to retrieve employee vacation data.' });
  }
});

// Export the router so it can be used in the main server file
module.exports = router;

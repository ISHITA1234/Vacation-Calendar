// Import Mongoose for interacting with MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB Atlas database
// The DB name is AssignmentApp, and the connection string contains the username and password
mongoose.connect("mongodb+srv://ishitad123:Babla%401234@mydb.qeypvet.mongodb.net/AssignmentApp");

// Define the schema for vacation details
// A vacation can either be of type 'daily' or 'multi-day'
// 'startDate' and 'endDate' are required fields
const vacationSchema = new mongoose.Schema({
    type: { type: String, enum: ['daily', 'multi-day'], required: true }, // Defines the type of vacation (daily or multi-day)
    startDate: { type: Date, required: true }, // Start date of the vacation
    endDate: { type: Date, required: true }, // End date of the vacation (same for 'daily' type)
    description: String // A brief description of the vacation (optional)
});

// Define the schema for employees
// Each employee has a name and an array of vacations
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name of the employee
    vacations: [vacationSchema] // Array of vacation objects associated with the employee
});

// Export the Employee model to be used in other parts of the application
module.exports = mongoose.model('Employee', employeeSchema);

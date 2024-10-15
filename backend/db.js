//3 routes for user authentication
const mongoose = require("mongoose");
//DB name is AssignmentApp
mongoose.connect("mongodb+srv://ishitad123:Babla%401234@mydb.qeypvet.mongodb.net/AssignmentApp");

const vacationSchema = new mongoose.Schema({
    type: { type: String, enum: ['daily', 'multi-day'], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: String
  });
  
  const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vacations: [vacationSchema]
  });
  
  module.exports = mongoose.model('Employee', employeeSchema);
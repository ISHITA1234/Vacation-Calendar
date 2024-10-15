const express = require('express');
const router = express.Router();
const Employee = require('../db');

// Mock data to simulate database response
router.get('/vacations', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

module.exports = router;

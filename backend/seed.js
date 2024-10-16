const mongoose = require('mongoose');
const Employee = require('./db'); // Import the Employee model (adjust the path as needed)

// Connect to the MongoDB database
mongoose.connect(
  'mongodb+srv://ishitad123:Babla%401234@mydb.qeypvet.mongodb.net/AssignmentApp',
  { useNewUrlParser: true, useUnifiedTopology: true } // Use options for updated connection behavior
)
.then(() => console.log('Connected to MongoDB')) // Log a success message upon successful connection
.catch(err => console.log('Failed to connect to MongoDB:', err)); // Log any connection errors

// Employee data to seed into the database
const employees = [
  {
    id: '1',
    name: 'Sunita Reddy',
    vacations: [
      {
        description: 'Annual Leave',
        startDate: new Date('2024-10-10'),
        endDate: new Date('2024-10-22'),
        type: 'multi-day' // Multi-day event
      },
      {
        description: 'Emergency Leave',
        startDate: new Date('2024-10-02'),
        endDate: new Date('2024-10-02'),
        type: 'daily' // Single-day event
      }
    ]
  },
  {
    id: '2',
    name: 'Ramesh Jaiswal',
    vacations: [
      {
        description: 'Sick Leave',
        startDate: new Date('2024-10-11'),
        endDate: new Date('2024-10-11'),
        type: 'daily' // Single-day event
      }
    ]
  },
  {
    id: '3',
    name: 'Malini Sen',
    vacations: [
      {
        description: 'Vacation to Paris',
        startDate: new Date('2024-10-21'),
        endDate: new Date('2024-11-05'),
        type: 'multi-day' // Multi-day event
      }
    ]
  },
  {
    id: '4',
    name: 'Siddharth Roy',
    vacations: [
      {
        description: 'Sid`s Day Off',
        startDate: new Date('2024-10-20'),
        endDate: new Date('2024-10-20'),
        type: 'daily' // Single-day event
      }
    ]
  },
  {
    id: '5',
    name: 'Swetha Kumari',
    vacations: [
      {
        description: 'Festival Time Day Off',
        startDate: new Date('2024-10-20'),
        endDate: new Date('2024-10-20'),
        type: 'daily' // Single-day event
      }
    ]
  },
  {
    id: '6',
    name: 'Deba Chatterjee',
    vacations: [
      {
        description: 'Day Off',
        startDate: new Date('2024-10-07'),
        endDate: new Date('2024-10-07'),
        type: 'daily' // Single-day event
      },
      {
        description: 'Festival Day Off',
        startDate: new Date('2024-10-20'),
        endDate: new Date('2024-10-20'),
        type: 'daily' // Single-day event
      }
    ]
  }
];

// Function to insert the employee data into the database
const seedEmployees = async () => {
  try {
    await Employee.deleteMany({}); // Optional: Clear the Employee collection before inserting new data
    await Employee.insertMany(employees); // Insert the predefined employee data
    console.log('Employee data seeded successfully!'); // Log success message
  } catch (err) {
    console.log('Error seeding employee data:', err); // Log any errors encountered during seeding
  } finally {
    mongoose.connection.close(); // Close the MongoDB connection once seeding is complete
  }
};

// Execute the seed function to insert the data
seedEmployees();

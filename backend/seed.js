const mongoose = require('mongoose');
const Employee = require('./db'); // Adjust this to the correct path

// Connect to the MongoDB database
mongoose.connect(
  'mongodb+srv://ishitad123:Babla%401234@mydb.qeypvet.mongodb.net/AssignmentApp',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB:', err));

// Employee data to seed
const employees = [
  {
    id: '1',
    name: 'Sunita Reddy',
    vacations: [
      {
        description: 'Annual Leave',
        startDate: new Date('2024-10-10'),
        endDate: new Date('2024-10-22'),
        type: 'multi-day'
      },
      {
        description: 'Emergency Leave',
        startDate: new Date('2024-10-02'),
        endDate: new Date('2024-10-02'),
        type: 'daily'
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
        type: 'daily'
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
        type: 'multi-day'
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
        type: 'daily'
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
        type: 'daily'
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
        type: 'daily'
      },
      {
        description: 'Festival Day Off',
        startDate: new Date('2024-10-20'),
        endDate: new Date('2024-10-20'),
        type: 'daily'
      }
    ]
  }

];

// Function to insert the employee data
const seedEmployees = async () => {
  try {
    await Employee.deleteMany({}); // Optional: Clears the collection before inserting
    await Employee.insertMany(employees);
    console.log('Employee data seeded successfully!');
  } catch (err) {
    console.log('Error seeding employee data:', err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
};

// Execute the seed function
seedEmployees();

# Vacation Calendar

The **Vacation Calendar** is a web-based application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows employees' vacations to be displayed on a calendar, with two types of vacation events: daily events and multi-day events. The calendar highlights each employee's vacation with unique colors, ensuring clarity, even when vacation dates overlap.

## Features

- **View Vacations**: Displays vacation data for multiple employees.
- **Event Types**: Supports both daily and multi-day vacation events.
- **Employee Color Coding**: Each employee is assigned a unique color for their vacations.
- **Overlapping Events**: Even if vacations overlap, each employee’s events are shown in their respective colors.
- **Employee Filtering**: Allows filtering of the calendar by employees, displaying only their vacations.
- **Google Calendar-like Interface**: UI/UX is designed to mimic the clarity and functionality of Google Calendar.

## Tech Stack

### Frontend:
- **React.js**: Handles the UI.
- **react-big-calendar**: Displays a calendar with employee vacations.
- **Axios**: For making HTTP requests to the backend.
- **Moment.js**: For date manipulation and formatting.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for handling API routes.
- **MongoDB**: Stores employee vacation data.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB set up and running.
- React installed.

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vacation-calendar.git
   cd vacation-calendar

2. Navigate to the backend folder:

   ```bash
   cd backend

3. Install backend dependencies:

   ```bash
   npm install

4. Run the backend server:

   ```bash
   node index.js

The server will be running on http://localhost:27107.


### Frontend Setup

1. Navigate to the frontend folder:

   ```bash   
   cd frontend

2. Install frontend dependencies:

   ```bash
   npm install

3. Start the frontend server:

   ```bash
   npm run dev

## Folder Structure

.
├── /vacation-calendar
│   ├── /backend                # Node.js Backend
│   │   ├── /routes
│   │   │   └── vacationRoutes.js
│   │   ├── db.js
│   │   └── index.js
│   └── /frontend               # React Frontend
│       ├── /src
│       │   ├── /components
│       │   │   └── VacationCalendar.jsx
│       │   ├── /services
│       │   │   └── vacationService.jsx
│       │   ├── App.jsx
│       │   └── main.jsx


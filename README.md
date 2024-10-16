# Vacation Calendar

The **Vacation Calendar** is a web-based application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows employees' vacations to be displayed on a calendar, with two types of vacation events: daily events and multi-day events. The calendar highlights each employee's vacation with unique colors, ensuring clarity, even when vacation dates overlap.

## Live Demo Link:
   https://vacation-calendar-frontend.onrender.com/

## Features

- **View Vacations**: Displays vacation data for multiple employees.
- **Event Types**: Supports both daily and multi-day vacation events.
- **Employee Color Coding**: Each employee is assigned a unique color for their vacations.
- **Overlapping Events**: Even if vacations overlap, each employee’s events are shown in their respective colors.
- **Employee Filtering**: Allows filtering of the calendar by employees, displaying only their vacations.
- **Vacation Type Filtering**: Allows filtering of the calendar by type of vacation (daily or multi-day).
- **Vacation Type Distinguisher**: Distinguishes type of vacation with icon. This legend will show what each icon  represents (🕒 for daily vacations and ⏳ for multi-day vacations).

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

4. Run seed.js to insert data into MongoDB:
   ```bash
   node seed.js

5. Run the backend server:

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

## Web-site Screenshot
![Here is an image related to my project:](/frontend/src/assets/Vacation_Calender.png)

## Folder Structure

.<br>
├── /vacation-calendar<br>
│   ├── /backend                # Node.js Backend<br>
│   │   ├── /routes<br>
│   │   │   └── vacationRoutes.js<br>
│   │   ├── db.js<br>
│   │   ├── seed.js<br>
│   │   └── index.js<br>
│   └── /frontend               # React Frontend<br>
│       ├── /src<br>
│       │   ├── /components<br>
│       │   │   └── VacationCalendar.jsx<br>
│       │   ├── /services<br>
│       │   │   └── vacationService.jsx<br>
│       │   ├── App.jsx<br>
│       │   └── main.jsx<br>


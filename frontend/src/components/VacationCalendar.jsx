import React, { useState, useEffect } from 'react';
import { getVacations } from '../services/vacationService'; // Service to get vacation data
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'; // Import BigCalendar for displaying the calendar
import moment from 'moment'; // Moment.js for date handling
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import styles for the calendar
import './VacationCalendar.css'; // Custom styles for the calendar

const localizer = momentLocalizer(moment); // Localizer to use moment.js with BigCalendar

// Array of color codes to assign unique colors to different employees
const employeeColors = [
  '#ff7f7f', '#7fbcff', '#ffbc7f', '#7fff7f',
  '#bc7fff', '#ff7fbc', '#7fffff', '#bfff7f',
];

const VacationCalendar = () => {
  const [employees, setEmployees] = useState([]); // State to store employee data
  const [events, setEvents] = useState([]); // State to store calendar events
  const [selectedEmployee, setSelectedEmployee] = useState('All'); // State for filtering by employee
  const [selectedVacationType, setSelectedVacationType] = useState('All'); // State for filtering by vacation type

  // Fetch vacations data from API on component mount
  useEffect(() => {
    getVacations().then((data) => {
      setEmployees(data); // Set employee data from API response
      const calendarEvents = data.flatMap((employee, employeeIndex) =>
        employee.vacations.map((vacation) => ({
          title: `${employee.name} - ${vacation.description}`, // Event title combining employee name and vacation description
          start: new Date(vacation.startDate), // Start date of the vacation
          end: new Date(vacation.endDate), // End date of the vacation
          employeeName: employee.name, // Store employee name for filtering
          type: vacation.type, // Store vacation type (daily or multi-day)
          color: employeeColors[employeeIndex % employeeColors.length], // Assign color based on employee index
          icon: vacation.type === 'daily' ? '🕒' : '⏳', // Use clock icon for daily events and hourglass for multi-day
          allDay: vacation.type === 'daily' // Mark daily events as all-day events
        }))
      );
      setEvents(calendarEvents); // Set events data for the calendar
    });
  }, []);

  // Handle employee filter change
  const handleEmployeeFilter = (event) => {
    const filteredEmployee = event.target.value;
    setSelectedEmployee(filteredEmployee); // Update selected employee
    filterVacations(filteredEmployee, selectedVacationType); // Apply filters based on employee and vacation type
  };

  // Handle vacation type filter change
  const handleVacationTypeFilter = (event) => {
    const filteredVacationType = event.target.value;
    setSelectedVacationType(filteredVacationType); // Update selected vacation type
    filterVacations(selectedEmployee, filteredVacationType); // Apply filters based on employee and vacation type
  };

  // Filter vacations based on selected employee and vacation type
  const filterVacations = (employee, vacationType) => {
    getVacations().then((data) => {
      let filteredData = data;

      // Filter by employee if not 'All'
      if (employee !== 'All') {
        filteredData = data.filter((emp) => emp.name === employee);
      }

      // Map vacations into calendar events, applying vacation type filter if necessary
      const filteredEvents = filteredData.flatMap((employee, employeeIndex) =>
        employee.vacations
          .filter((vacation) => vacationType === 'All' || vacation.type === vacationType)
          .map((vacation) => ({
            title: `${employee.name} - ${vacation.description}`, // Event title
            start: new Date(vacation.startDate), // Start date
            end: new Date(vacation.endDate), // End date
            employeeName: employee.name, // Store employee name
            type: vacation.type, // Vacation type (daily or multi-day)
            color: employeeColors[employeeIndex % employeeColors.length], // Assign employee color
            icon: vacation.type === 'daily' ? '🕒' : '⏳', // Use appropriate icon for daily/multi-day
            allDay: vacation.type === 'daily' // Mark daily events as all-day
          }))
      );
      setEvents(filteredEvents); // Update calendar events after filtering
    });
  };

  // Customize event appearance on the calendar
  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color, // Background color based on employee
        color: 'white', // Text color
        borderRadius: '5px', // Rounded corners for event boxes
        border: 'none', // No border for events
        padding: '2px 4px', // Padding for event text
        textAlign: 'center', // Center align event text
      },
    };
  };

  return (
    <div className="calendar-container">
      <h2 className='font-bold text-2xl'>Vacation Calendar</h2>
      
      {/* Filters for employee and vacation type */}
      <div className="flex justify-between filter-container">
        <div>
          <label>Filter by Employee:</label>
          <select onChange={handleEmployeeFilter} value={selectedEmployee}>
            <option value="All">All Employees</option>
            {employees.map((employee) => (
              <option key={employee._id} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Filter by Vacation Type:</label>
          <select onChange={handleVacationTypeFilter} value={selectedVacationType}>
            <option value="All">All Types</option>
            <option value="daily">Daily</option>
            <option value="multi-day">Multi-day</option>
          </select>
        </div>        
      </div>

      {/* Vacation Calendar component */}
      <BigCalendar
        localizer={localizer}
        events={events} // Event data to be displayed
        startAccessor="start" // Start date for events
        endAccessor="end" // End date for events
        style={{ height: 500, margin: '20px 0' }} // Calendar height and margin styling
        eventPropGetter={eventStyleGetter} // Customize event styles
        views={['month', 'week', 'day']} // Available views (month, week, day)
        popup={true} // Enable popups for events
        components={{
          event: (event) => (
            <span>
              {event.event.icon} {event.title} {/* Display event icon and title */}
            </span>
          ),
        }}
        onSelectEvent={(event) =>
          alert(
            `${event.title}\n${moment(event.start).format('MMM Do YYYY')} - ${moment(event.end).format('MMM Do YYYY')}`
          ) // Show alert with event details on click
        }
      />

      {/* Legend for vacation types */}
      <div className="legend-container">
        <h3>Legend</h3>
        <div className="legend-item">
          <span className="legend-icon">🕒</span>
          <span>Daily Event</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">⏳</span>
          <span>Multi-day Event</span>
        </div>
      </div>
    </div>
  );
};

export default VacationCalendar;

import React, { useState, useEffect } from 'react';
import { getVacations } from '../services/vacationService';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './VacationCalendar.css';

const localizer = momentLocalizer(moment);

// Define a list of colors to assign each employee a unique color
const employeeColors = [
  '#ff7f7f', // Red
  '#7fbcff', // Blue
  '#ffbc7f', // Orange
  '#7fff7f', // Green
  '#bc7fff', // Purple
  '#ff7fbc', // Pink
  '#7fffff', // Cyan
  '#bfff7f', // Lime
];

const VacationCalendar = () => {
  const [employees, setEmployees] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('All');

  useEffect(() => {
    getVacations().then((data) => {
      setEmployees(data);
      const calendarEvents = data.flatMap((employee, employeeIndex) =>
        employee.vacations.map((vacation) => ({
          title: `${employee.name} - ${vacation.description}`,
          start: new Date(vacation.startDate),
          end: new Date(vacation.endDate),
          employeeName: employee.name,
          type: vacation.type,
          color: employeeColors[employeeIndex % employeeColors.length] // Assign a unique color based on employee index
        }))
      );
      setEvents(calendarEvents);
    });
  }, []);

  const handleEmployeeFilter = (event) => {
    const filteredEmployee = event.target.value;
    setSelectedEmployee(filteredEmployee);
    if (filteredEmployee === 'All') {
      getVacations().then((data) => {
        const allEvents = data.flatMap((employee, employeeIndex) =>
          employee.vacations.map((vacation) => ({
            title: `${employee.name} - ${vacation.description}`,
            start: new Date(vacation.startDate),
            end: new Date(vacation.endDate),
            employeeName: employee.name,
            type: vacation.type,
            color: employeeColors[employeeIndex % employeeColors.length] // Assign a unique color based on employee index
          }))
        );
        setEvents(allEvents);
      });
    } else {
      getVacations().then((data) => {
        const filteredEvents = data
          .filter((employee) => employee.name === filteredEmployee)
          .flatMap((employee, employeeIndex) =>
            employee.vacations.map((vacation) => ({
              title: `${employee.name} - ${vacation.description}`,
              start: new Date(vacation.startDate),
              end: new Date(vacation.endDate),
              employeeName: employee.name,
              type: vacation.type,
              color: employeeColors[employeeIndex % employeeColors.length] // Assign a unique color based on employee index
            }))
          );
        setEvents(filteredEvents);
      });
    }
  };

  return (
    <div className="calendar-container">
      <h2>Vacation Calendar</h2>
      
      {/* Employee Filter Dropdown */}
      <div className="filter-container">
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

      {/* Vacation Calendar */}
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '20px 0' }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color, // Use employee-specific color
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            padding: '2px 4px',
            textAlign: 'center'
          },
        })}
        views={['month', 'week', 'day']}
        popup={true}
        onSelectEvent={(event) =>
          alert(
            `${event.title}\n${moment(event.start).format('MMM Do YYYY')} - ${moment(event.end).format('MMM Do YYYY')}`
          )
        }
      />
    </div>
  );
};

export default VacationCalendar;

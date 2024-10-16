import React, { useState, useEffect } from 'react';
import { getVacations } from '../services/vacationService';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './VacationCalendar.css';

const localizer = momentLocalizer(moment);

const employeeColors = [
  '#ff7f7f', '#7fbcff', '#ffbc7f', '#7fff7f',
  '#bc7fff', '#ff7fbc', '#7fffff', '#bfff7f',
];

const VacationCalendar = () => {
  const [employees, setEmployees] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('All');
  const [selectedVacationType, setSelectedVacationType] = useState('All');

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
          color: employeeColors[employeeIndex % employeeColors.length],
          icon: vacation.type === 'daily' ? '🕒' : '⏳',
          allDay: vacation.type === 'daily' // Mark daily events as all-day events
        }))
      );
      setEvents(calendarEvents);
    });
  }, []);

  const handleEmployeeFilter = (event) => {
    const filteredEmployee = event.target.value;
    setSelectedEmployee(filteredEmployee);
    filterVacations(filteredEmployee, selectedVacationType);
  };

  const handleVacationTypeFilter = (event) => {
    const filteredVacationType = event.target.value;
    setSelectedVacationType(filteredVacationType);
    filterVacations(selectedEmployee, filteredVacationType);
  };

  const filterVacations = (employee, vacationType) => {
    getVacations().then((data) => {
      let filteredData = data;

      if (employee !== 'All') {
        filteredData = data.filter((emp) => emp.name === employee);
      }

      const filteredEvents = filteredData.flatMap((employee, employeeIndex) =>
        employee.vacations
          .filter((vacation) => vacationType === 'All' || vacation.type === vacationType)
          .map((vacation) => ({
            title: `${employee.name} - ${vacation.description}`,
            start: new Date(vacation.startDate),
            end: new Date(vacation.endDate),
            employeeName: employee.name,
            type: vacation.type,
            color: employeeColors[employeeIndex % employeeColors.length],
            icon: vacation.type === 'daily' ? '🕒' : '⏳',
            allDay: vacation.type === 'daily' // Mark daily events as all-day
          }))
      );
      setEvents(filteredEvents);
    });
  };

  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color,
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        padding: '2px 4px',
        textAlign: 'center',
      },
    };
  };

  return (
    <div className="calendar-container">
      <h2>Vacation Calendar</h2>
      
      {/* Filters */}
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

        <label>Filter by Vacation Type:</label>
        <select onChange={handleVacationTypeFilter} value={selectedVacationType}>
          <option value="All">All Types</option>
          <option value="daily">Daily</option>
          <option value="multi-day">Multi-day</option>
        </select>
      </div>

      {/* Vacation Calendar */}
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '20px 0' }}
        eventPropGetter={eventStyleGetter}
        views={['month', 'week', 'day']}
        popup={true}
        components={{
          event: (event) => (
            <span>
              {event.event.icon} {event.title}
            </span>
          ),
        }}
        onSelectEvent={(event) =>
          alert(
            `${event.title}\n${moment(event.start).format('MMM Do YYYY')} - ${moment(event.end).format('MMM Do YYYY')}`
          )
        }
      />

      {/* Legend */}
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

import React from 'react'; // Importing React library
import VacationCalendar from './components/VacationCalendar'; // Importing the VacationCalendar component

// Main App component
function App() {
  return (
    <div className="App"> {/* Main container for the application */}
      <VacationCalendar /> {/* Rendering the VacationCalendar component */}
    </div>
  );
}

export default App; // Exporting the App component as the default export

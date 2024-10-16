import axios from 'axios'; // Importing axios for making HTTP requests

// Define the base API URL for fetching vacation data
// const API_URL = 'http://localhost:27017/api/vacations';
const API_URL = "https://vacation-calendar.onrender.com:27017/api/vacations"

/**
 * Function to fetch vacation data from the API.
 * Sends a GET request to the backend API and returns the response data.
 * 
 * @returns {Promise} - Resolves to the vacation data fetched from the server.
 */
export const getVacations = () => {
  return axios.get(API_URL).then((response) => response.data); // Send GET request and return the data
};

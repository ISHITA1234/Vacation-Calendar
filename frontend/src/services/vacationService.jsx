import axios from 'axios';

const API_URL = 'http://localhost:27017/api/vacations';

export const getVacations = () => {
  return axios.get(API_URL).then((response) => response.data);
};

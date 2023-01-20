import axios from 'axios';

const api = axios.create({ baseURL: 'https://eduportal.onrender.com' });

export { api };

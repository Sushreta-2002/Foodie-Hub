import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
//process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : process.env.REACT_APP_BASE_URL;
import axios from 'axios';

// axios.defaults.baseURL = 'https://laboratorios-api.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:1337';

const auth = token => {
  axios.defaults.params = { token };
};

export default {
  auth,
  login: loginParams => axios.post('/login', loginParams),
  users: {
    create: params => axios.post('/users', params),
    get: params => axios.get('/users', { params }),
  },
  projects: {
    get: params => axios.get('/projects', { params }),
    find: id => axios.get(`/projects/${id}`, {}),
    create: params => axios.post('/projects', params),
  },
  tags: {
    get: params => axios.get('/tags', { params }),
  },
};

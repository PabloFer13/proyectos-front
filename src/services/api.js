import axios from 'axios';

axios.defaults.baseURL = 'https://proyectos-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:1337';

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
    create: params => {
      // eslint-disable-next-line
      const parsedParams = new FormData();
      Object.keys(params).reduce((acc, key) => {
        if (key === 'file') {
          acc.append('file', [params[key]]);
        } else {
          acc.append(key, params[key]);
        }
        return acc;
      }, parsedParams);
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      return axios.post('/projects', parsedParams, config);
    },
  },
  tags: {
    get: params => axios.get('/tags', { params }),
  },
  carreras: {
    get: params => axios.get('/career', { params }),
  },
  periodos: {
    get: () => axios.get('/dates'),
  },
};

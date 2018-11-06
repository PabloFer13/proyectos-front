import { createActions } from 'ractionx';

const prefix = 'ucaribe/proyectos-terminales/lists';

const types = [
  'GET_USERS',
  'SET_USERS',
  'GET_AUTORES',
  'SET_AUTORES',
  'GET_ASESORES',
  'SET_ASESORES',
  'GET_PROYECTOS',
  'SET_PROYECTOS',
  'GET_TAGS',
  'SET_TAGS',
  'GET_CARRERAS',
  'SET_CARRERAS',
];

export const {
  getUsers,
  setUsers,
  getAutores,
  setAutores,
  getAsesores,
  setAsesores,
  getProyectos,
  setProyectos,
  getTags,
  setTags,
  getCarreras,
  setCarreras,
} = createActions(prefix, types);

export default {
  getUsers,
  setUsers,
  getAutores,
  setAutores,
  getAsesores,
  setAsesores,
  getProyectos,
  setProyectos,
  getTags,
  setTags,
  getCarreras,
  setCarreras,
};

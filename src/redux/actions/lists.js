import { createActions } from 'ractionx';

const prefix = 'ucaribe/proyectos-terminales/lists';

const types = [
  'GET_USERS',
  'SET_USERS',
  'GET_AUTORES',
  'SET_AUTORES',
  'GET_ASESORES',
  'SET_ASESORES',
];

export const {
  getUsers,
  setUsers,
  getAutores,
  setAutores,
  getAsesores,
  setAsesores,
} = createActions(prefix, types);

export default {
  getUsers,
  setUsers,
  getAutores,
  setAutores,
  getAsesores,
  setAsesores,
};

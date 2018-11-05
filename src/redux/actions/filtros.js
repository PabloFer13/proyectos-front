import { createActions } from 'ractionx';

const prefix = 'ucaribe/proyectos-terminales/lists';

const types = [
  'CHANGE_USERS',
  'SET_USERS',
  'CHANGE_AUTORES',
  'SET_AUTORES',
  'CHANGE_ASESORES',
  'SET_ASESORES',
];

export const {
  changeUsers,
  setUsers,
  changeAutores,
  setAutores,
  changeAsesores,
  setAsesores,
} = createActions(prefix, types);

export default {
  changeUsers,
  setUsers,
  changeAutores,
  setAutores,
  changeAsesores,
  setAsesores,
};

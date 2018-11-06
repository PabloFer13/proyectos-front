import { createActions } from 'ractionx';

const prefix = 'ucaribe/proyectos-terminales/filtros';

const types = [
  'CHANGE_USERS',
  'SET_USERS',
  'CHANGE_AUTORES',
  'SET_AUTORES',
  'CHANGE_ASESORES',
  'SET_ASESORES',
  'CHANGE_NOMBRE',
  'SET_NOMBRE',
  'CHANGE_TAGS',
  'SET_TAGS',
  'CHANGE_CARRERAS',
  'SET_CARRERAS',
];

export const {
  changeUsers,
  setUsers,
  changeAutores,
  setAutores,
  changeAsesores,
  setAsesores,
  changeNombre,
  setNombre,
  changeTags,
  setTags,
  changeCarreras,
  setCarreras,
} = createActions(prefix, types);

export default {
  changeUsers,
  setUsers,
  changeAutores,
  setAutores,
  changeAsesores,
  setAsesores,
  changeNombre,
  setNombre,
  changeTags,
  setTags,
  changeCarreras,
  setCarreras,
};

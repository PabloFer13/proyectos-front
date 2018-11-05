import { createActions } from 'ractionx';

const prefix = 'ucaribe/proyectos-terminales/user';

const types = ['SET_USER'];

export const { setUser } = createActions(prefix, types);

export default {
  setUser,
};

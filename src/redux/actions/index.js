import app from './app';
import user from './user';
import lists from './lists';
import filtros from './filtros';

export const appActions = { ...app };
export const userActions = { ...user };
export const listsActions = { ...lists };
export const filtrosActions = { ...filtros };

export default {
  appActions,
  userActions,
  listsActions,
  filtrosActions,
};

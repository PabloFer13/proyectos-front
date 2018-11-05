import { filtrosActions as filtros } from '../actions';

const initialState = {
  users: '',
  autores: '',
  asesores: '',
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case filtros.setUsers.type:
      return { ...state, users: payload };
    case filtros.setAutores.type:
      return { ...state, autores: payload };
    case filtros.setAsesores.type:
      return { ...state, asesores: payload };
    default:
      return state;
  }
}

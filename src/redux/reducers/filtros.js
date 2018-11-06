import { filtrosActions as filtros } from '../actions';

const initialState = {
  users: '',
  autores: '',
  asesores: '',
  nombre: '',
  tags: '',
  carreras: '',
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case filtros.setUsers.type:
      return { ...state, users: payload };
    case filtros.setAutores.type:
      return { ...state, autores: payload };
    case filtros.setAsesores.type:
      return { ...state, asesores: payload };
    case filtros.setNombre.type:
      return { ...state, nombre: payload };
    case filtros.setCarreras.type:
      return { ...state, carreras: payload };
    case filtros.setTags.type:
      return { ...state, tags: payload };
    default:
      return state;
  }
}

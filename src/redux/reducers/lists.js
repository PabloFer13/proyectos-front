import { listsActions as lists } from '../actions';

const initialState = {
  users: [],
  autores: [],
  proyectos: [],
  tags: [],
  asesores: [],
  carreras: [],
  periodos: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case lists.setUsers.type:
      return { ...state, users: [...payload] };
    case lists.setAutores.type:
      return { ...state, autores: [...payload] };
    case lists.setProyectos.type:
      return { ...state, proyectos: [...payload] };
    case lists.setTags.type:
      return { ...state, tags: [...payload] };
    case lists.setAsesores.type:
      return { ...state, asesores: [...payload] };
    case lists.setCarreras.type:
      return { ...state, carreras: [...payload] };
    case lists.setDates.type:
      return { ...state, periodos: [...payload] };
    default:
      return state;
  }
}

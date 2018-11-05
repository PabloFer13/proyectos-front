import { userActions as user } from '../actions';

const initialState = {
  nombre: '',
  apellido: '',
  email: '',
  celular: '',
  tipo: {},
};

export default function(state =initialState, { type, payload }){
  switch(type){
    case user.setUser.type:
      return { ...state, ...payload };
    default:
      return state;
  }
}
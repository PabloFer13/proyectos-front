import { appActions as app } from '../actions';

const initialState = {
  status: false,
  newUser: false,
  token: ''
}

export default function(state = initialState, { type, payload }){
  switch(type){
    case app.toggleLogInForm.type:
      return { ...state, newUser: payload };
    case app.setStatus.type:
      return { ...state, status: payload };
    case app.setToken.type:
      return { ...state, token: payload };
    default:
      return state;
  }
}

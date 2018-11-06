import { takeLatest, put, call, select } from 'redux-saga/effects';
import { listsActions } from '../actions';
import api from '../../services/api';

export function* getAsesoresSaga({ payload }) {
  const params = {
    nombre: payload,
    apellidoPaterno: payload,
    apellidoMaterno: payload,
    email: payload,
  };
  const { data: users } = yield call(api.users.get, params);

  yield put(listsActions.setAsesores(users));
}

export function* getTagsSaga({ payload }) {
  const params = {
    etiqueta: payload,
  };
  const { data: tags } = yield call(api.tags.get, params);
  yield put(listsActions.setTags(tags));
}

export function* getCarrerasSaga({ payload }) {
  const params = {
    nombre: payload,
    apellidoPaterno: payload,
    apellidoMaterno: payload,
    email: payload,
  };
  const { data: users } = yield call(api.users.get, params);
  yield put(listsActions.setCarreras(users));
}

export function* getAutoresSaga({ payload }) {
  const params = {
    nombre: payload,
    apellidoPaterno: payload,
    apellidoMaterno: payload,
    email: payload,
  };
  const { data: users } = yield call(api.users.get, params);
  yield put(listsActions.setAutores(users));
}

export function* getUsersSaga({ payload }) {
  const params = {
    tipo: [1],
    nombre: payload,
    apellidoPaterno: payload,
    apellidoMaterno: payload,
    email: payload,
  };
  const { data: users } = yield call(api.users.get, params);
  yield put(listsActions.setUsers(users));
}

export function* getProyectosSaga() {
  const nombre = yield select(({ filtros }) => filtros.nombre);
  const params = {};
  if (nombre !== '') {
    params.nombre = nombre;
  }
  const { data } = yield call(api.projects.get, params);
  yield put(listsActions.setProyectos(data));
}

export default function* filtrosSaga() {
  yield takeLatest(listsActions.getAsesores, getAsesoresSaga);
  yield takeLatest(listsActions.getAutores, getAutoresSaga);
  yield takeLatest(listsActions.getUsers, getUsersSaga);
  yield takeLatest(listsActions.getProyectos, getProyectosSaga);
  yield takeLatest(listsActions.getTags, getTagsSaga);
}

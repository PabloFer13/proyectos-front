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
  if (payload.length === 0) {
    yield put(listsActions.setTags([]));
  } else {
    const params = {
      etiqueta: payload,
    };
    const {
      data: { tag },
    } = yield call(api.tags.get, params);
    console.log('**********');
    console.log(tag);
    console.log('**********');
    yield put(listsActions.setTags(tag));
  }
}

export function* getCarrerasSaga({ payload }) {
  const params = {
    search: payload,
  };
  const { data: carreras } = yield call(api.carreras.get, params);
  yield put(listsActions.setCarreras(carreras));
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

export function* getProyectosSaga({ payload = {} }) {
  const { carrera = 0, periodo = 0 } = payload;
  const search = yield select(({ filtros }) => filtros.nombre);
  const params = {};
  if (search !== '') {
    params.search = search;
  }
  if (carrera > 0) {
    params.carrera = carrera;
  }
  if (periodo > 0) {
    params.periodo = periodo;
  }
  const {
    data: { projects },
  } = yield call(api.projects.get, params);
  yield put(listsActions.setProyectos(projects));
}

export function* getDatesSaga() {
  const {
    data: { periodos },
  } = yield call(api.periodos.get);
  yield put(listsActions.setDates(periodos));
}

export default function* filtrosSaga() {
  yield takeLatest(listsActions.getAsesores, getAsesoresSaga);
  yield takeLatest(listsActions.getAutores, getAutoresSaga);
  yield takeLatest(listsActions.getUsers, getUsersSaga);
  yield takeLatest(listsActions.getProyectos, getProyectosSaga);
  yield takeLatest(listsActions.getTags, getTagsSaga);
  yield takeLatest(listsActions.getCarreras, getCarrerasSaga);
  yield takeLatest(listsActions.getDates, getDatesSaga);
}

import { takeLatest, put } from 'redux-saga/effects';
import { filtrosActions, listsActions } from '../actions';

export function* changeAsesoresSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.setAsesores(value));
  yield put(listsActions.getAsesores(value));
}

export function* changeTagsSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.setTags(value));
  yield put(listsActions.getTags(value));
}

export function* changeCarrerasSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.setCarreras(value));
  yield put(listsActions.getCarreras(value));
}

export function* changeAutoresSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.setAutores(value));
  yield put(listsActions.getAutores(value));
}

export function* changeUsersSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.setUsers(value));
  yield put(listsActions.getUsers(value));
}

export function* changeNombreSaga({ payload: e }) {
  const {
    target: { value },
  } = e;

  yield put(filtrosActions.setNombre(value));
}

export default function* filtrosSaga() {
  yield takeLatest(filtrosActions.changeAsesores, changeAsesoresSaga);
  yield takeLatest(filtrosActions.changeAutores, changeAutoresSaga);
  yield takeLatest(filtrosActions.changeUsers, changeUsersSaga);
  yield takeLatest(filtrosActions.changeNombre, changeNombreSaga);
  yield takeLatest(filtrosActions.changeTags, changeTagsSaga);
}

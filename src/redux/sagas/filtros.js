import { takeLatest, put } from 'redux-saga/effects';
import { filtrosActions, listsActions } from '../actions';

export function* changeAsesoresSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.changeAsesores(value));
  yield put(listsActions.getAsesores(value));
}

export function* changeAutoresSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.changeAutores(value));
  yield put(listsActions.getAutores(value));
}

export function* changeUsersSaga({ payload: e }) {
  const {
    target: { value },
  } = e;
  yield put(filtrosActions.changeUsers(value));
  yield put(listsActions.getUsers(value));
}

export default function* filtrosSaga() {
  yield takeLatest(filtrosActions.changeAsesores, changeAsesoresSaga);
  yield takeLatest(filtrosActions.changeAutores, changeAutoresSaga);
  yield takeLatest(filtrosActions.changeUsers, changeUsersSaga);
}

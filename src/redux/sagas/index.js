import { all } from 'redux-saga/effects';
import app from './app';
import lists from './lists';
import filtros from './filtros';

export default function* rootSaga() {
  yield all([app(), lists(), filtros()]);
}

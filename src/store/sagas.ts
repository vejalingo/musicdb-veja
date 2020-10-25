import { all } from "redux-saga/effects";
import chartSaga from "./sagas/";

export default function* rootSaga() {
  yield all([chartSaga()]);
}

import { all } from "redux-saga/effects";
import chartSaga from "./store/sagas/index";

export default function* rootSaga() {
  yield all([chartSaga()]);
}

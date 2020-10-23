import { call, put, takeEvery } from "redux-saga/effects";
import { _fetchCharts } from "./api";
import types from "../types";

function* fetchCharts() {
  try {
    yield put({ type: "shared/list/FETCHING" });

    const charts = yield call(_fetchCharts);
    const resolvedData = yield charts.json();

    yield put({ type: "shared/list/FETCHED_ITEMS", payload: resolvedData });
  } catch (e) {
    yield put({ type: "shared/list/FETCH_ERROR", message: e });
  }
}

function* chartSaga() {
  yield takeEvery(types.FETCH_CHARTS, fetchCharts);
}

export default chartSaga;

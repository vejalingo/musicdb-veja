import { call, put, takeEvery } from "redux-saga/effects";
import { _fetchCharts, _performSearch } from "./api";
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

function* performSearch({ payload }: any) {
  console.log("SAGA action", payload);

  try {
    yield put({ type: "search/list/FETCHING" });

    const searchResult = yield call(_performSearch, payload);
    const resolvedData = yield searchResult.json();

    yield put({ type: "search/list/FETCHED_ITEMS", payload: resolvedData });
  } catch (e) {
    yield put({ type: "search/list/FETCH_ERROR", message: e });
  }
}

function* chartSaga() {
  yield takeEvery(types.FETCH_CHARTS, fetchCharts);
  yield takeEvery(types.SEARCH_ARTIST, performSearch);
}

export default chartSaga;

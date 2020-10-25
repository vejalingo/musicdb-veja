import { call, put, takeEvery } from "redux-saga/effects";
import {
  _fetchCharts,
  _performSearch,
  _fetchArtist,
  _fetchTop5Tracks,
  _fetchArtistAlbums,
} from "./api";
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
  try {
    yield put({ type: "search/list/FETCHING" });

    const searchResult = yield call(_performSearch, payload);
    const resolvedData = yield searchResult.json();

    yield put({ type: "search/list/FETCHED_ITEMS", payload: resolvedData });
  } catch (e) {
    yield put({ type: "search/list/FETCH_ERROR", message: e });
  }
}

function* fetchArtist({ payload }: any) {
  try {
    yield put({ type: "artist/list/FETCHING" });

    const artistResult = yield call(_fetchArtist, payload);
    const resolvedData = yield artistResult.json();

    yield put({ type: "artist/item/FETCHED_ITEM", payload: resolvedData });
  } catch (e) {
    yield put({ type: "artist/list/FETCH_ERROR", message: e });
  }
}

function* fetchTop5Tracks({ payload }: any) {
  try {
    yield put({ type: "artist/list/FETCHING" });

    const artistResult = yield call(_fetchTop5Tracks, payload);
    const resolvedData = yield artistResult.json();

    yield put({ type: "artist/list/FETCHED_ITEMS", payload: resolvedData });
  } catch (e) {
    yield put({ type: "artist/list/FETCH_ERROR", message: e });
  }
}

function* fetchArtistAlbums({ payload }: any) {
  try {
    yield put({ type: "shared/list/FETCHING" });

    const artistAlbumResult = yield call(_fetchArtistAlbums, payload);
    const resolvedData = yield artistAlbumResult.json();

    yield put({ type: "shared/list/FETCHED_ITEMS", payload: resolvedData });
  } catch (e) {
    yield put({ type: "shared/list/FETCH_ERROR", message: e });
  }
}

function* chartSaga() {
  yield takeEvery(types.FETCH_CHARTS, fetchCharts);
  yield takeEvery(types.SEARCH_ARTIST, performSearch);
  yield takeEvery(types.FETCH_ARTIST, fetchArtist);
  yield takeEvery(types.FETCH_TOP_FIVE_TRACKS, fetchTop5Tracks);
  yield takeEvery(types.FETCH_ARTIST_ALBUMS, fetchArtistAlbums);
}

export default chartSaga;

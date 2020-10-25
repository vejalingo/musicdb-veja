import { combineReducers } from "redux";
import * as create from "shared/state/reducerFactory";

export default combineReducers({
  list: create.list({ path: "shared" }),
  item: create.item({ path: "shared" }),
  search: create.list({ path: "search" }),
  artist: create.item({ path: "artist" }),
  topFiveTracks: create.list({ path: "artist" }),
});

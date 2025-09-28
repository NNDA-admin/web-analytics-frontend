import { combineReducers } from "@reduxjs/toolkit";
import minesSlice from "./slices/minesSlice";

export default combineReducers({
  mines: minesSlice,
});

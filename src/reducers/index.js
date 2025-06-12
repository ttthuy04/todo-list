import { combineReducers } from "redux";
import todoReducer from "./todo";

const allReducers = combineReducers({
  //them nhiewu reducer o day
  todoReducer,
});
export default allReducers;

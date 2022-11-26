import { combineReducers } from "redux";
import courseReducer from "./course";
import dashboardCountReducer from "./dashboardCount";

const rootReducer = combineReducers({ dashboardCountReducer, courseReducer });

export default rootReducer;                                                         
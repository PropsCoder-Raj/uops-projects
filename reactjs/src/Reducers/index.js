import { combineReducers } from "redux";
import courseReducer from "./course";
import teachersReducer from "./teachers";
import dashboardCountReducer from "./dashboardCount";

const rootReducer = combineReducers({ dashboardCountReducer, courseReducer, teachersReducer });

export default rootReducer;                                                         
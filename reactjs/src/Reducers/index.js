import { combineReducers } from "redux";
import courseReducer from "./course";
import teachersReducer from "./teachers";
import studentsReducer from "./students";
import dashboardCountReducer from "./dashboardCount";

const rootReducer = combineReducers({ dashboardCountReducer, courseReducer, teachersReducer, studentsReducer });

export default rootReducer;                                                         
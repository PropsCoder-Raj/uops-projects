import courseReducer from "./course";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ 
    courseReducer: courseReducer,
});

export default rootReducer;                                                         
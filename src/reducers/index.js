import autoVerzekeringReducer from "./autoVerzekeringReducer";
import {combineReducers} from "redux";
import claimsReducer from "./claimsReducer";

const rootReducer = combineReducers({autoVerzekering: autoVerzekeringReducer, claims: claimsReducer});

export default rootReducer;
import { combineReducers } from "redux";
import appReducer from "store/reducers/app";

const reducers = combineReducers({ app: appReducer });

export default reducers;

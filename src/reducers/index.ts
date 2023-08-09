import { combineReducers } from "redux";

import microcmsReducer from "./microcmsReducer";

const rootReducer = combineReducers({
    microcmsObj: microcmsReducer
});

export default rootReducer;
import { combineReducers } from "redux";

import commonReduser from "./slices/common";
import commonApi from "./rtkq";

const rootReducer = combineReducers({
  common: commonReduser,
  [commonApi.reducerPath]: commonApi.reducer,
});

export default rootReducer;

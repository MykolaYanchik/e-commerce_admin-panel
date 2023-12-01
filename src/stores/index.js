import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import commonApi from "./rtkq";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      commonApi.middleware,
    ]),
});

export default store;

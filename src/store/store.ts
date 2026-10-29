import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./slices/ui-slice";

// Combined once at module scope: combineReducers probes reducers with a random
// action type, which Cache Components rejects if it runs during prerender.
const rootReducer = combineReducers({
  ui: uiReducer,
});

export function makeStore() {
  return configureStore({ reducer: rootReducer });
}

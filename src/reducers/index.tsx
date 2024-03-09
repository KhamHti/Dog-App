import { createStore } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, compose } from "redux";
import app from "./app";

declare global {
  interface Window {
    _REDUX_DEVTOOLS_EXTENSION_COMPOSE_?: typeof compose;
  }
}

const reducers = combineReducers({
  app,
});

const composeEnhancers =
  (typeof window != "undefined" &&
    window?._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
  compose;

const store = createStore(reducers, composeEnhancers());

export default store;

export type RootState = ReturnType<typeof store.getState>;

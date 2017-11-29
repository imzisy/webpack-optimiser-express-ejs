import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import App from "./containers/App";
import {createStore,applyMiddleware, combineReducers} from "redux";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import { init } from "./actions/userActions";
import * as req from "./lib/translation";


const props = window.__PRELOADED_STATE__
//delete window.__PRELOADED_STATE__;

console.log(req);

let store = createStore(
    math,
    props,
  )
  store.dispatch(init())




render(
    <Provider store={store}>
        <App tr={req}/>
    </Provider>,
    window.document.getElementById('app')
);
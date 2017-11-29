import {renderToString} from "react-dom/server";
import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import math from "./reducers/mathReducer";
import App from "./containers/App";
import { init } from "./actions/userActions";


function createStoreFunction(props){
  let store = createStore(
    math,
    props
  )
  store.dispatch(init())
  return store;
}



export const Main = (props,req) => {
    let store = createStoreFunction (props);
    return (
      <Provider store={store}>
      <App tr={req}/>
    </Provider>
    );

}

export default Main



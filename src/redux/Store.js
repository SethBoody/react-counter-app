import {applyMiddleware, createStore} from "redux";
import counterReducer from "./reducer/counterReducer";
import reduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
  
//this for redux on chroom or edig
const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store = createStore(counterReducer , enhance(applyMiddleware(reduxThunk)));

const store = configureStore({
    reducer : {
        counter : counterSlice
    }
});

export default store
/*
* 引入createStore，创建store
* */
import { createStore, combineReducers } from "redux";
import * as reducer from '../reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers(reducer);

export default () => createStore(reducers, composeWithDevTools())

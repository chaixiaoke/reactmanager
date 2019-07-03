import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';

// import Life from './pages/demo/Life';
// import Admin from './admin'
// import Router from './pages/route_demo/route3/router'

import Router from './router';

import {Provider} from 'react-redux';
import configStore from './redux/store/index'

import * as serviceWorker from './serviceWorker';

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './store/Context';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux'
import { allReducers } from './Reducers';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Context>
            <App />
        </Context>
    </Provider>
);

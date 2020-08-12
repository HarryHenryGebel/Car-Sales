import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from "./reducer.js";

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root'),
      store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, rootElement);

//  LocalWords:  bulma

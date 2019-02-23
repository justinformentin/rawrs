import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
{{#if redux}}
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './redux/rootReducer';
{{/if}}
import 'babel-polyfill';

import App from './containers/App';

import './global-styles';

ReactDOM.render(
{{#if redux}}
<Provider store={createStore(rootReducer)}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
{{else}}
<BrowserRouter>
  <App />
</BrowserRouter>,
{{/if}}
document.getElementById('root'));
registerServiceWorker();
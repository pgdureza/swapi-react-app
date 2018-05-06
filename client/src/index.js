import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import SWContainer from './containers/SWContainer'
import store from './store'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <SWContainer />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();

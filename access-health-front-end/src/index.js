import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/navbar.scss';
import './scss/home.scss';
import './scss/browse.scss';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

// const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk),
  		  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  		)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();

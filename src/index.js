import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/navbar-footer.scss';
import './scss/home.scss';
import './scss/profile.scss';
import './scss/browse.scss';
import './scss/create-campaign.scss';
import './scss/loader.scss';
import './scss/fireworks.scss';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

// LINES 21 - 26 + 29 + 36 
// Making sure state is persisted
// in Redux store on refresh

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  compose(
  	applyMiddleware(thunk)
  )
)

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
  	<PersistGate loading={null} persistor={persistor}>
      <App />
  	</PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

export default store
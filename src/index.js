<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import { worker } from '../src/api/server'

import { fetchUsers } from '../src/features/posts/users/usersSlice'


async function start() {

  // await worker.start({
  //   serviceWorker: {
  //     // Points to the custom location of the Service Worker file.
  //     url: '/assets/mockServiceWorker.js',
  //     onUnhandledRequest: 'bypass',
  //   }
  // })

  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('../src/api/server')
    worker.start()
  }

  store.dispatch(fetchUsers())

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()
>>>>>>> a414fe02007bcdfad8fbe46a0d733e8f48ea53a6

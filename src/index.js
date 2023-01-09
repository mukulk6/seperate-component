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

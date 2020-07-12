import * as React from 'react'
import type {Store} from 'redux'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import type {RootState} from './store/RootStore'
import {RootStore} from './store/RootStore'
import Home from './Home'

const store: Store<RootState> = createStore(RootStore.reducers)

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

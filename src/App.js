import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import myPhotos from './reducers'
import PhotoHome from './containers/home'
import ImageViewer from './containers/imageviewer'
import './App.css';

import {PersistGate} from 'redux-persist/lib/integration/react'
import {persistStore} from 'redux-persist'

const history = createHistory()
const middleware = routerMiddleware(history)

let store = createStore(myPhotos, applyMiddleware(middleware))
let persistor = persistStore(store)

class App extends Component {
  render() {
    return (<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={PhotoHome}/>
            <Route path="/image/:id" component={ImageViewer}/>
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>);
  }
}

export default App;

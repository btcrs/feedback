import photos from '../reducers/photos'
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const photosApp = combineReducers({
  photos,
  routerReducer
})

const myPhotos = persistReducer(persistConfig, photosApp)

export default myPhotos

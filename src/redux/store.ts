import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './actions/todoReducer';
import logger from 'redux-logger'
const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
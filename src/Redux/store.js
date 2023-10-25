
import allReducers from '.'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'


export const store = createStore(allReducers,applyMiddleware(thunk))
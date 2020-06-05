import {createStore , applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'


//createStore method recv a reducer fn as a parameter so that it can change the state 
//according to the action type 
const store = createStore(rootReducer , applyMiddleware(logger))

export default store
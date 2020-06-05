import {createStore , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


//createStore method recv a reducer fn as a parameter so that it can change the state 
//according to the action type 
const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store 
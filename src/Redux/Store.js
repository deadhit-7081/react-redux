import {createStore} from 'redux'
import rootReducer from './rootReducer'


//createStore method recv a reducer fn as a parameter so that it can change the state 
//according to the action type 
const store = createStore(rootReducer)

export default store
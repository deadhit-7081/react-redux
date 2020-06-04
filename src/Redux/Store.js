import {createStore} from 'redux'
import cakeReducer from './Cakes/CakeReducer'


//createStore method recv a reducer fn as a parameter so that it can change the state 
//according to the action type 
const store = createStore(cakeReducer)

export default store
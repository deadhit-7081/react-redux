import { combineReducers } from 'redux'
import cakeReducer from './Cakes/CakeReducer'
import iceCreamReducer from './IceCream/IceCreamReducer'
import userReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer
})

export default rootReducer
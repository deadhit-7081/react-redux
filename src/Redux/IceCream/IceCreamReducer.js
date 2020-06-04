import {BUY_ICECREAM} from './IceCreamTypes'

const initialState = {
    numofIceCream : 20
}

const iceCreamReducer = (state = initialState,action) =>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                ...state,
                numofIceCream : state.numofIceCream - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer
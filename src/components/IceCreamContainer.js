import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../Redux/index'

function IceCreamContainer(props)
{
    return(
        <div>
            <h2>Number of IceCream - {props.numofIceCream}</h2>
            <button onClick = {props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) =>
{
    return{
        numofIceCream : state.iceCream.numofIceCream
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        buyIceCream : () =>{
            dispatch(buyIceCream())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
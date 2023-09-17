import { DECREAMENT, INCREAMENT } from "./types"

export const increamentAction = async(dispatch) =>{
    return dispatch({type : INCREAMENT}) 
        
    
}

export const decreamentAction = async (dispatch) =>{
    return dispatch({type : DECREAMENT})
}
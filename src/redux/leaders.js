import * as actionTypes from './actionTypes'

export const Leaders = (state = {isLoading : true, errmsg : null, leaders : []}, action) =>{
    switch (action.type) {
        case actionTypes.LEADERS_LOADING:
            return {...state, isLoading : true, errmsg : null, leaders : []}

        case actionTypes.LEADERS_FAILED:
            return {...state, isLoading : false, errmsg : action.payload, leaders : []}

        case actionTypes.ADD_LEADERS:
            return {...state, isLoading : false, errmsg : null, leaders : action.payload}

        default:
            return state;
    }
}
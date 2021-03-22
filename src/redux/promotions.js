import * as actionTypes from './actionTypes';


export const Promotions = (state = {isLoading: true, promotions : [], errmsg: null}, action) =>{
    switch (action.type) {
        case actionTypes.PROMOS_LOADING:
            return{
                ...state, isLoading : true, errmsg : null, promotions : []
            }


        case actionTypes.PROMOS_FAILED:
            return{
                ...state, isLoading : false, errmsg : action.payload, promotions : []
            }


        case actionTypes.ADD_PROMOS:
            return {
                ...state, isLoading : false, errmsg : null, promotions : action.payload
            }
            

        default:
            return state;
    }
}
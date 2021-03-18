import * as actionTypes from './actionTypes';


export const Dishes = (state = {isLoading: true, dishes : [], errmsg: null}, action) =>{
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return{
                ...state, isLoading : true, errmsg : null, dishes : []
            }


        case actionTypes.DISHES_FAILED:
            return{
                ...state, isLoading : false, errmsg : action.payload, dishes : []
            }


        case actionTypes.ADD_DISHES:
            return {
                ...state, isLoading : false, errmsg : null, dishes : action.payload
            }
            

        default:
            return state;
    }
}
import * as actionTypes from './actionTypes';
import { DISHES } from "../shared/dishes";


export const addComment = (dishId, rating, author, comment) => ({
    type : actionTypes.Add_Comment,
    payload : {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading = () => ({
    type : actionTypes.DISHES_LOADING
})

export const dishesFailed = (errmsg) => ({
    type : actionTypes.DISHES_FAILED,
    payload : errmsg
})

export const addDishes = (dishes) => ({
    type : actionTypes.ADD_DISHES,
    payload : dishes
})
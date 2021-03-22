import * as actionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
}

export const addComments = (comments) => ({
    type : actionTypes.ADD_COMMENTS,
    payload : comments
})

export const commentsFailed = (errmsg) => ({
    type : actionTypes.COMMENTS_FAILED,
    payload : errmsg
})

export const fetchPromo = () => (dispatch) =>{
    dispatch(promoLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => response.json()).then(promotions => dispatch(addPromo(promotions)));
}

export const addPromo = (promotions) => ({
    type : actionTypes.ADD_PROMOS,
    payload : promotions
})

export const promoFailed = (errmsg) => ({
    type : actionTypes.PROMOS_FAILED,
    payload : errmsg
})

export const promoLoading = () => ({
    type : actionTypes.PROMOS_LOADING
})          
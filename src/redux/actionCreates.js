import * as actionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type : actionTypes.Add_Comment,
    payload : comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok) return response;
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmsg = new Error(error.message);
        throw errmsg;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response => {
        if(response.ok) return response;
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmsg = new Error(error.message);
        throw errmsg;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    dispatch(promoLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok) return response;
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmsg = new Error(error.message);
        throw errmsg;
    })
    .then(response => response.json())
    .then(promotions => dispatch(addPromo(promotions)))
    .catch(error => dispatch(promoFailed(error.message)));
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

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmsg = new Error(error.message);
        throw errmsg;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeader(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const addLeader = (leaders) => ({
    type : actionTypes.ADD_LEADERS,
    payload : leaders
})

export const leadersFailed = (errmsg) => ({
    type : actionTypes.LEADERS_FAILED,
    payload : errmsg
})

export const leadersLoading = () =>({
    type : actionTypes.LEADERS_LOADING
})

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname : firstname,
        lastname : lastname,
        telnum : telnum,
        email : email,
        agree : agree,
        contactType : contactType,
        message : message
    };
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => alert("Thanks for submitting feedback!" + JSON.stringify(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
}
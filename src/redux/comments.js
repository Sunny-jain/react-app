import * as ActionTypes from './actionTypes';

export const Comments = (state = {comments : [], errmsg : null}, action) =>{
    switch (action.type) {
        case ActionTypes.COMMENTS_FAILED:
            return{
                ...state, errmsg : action.payload, comments : []
            }


        case ActionTypes.ADD_COMMENTS:
            return {
                ...state, errmsg : null, comments : action.payload
            }

        case ActionTypes.Add_Comment:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);


        default:
            return state;
    }
}
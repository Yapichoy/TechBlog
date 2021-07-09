import {getPostsApi} from '../../api/posts';

const GET_POSTS = "GET_POSTS";

let initialState = {
    posts: []
};

let postsReducer = (state = initialState, action) => {
    switch(action?.type) {
        case GET_POSTS:
            return { ...state, 
                posts:  [...action.posts] };
    }
    return state;
};
export let getPostsActionCreator = (posts) => {
    return {
        type: GET_POSTS,
        posts
    };
};

export const getPostsThunkCreator = () => async dispatch => {
    let posts = await getPostsApi();
    dispatch(getPostsActionCreator(posts));
}
export default postsReducer;
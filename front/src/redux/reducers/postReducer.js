import {getPostApi} from '../../api/posts';

const GET_POST = "GET_POST";

let initialState = {
    post: {
        id: 0,
        title: '',
        preview: '',
        description: '',
        text: '',
        updatedAt: ''
    }
};

let postReducer = (state = initialState, action) => {
    switch(action?.type) {
        case GET_POST:
            return { ...state, 
                post: {...action.post}
            };
    }
    return state;
};
export let getPostActionCreator = (post) => {
    return {
        type: GET_POST,
        post
    };
};

export const getPostThunkCreator = (postId) => async dispatch => {
    let post = await getPostApi(postId);
    dispatch(getPostActionCreator(post));
}
export default postReducer;
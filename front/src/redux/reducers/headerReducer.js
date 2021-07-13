import {getPostApi} from '../../api/header';

const SEARCH_TYPING = "SEARCH_TYPING";
const SEARCH = "SEARCH";
const SEARCH_END = "SEARCH_END";

let initialState = {
    searchStr: '',
    search: false,
    btnClicked: 0
};

let headerReducer = (state = initialState, action) => {
    switch(action?.type) {
        case SEARCH_TYPING:
            return { ...state, 
                searchStr: action.searchStr
            };
        case SEARCH: 
            return {
                ...state, 
                search: true,
                btnClicked: ++state.btnClicked
            }
        case SEARCH_END: 
            return {
                ...state, 
                search: false,
                searchStr: ''
            }
    }
    return state;
};
export let searchTypingActionCreator = (searchStr) => {
    return {
        type: SEARCH_TYPING,
        searchStr
    };
};

export const searchActionCreator = () => {
    return {
        type: SEARCH
    };
}
export const searchEndActionCreator = () => {
    return {
        type: SEARCH_END
    };
}

export default headerReducer;
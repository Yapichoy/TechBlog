import {getQuotesApi} from '../../api/quotes';

const GET_QUOTES = "GET_QUOTES";

let initialState = {
    quotes: []
};

let quotesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_QUOTES:
            return { ...state, 
                quotes: [...state.quotes, ...action.quotes] };
    }
    return state;
};
export let getQuotesActionCreator = (quotes) => {
    return {
        type: GET_QUOTES,
        quotes
    };
};

export const getQuotesThunkCreator = () => async dispatch => {
    let quotes = await getQuotesApi();
    console.log('Quotes: ', quotes);
    dispatch(getQuotesActionCreator(quotes));
}
export default quotesReducer;
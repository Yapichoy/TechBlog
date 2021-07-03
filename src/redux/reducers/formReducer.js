import {connectApi} from '../../api/form';

const SET_FORM_DATA = 'SET_FORM_DATA';

let initialState = {
   zipcode: '',
   age: 30,
   insured: false,
   homeowner: false,
   multiCars: false
};

let formReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FORM_DATA: 
        return {
            ...state, ...action.formData
          };

    }
    return state;
};

export const setFormDataActionCreator = (formData) => ({type: SET_FORM_DATA, formData});

export const connectThunkCreator = () => async dispatch => {
    let data = await connectApi();
    console.log('Connect: ', data)
}

export default formReducer;
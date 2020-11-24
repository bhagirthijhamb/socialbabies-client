import { SET_BABBLES, LOADING_DATA, LIKE_BABBLE, UNLIKE_BABBLE, DELETE_BABBLE, SET_ERRORS, POST_BABBLE, CLEAR_ERRORS, LOADING_UI, SET_BABBLE, STOP_LOADING_UI, SUBMIT_COMMENT } from './../types';

const initialState = {
    babbles: [],
    babble: {},
    loading: false
}

export default function(state = initialState, action){
    let index;
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state, loading: true
            }
        case SET_BABBLES:
            return {
                ...state, babbles: action.payload, loading: false
            }
        // case SET_BABBLE:
        //     return {

        //     }
        case LIKE_BABBLE:
        case UNLIKE_BABBLE:
            index = state.babbles.findIndex(babble => babble.babbleId === action.payload.babbleId);
            state.babbles[index] = action.payload;
            return {
                ...state
            }
        case DELETE_BABBLE:
            index = state.babbles.findIndex(babble => babble.babbleId === action.payload);
            state.babbles.splice(index, 1);
            return { ...state }
        default:
            return state
    }
}
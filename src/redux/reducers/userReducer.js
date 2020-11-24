import {  SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER, LIKE_BABBLE, UNLIKE_BABBLE } from './../types';

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    likes: [],
    notifications: []
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
            }
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        case LIKE_BABBLE:
            return { 
                ...state, 
                likes: [
                    ...state.likes, 
                    { 
                        userHandle: state.credentials.handle,
                        babbleId: action.payload.babbleId
                    }
                ]
            }
        case UNLIKE_BABBLE:
            return {
                ...state,
                likes: state.likes.filter(
                    like => like.babbleId !== action.payload.babbleId
                    )
            }
        default:
            return state;
    }
}
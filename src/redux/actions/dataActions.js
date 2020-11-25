import { SET_BABBLES, LOADING_DATA, LIKE_BABBLE, UNLIKE_BABBLE, DELETE_BABBLE, SET_ERRORS, POST_BABBLE, CLEAR_ERRORS, LOADING_UI, SET_BABBLE, STOP_LOADING_UI, SUBMIT_COMMENT } from './../types';
import axios from 'axios';

// Get all Babbles
export const getBabbles = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('./babbles')
        .then(res => {
            dispatch({
                type: SET_BABBLES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_BABBLES,
                payload: []
            })
        })
}
// Post a babble
export const postBabble = newBabble => dispatch => {
    dispatch({ type: LOADING_UI });
    axios.post('/babbles/babble', newBabble)
        .then(res => {
            console.log(newBabble);
            console.log(res.data)
            dispatch({ type: POST_BABBLE, payload: res.data});
            dispatch({ type: CLEAR_ERRORS })
        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        })
}

// Like a babble
export const likeBabble = babbleId => dispatch => {
    axios.get(`/babbles/${babbleId}/like`)
        .then(res => {
            dispatch({
                type: LIKE_BABBLE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
// Unlike a babble
export const unlikeBabble = babbleId => dispatch => {
    axios.get(`/babbles/${babbleId}/unlike`)
        .then(res => {
            dispatch({
                type: UNLIKE_BABBLE,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const deleteBabble = babbleId => dispatch => {
    axios.delete(`/babbles/${babbleId}`)
        .then(() => {
            dispatch({ type: DELETE_BABBLE, payload: babbleId })
        })
        .catch(err => console.log(err))
}
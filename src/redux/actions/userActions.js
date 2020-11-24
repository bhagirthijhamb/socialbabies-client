import {  SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, LOADING_USER } from './../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/users/login', userData)
        .then(res => {
            // Adding FBToken header to all the routes(even to unprotected routes)
            setAuthorizationHeader(res.data.token);
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS })
            history.push('/');
        })
        .catch(err => {
            // console.log(err.response.data)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export  const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    axios.get('/users/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));

}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common('Authorization');
    dispatch({ type: SET_UNAUTHENTICATED });
}

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/users/signup', newUserData)
        .then(res => {
            // Adding FBToken header to all the routes(even to unprotected routes)
            setAuthorizationHeader(res.data.token);
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS })
            history.push('/');
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

const setAuthorizationHeader = token => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}

export const uploadImage = (formData) => (dispatch)=> {
    dispatch({ type: LOADING_USER });
    axios.post('/users/user/image', formData)
        .then(res => {
            dispatch(getUserData());
        })
        .catch(err => console.log(err));
}

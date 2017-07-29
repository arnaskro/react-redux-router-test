import * as api from '../api';

export const types = {
    FETCH_USERS_START: "FETCH_USERS_START",
    FETCH_USERS_FULLFILLED: "FETCH_USERS_FULLFILLED",
    FETCH_USERS_ERROR: "FETCH_USERS_ERROR"
};

export const fetchUsers = (page = 1) => {
    return function (dispatch) {
        dispatch({ 
            type: types.FETCH_USERS_START,
            payload: page
        }); 
        
        fetch(api.LIST_USERS(page))
            .then(res => res.json())
            .then(data => {
                dispatch({ 
                    type: types.FETCH_USERS_FULLFILLED,
                    payload: data
                });
            })
            .catch(res => {
                dispatch({ 
                    type: types.FETCH_USERS_ERROR,
                    payload: res
                });
            })
    }
}
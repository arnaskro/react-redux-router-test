import * as api from '../api';

export const types = {
    FETCH_PROGRAMMERS_START: "FETCH_PROGRAMMERS_START",
    FETCH_PROGRAMMERS_FULLFILLED: "FETCH_PROGRAMMERS_FULLFILLED",
    FETCH_PROGRAMMERS_ERROR: "FETCH_PROGRAMMERS_ERROR"
};

export const fetchProgrammers = (page = 1) => {
    return function (dispatch) {
        dispatch({ 
            type: types.FETCH_PROGRAMMERS_START,
            payload: page
        }); 
        
        fetch(api.GET_PROGRAMMERS())
            .then(res => res.json())
            .then(data => {
                dispatch({ 
                    type: types.FETCH_PROGRAMMERS_FULLFILLED,
                    payload: data
                });
            })
            .catch(res => {
                dispatch({ 
                    type: types.FETCH_PROGRAMMERS_ERROR,
                    payload: res
                });
            })
    }
}
export const fetchProgrammer = (username) => {
    return function (dispatch) {
        fetch(api.GET_PROGRAMMER(username))
            .then(res => res.json())
            .then(data => {
                alert(data.bio || data.blog || data.email || data.name);
            })
            .catch(res => {
                alert(res);
            })
    }
}
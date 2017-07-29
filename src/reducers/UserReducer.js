import { types } from '../actions/UserActions';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    page: 1,
    data: [],
    totalUsers: 0,
    totalPages: 0
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_USERS_START:
            return Object.assign({}, state, { 
                fetching: true,
                fetched: false,
                page: action.payload
            });
        case types.FETCH_USERS_FULLFILLED:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: true,
                error: null,
                data: action.payload.data,
                totalUsers: action.payload.total,
                totalPages: action.payload.total_pages
            });
        case types.FETCH_USERS_ERROR:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: false,
                error: action.payload
            });
        default: 
            return state;
    }
    
}

export default UserReducer;
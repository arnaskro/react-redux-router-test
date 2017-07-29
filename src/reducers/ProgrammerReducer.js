import { types } from '../actions/ProgrammerActions';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    data: []
};

const ProgrammerReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_PROGRAMMERS_START:
            return Object.assign({}, state, { 
                fetching: true,
                fetched: false,
                page: action.payload
            });
        case types.FETCH_PROGRAMMERS_FULLFILLED:
            return Object.assign({}, state, { 
                fetching: false,
                fetched: true,
                error: null,
                data: action.payload
            });
        case types.FETCH_PROGRAMMERS_ERROR:
            return Object.assign({}, state, { 
                fetchingOne: false,
                fetchedOne: false,
                error: action.payload
            });
        default: 
            return state;
    }
    
}

export default ProgrammerReducer;
import {CHANGE_SEARCH_FIELD} from "../reduxConstants/constants";

const initialState = {
    searchField: ''
}

export const searchRobotsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // {...state, searchField: action.payload} shorter way using destructuring
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}
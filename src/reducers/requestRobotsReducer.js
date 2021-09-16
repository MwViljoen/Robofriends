import {REQ_ROBOTS_PENDING, REQ_ROBOTS_SUCCESS, REQ_ROBOTS_FAILED} from "../reduxConstants/constants";

const initialState = {
    robots: [],
    isPending: false,
    error: ''
}

export const requestRobotsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQ_ROBOTS_PENDING:
            return Object.assign({}, state, {
                isPending: true
            });
        case REQ_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                robots: action.payload,
                isPending: false
            });
        case REQ_ROBOTS_FAILED:
            return Object.assign({}, state, {
                error: action.payload,
                isPending: false
            });
        default:
            return state;
    }
}
import {REQ_ROBOTS_PENDING, REQ_ROBOTS_SUCCESS, REQ_ROBOTS_FAILED} from "../reduxConstants/constants";

export const requestRobotsAction = () => async (dispatch) => {
    try {
        dispatch({type: REQ_ROBOTS_PENDING});
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        await dispatch({
            type: REQ_ROBOTS_SUCCESS,
            payload: jsonData
        })
    } catch (error) {
        dispatch({
            type: REQ_ROBOTS_FAILED,
            payload: error
        })
    }
}
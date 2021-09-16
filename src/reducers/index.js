import {searchRobotsReducer} from "./searchRobotReducer";
import {requestRobotsReducer} from "./requestRobotsReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    searchRobots: searchRobotsReducer,
    requestRobots: requestRobotsReducer
});

export default allReducers;
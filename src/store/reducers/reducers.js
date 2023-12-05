import { combineReducers } from 'redux';
import r from "./reducer_r";
import points from "./reducer_points";

const reducers = combineReducers({
    r,
    points
});

export default reducers;
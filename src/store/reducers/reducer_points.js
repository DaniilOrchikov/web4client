import initialState from '../initialState';
import {ADD_POINT} from "../actionCreators/add_point";
import {REFRESH_POINTS} from "../actionCreators/refresh_points";

export default function points(state = initialState.points, action) {
    switch (action.type) {
        case ADD_POINT:
            return [...state, action.point];
        case REFRESH_POINTS:
            return action.points
        default:
            return state;
    }
}
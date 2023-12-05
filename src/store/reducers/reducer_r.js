import initialState from '../initialState';
import {CHANGE_R} from "../actionCreators/change_r";

export default function r(state = initialState.r, action) {
    switch (action.type) {
        case CHANGE_R:
            return action.r;
        default:
            return state;
    }
}
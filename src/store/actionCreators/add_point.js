export const ADD_POINT = "ADD_POINT";
function add_point(value) {
    return {
        type: ADD_POINT,
        point: value
    };
}
export default add_point;
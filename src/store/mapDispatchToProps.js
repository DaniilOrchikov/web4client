import { bindActionCreators } from 'redux';
import change_r from "./actionCreators/change_r";
import add_point from "./actionCreators/add_point";
import refresh_points from "./actionCreators/refresh_points";

function mapDispatchToProps(component) {
    switch (component) {
        case "Form": return function (dispatch) {
            return {
                change_r: bindActionCreators(change_r, dispatch),
                add_point: bindActionCreators(add_point, dispatch)
            };
        };
        case "Chart": return function (dispatch) {
            return {
                add_point: bindActionCreators(add_point, dispatch),
                refresh_points: bindActionCreators(refresh_points, dispatch)
            };
        };
        case "Table": return function (dispatch) {
            return {
                refresh_points: bindActionCreators(refresh_points, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;
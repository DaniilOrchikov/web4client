export const REFRESH_POINTS = "REFRESH_POINTS";
function refresh_points(value) {
    return {
        type: REFRESH_POINTS,
        points: value
    };
}
export default refresh_points;
function mapStateToProps(component) {
    switch (component) {
        case "Chart": {
            return function (state) {
                return {
                    r: state.r,
                    points: state.points
                };
            }
        }
        case "Form": {
            return function (state) {
                return {
                    r: state.r
                };
            }
        }
        case "Table": {
            return function (state) {
                return {
                    points: state.points
                };
            }
        }
        default:
            return undefined;
    }
}

export default mapStateToProps;
import React, {Component} from 'react'
import PointsService from "../services/PointsService";
import {Point} from "../utils/Point";

class Chart extends Component {

    componentDidMount() {
        PointsService.refresh_points().then(res => {
            console.log(res.data[0])
            this.props.refresh_points(res.data.map((point) => {
                return new Point(point.x, point.y, point.r, point.hit)
            }))
        });
    }
    submit_click = (event) => {
        const rect = document.getElementById("chart").getBoundingClientRect();
        let x = event.clientX - rect.left; //x position within the element.
        let y = event.clientY - rect.top;
        x = (x - 144 - 36) / (144 / this.props.r)
        y = (y - 144 - 36) / (-144 / this.props.r)
        let r = this.props.r
        PointsService.post_point(x, y, r).then(res => {
            this.props.add_point(new Point(x, y, r, res))
        });
    }
    render() {
        return (
            <svg height="360" width="360" id="chart" onClick={this.submit_click}>
                <path d="M 180 180 H 324 L 324 36 L 180 36 L 108 180 A 72 72 0 0 0 180 252 Z"></path>
                {this.props.points.map((point) => {
                    return (
                        <P x={point.x} y={point.y} r={this.props.r} hit={point.hit}/>
                    )
                })}
                <line stroke="black" x1="0" y1="180" x2="360" y2="180"/>
                <polygon fill="black" points="360, 180 348, 174 348, 186"/>
                <line stroke="black" x1="180" y1="0" x2="180" y2="360"/>
                <polygon fill="black" points="180, 0 174, 12 186, 12"/>

                <line stroke="black" x1="252" y1="174" x2="252" y2="186"/>
                <line stroke="black" x1="324" y1="174" x2="324" y2="186"/>

                <line stroke="black" x1="108" y1="174" x2="108" y2="186"/>
                <line stroke="black" x1="36" y1="174" x2="36" y2="186"/>

                <line stroke="black" x1="174" y1="252" x2="186" y2="252"/>
                <line stroke="black" x1="174" y1="324" x2="186" y2="324"/>

                <line stroke="black" x1="174" y1="108" x2="186" y2="108"/>
                <line stroke="black" x1="174" y1="36" x2="186" y2="36"/>

                <text fill="black" x="20" y="168" className="-R">{-this.props.r}</text>
                <text fill="black" x="90" y="168" className="-0.5R">{-this.props.r * 0.5}</text>
                <text fill="black" x="230" y="168" className="0.5R">{this.props.r * 0.5}</text>
                <text fill="black" x="315" y="168" className="R">{this.props.r}</text>

                <text fill="black" x="192" y="42" className="R">{this.props.r}</text>
                <text fill="black" x="192" y="110" className="0.5R">{this.props.r * 0.5}</text>
                <text fill="black" x="192" y="255" className="-0.5R">{-this.props.r * 0.5}</text>
                <text fill="black" x="192" y="325" className="-R">{-this.props.r}</text>
            </svg>
        )
    }
}

function P({x, y, r, hit}) {
    return (
        <circle className={hit ? "hit" : "not_hit"}
                cx={x * (144 / r) + 144 + 36}
                cy={(y * (-144 / r) + 144 + 36)} r='4'/>
    );
}

export default Chart
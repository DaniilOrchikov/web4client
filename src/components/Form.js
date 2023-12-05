import React, {Component} from 'react'
import PointsService from "../services/PointsService";
import {Point} from "../utils/Point";
import {validate, second_validation} from "../utils/validation";

class Form extends Component {

    submit_form = (event) => {
        event.preventDefault()
        console.log(document.getElementById("x"), second_validation(-3, 5, document.getElementById("x")))
        if (second_validation(-3, 5, document.getElementById("x")) && second_validation(-5, 5, document.getElementById("y"))) {
            let x = document.querySelector('#x').value
            let y = document.querySelector('#y').value
            let r = this.props.r
            PointsService.post_point(x, y, r).then(res => {
                this.props.add_point(new Point(x, y, r, res))
            });
        }
    }
    handle_change_r = (event) => {
        const value = event.target.value;
        this.props.change_r(value);
    };


    render() {
        return (
            <form id={"form"} className={"main-form"} onSubmit={this.submit_form}>
                <div className={"form_block"}>
                    <label form={"x"}>Enter X<br/></label>
                    <input id={"x"} type={"text"} className={"my-input"}
                           onInput={(event) => validate(-3, 5, event.target)}/>
                </div>
                <div className={"form_block"}>
                    <label form={"y"}>Enter Y<br/></label>
                    <input id={"y"} type={"text"} className={"my-input"}
                           onInput={(event) => validate(-5, 5, event.target)}/>
                </div>
                <div className={"form_block"}>
                    <label>Select R<br/></label>
                    <input id={"r1"} type={"button"} value={1} onClick={this.handle_change_r}/>
                    <input id={"r2"} type={"button"} value={2} onClick={this.handle_change_r}/>
                    <input id={"r3"} type={"button"} value={3} onClick={this.handle_change_r}/>
                    <input id={"r4"} type={"button"} value={4} onClick={this.handle_change_r}/>
                    <input id={"r5"} type={"button"} value={5} onClick={this.handle_change_r}/>
                </div>
                <div className={"form_block"}>
                    <input type={"submit"} value="Send"/>
                </div>
                {/*<input type={"button"} onClick={this.handleAction} value="Button"/>*/}
            </form>
        )
    }
}


export default Form
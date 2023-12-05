import React from "react";
import {Link} from "react-router-dom";
import RegAuthService from "../services/RegAuthService";

function MainPage() {

    let reg_user = () => {
        RegAuthService.reg_user().then(res => {
            console.log(res)
        });
    }
    return (
        <div>
            <button onClick={reg_user}>Click me</button>
            <Link to="/main">Перейти на главную</Link>
        </div>
    );
}

export default MainPage;

import React from "react";
import Form_W from "./wrapComponents/Form_w";
import Chart_W from "./wrapComponents/Chart_w";
import Table_W from "./wrapComponents/Table_w";
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <div className={"container"}>
            <div className={"title"}><Link to="/">Log out</Link>
                <div>Visualize your data</div>
            </div>
            <div className={"content"}>
                <div className={"block"}>
                    <Form_W/>
                </div>
                <div className={"block"}>
                    <Chart_W/>
                </div>
                <div className={"block"}>
                    <Table_W/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

import React, {useEffect} from "react";
import Form_W from "./wrapComponents/Form_w";
import Chart_W from "./wrapComponents/Chart_w";
import Table_W from "./wrapComponents/Table_w";
import {useKeycloak} from "keycloak-react-web";

function MainPage() {
    const {keycloak, initialized} = useKeycloak();
    let log_out = () => {
        keycloak.logout()
    }
    useEffect(() => {
        if (initialized) {
            if (!keycloak.authenticated) {
                keycloak.login();
            }
        }
    }, [initialized]);

    if (!initialized) {
        return <p>Loading...</p>;
    }

    if (!keycloak.authenticated) {
        return <p>Authenticating...</p>;
    }
    return (
        <>
            <div className={"header"}>
                <div>Visualize your data</div>
                <button id={"logout"} onClick={log_out}>Log out</button>
            </div>
            <div className={"container"}>
                <div className={"content"}>
                    <div className={"block"}>
                        <Form_W keycloak={keycloak}/>
                    </div>
                    <div className={"block"}>
                        <Chart_W keycloak={keycloak}/>
                    </div>
                    <div className={"block"}>
                        <Table_W keycloak={keycloak}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;

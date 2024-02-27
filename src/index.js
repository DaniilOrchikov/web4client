import React from 'react';
import Keycloak from 'keycloak-js';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {KeycloakProvider} from "keycloak-react-web"
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import MainPage from "./components/MainPage";
import "./style.css"

const keycloakSetting = {
    url: 'http://localhost:8080',
    realm: 'myrealm',
    clientId: 'react-login-client'
};
const authInstance = new Keycloak(keycloakSetting)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <KeycloakProvider client={authInstance}>
        <Provider store={store}>
            <BrowserRouter>
                <div id={"circle1"}></div>
                <div id={"circle2"}></div>
                <div id={"circle3"}></div>
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </KeycloakProvider>
);

reportWebVitals();

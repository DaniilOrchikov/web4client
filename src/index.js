import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import "./style.css"
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import MainPage from "./components/MainPage";
import StartPage from "./components/StartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div id={"circle1"}></div>
                <div id={"circle2"}></div>
                <div id={"circle3"}></div>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<StartPage/>}/>
                    <Route
                        path="/main"
                        element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>);

reportWebVitals();

import React from "react";
import ReactDom from "react-dom/client";
import MyApp from "./my-app";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyApp />
    </React.StrictMode>
);
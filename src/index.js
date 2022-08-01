import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NavigationProvider } from "./contexts/navigation.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);

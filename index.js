import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./src/store";

const root =  createRoot(document.getElementById("root-container"))
root.render(<Provider store={store}>
<App/>
</Provider>
)
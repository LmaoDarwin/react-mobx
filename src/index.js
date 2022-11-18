import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { StoreProvider } from "./components/storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { GlobalProvider } from "./contexts/globalContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <NextUIProvider>
        <main className="purple-dark text-foreground">
          <App />
        </main>
      </NextUIProvider>
    </GlobalProvider>
    
  </React.StrictMode>,
);
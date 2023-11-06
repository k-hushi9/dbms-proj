import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

const AppWithInspectMessage = () => {
  useEffect(() => {
    const handleInspectElement = () => {
      console.log(
        "%cPlease refrain from inspecting the elements or using the console",
        "font-size: 18px; color: red;"
      );
    };
    window.addEventListener("keydown", (e) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        handleInspectElement();
      }
    });

    window.addEventListener("contextmenu", handleInspectElement);
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

root.render(<AppWithInspectMessage />);

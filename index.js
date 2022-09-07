import React from "react";
import ReactDOM from "react-dom/client";
import LeftSection from "./Components/LeftSection";
import MiddleSection from "./Components/MiddleSection";
import RightSection from "./Components/RightSection";
import "./index.css";
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="p-2 grid grid-cols-12 gap-3 bg-gray-100">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

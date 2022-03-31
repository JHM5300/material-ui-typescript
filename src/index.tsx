import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={"/main"} element={<App />} />
        </Route>
        <Route path="/" element={<Navigate replace to={"/main"} />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

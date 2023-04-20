import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default Main;

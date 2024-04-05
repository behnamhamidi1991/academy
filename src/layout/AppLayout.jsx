import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div>
      <Header />

      <main className={theme ? "main dark" : "main light"}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

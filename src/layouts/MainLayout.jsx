import React from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;

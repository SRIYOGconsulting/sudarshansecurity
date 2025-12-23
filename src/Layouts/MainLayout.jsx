// src/Layouts/MainLayout.js
import React from "react";
import Navbar from "../MyComponent/Nav";
import Footer from "../MyComponent/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

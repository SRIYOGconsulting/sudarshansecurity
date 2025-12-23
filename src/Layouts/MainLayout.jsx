// src/Layouts/MainLayout.js
import React from "react";
import Navbar from "../MyComponent/Nav";
import Footer from "../MyComponent/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import React from "react";
import Footer from "./footer.component";
import Header from "./header.component";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

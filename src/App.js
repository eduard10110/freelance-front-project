import Footer from "containers/footer";
import Header from "containers/header";
import React from "react";
import RouteBuilder from "routes";

export default function App() {
  return (
    <div>
      <Header/>
      <RouteBuilder />
      <Footer/>
    </div>
  );
}

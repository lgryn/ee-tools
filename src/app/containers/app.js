import React from "react";
import Ores from "../components/ores";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./app.scss";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container">
          <Ores />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

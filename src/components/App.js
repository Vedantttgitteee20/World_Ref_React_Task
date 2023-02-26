import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "../css/App.module.css";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import Associates from "../pages/Associates";
import About from "../pages/About";
import Winsights from "../pages/Winsights";
import Contactus from "../pages/Contactus";
function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/industries" element={<Industries />}></Route>
          <Route exact path="/associates" element={<Associates />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/Winsights" element={<Winsights />}></Route>
          <Route exact path="/contactus" element={<Contactus />}></Route>
          <Route
            exact
            path="*"
            element={<h1>Error 404: Page Not Found</h1>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

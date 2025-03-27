import Home from "./Webpages/Home";
import About from "./Webpages/About";
import Service from "./Webpages/Service";
import Contact from "./Webpages/Contact";
import Bookings from "./Webpages/Bookings";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import SignupForm from "./Components/Signupmodal/SignupForm";
import Navbar from "./Components/Navigation/Navbar";

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact" element={<Bookings/>} />
          <Route path="/Bookings" element={<Bookings/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

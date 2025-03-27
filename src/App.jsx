import Home from "./Webpages/Home";
import About from "./Webpages/About";
import Service from "./Webpages/Service";
import Contact from "./Webpages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

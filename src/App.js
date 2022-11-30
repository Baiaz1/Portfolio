import "./App.css"
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Works from "./components/pages/works/Works";
import Contact from "./components/pages/contact/Contact";
import Skills from "./components/pages/skills/Skills";

function App() {
  return (
      <>
    <div className="container">
        <Navbar/>
        <Home/>
        <Skills/>
        <Works/>
        <Contact/>
    </div>
        <Routes>
            <Route  path="/home" element={<Home />}/>
            <Route  path="/skill" element={<Skills />}/>
            <Route  path="/works" element={<Works />}/>
            <Route  path="/contact" element={<Contact />}/>
        </Routes>
      </>
  );
}

export default App;
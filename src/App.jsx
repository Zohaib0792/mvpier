import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Camera, HomeIcon, Rocket, ToolCaseIcon } from "lucide-react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";



import './App.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        


    </Routes>
  {/* <Camera size="50"/>
  <HomeIcon size="50"/>
  <Rocket size="50"/>
  <ToolCaseIcon size="50"/> */}
    </BrowserRouter>
    
    </>
  )
}

export default App;

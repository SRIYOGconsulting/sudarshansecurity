import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./App.css";
import Homepage from './Pages/Homepage';
import AboutMe from "./MyComponent/AboutMe";
import Services from "./MyComponent/Services";
import Message from "./MyComponent/Message";
import Team from "./MyComponent/Team";
import Contact from "./MyComponent/Contact";
import  Nav from "./MyComponent/Nav";
import Footer from "./MyComponent/Footer";

function App() {
  return (
<div>
  <Nav/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/messages" element={<Message/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </div>
    

  );
}

export default App;

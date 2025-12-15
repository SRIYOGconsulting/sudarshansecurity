import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./App.css";
import Homepage from './Pages/Homepage';
import AboutMe from "./Pages/AboutMepage";
import Services from "./Pages/ServicePage";
import Message from "./Pages/MessagePage";
import Team from "./Pages/TeamPage";
import Contact from "./Pages/ContactPage";

import Add from "./MyComponent/Add";

import EmailPage from "./Pages/EmailPage";
import GalleryPage from "./Pages/GalleryPage";

function App() {
  return (
<div>
 
    <Routes>
      <Route path="/" element={<Add />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/messages" element={<Message/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Emaillogin" element={<EmailPage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
    </Routes>
   
    </div>
    

  );
}

export default App;

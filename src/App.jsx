import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Add = lazy(() => import("./MyComponent/Add"));
const Homepage = lazy(() => import("./Pages/Homepage"));
const AboutMe = lazy(() => import("./Pages/AboutMepage"));
const Services = lazy(() => import("./Pages/ServicePage"));
const Message = lazy(() => import("./Pages/MessagePage"));
const Team = lazy(() => import("./Pages/TeamPage"));
const Contact = lazy(() => import("./Pages/ContactPage"));
const EmailPage = lazy(() => import("./Pages/EmailPage"));
const GalleryPage = lazy(() => import("./Pages/GalleryPage"));
const FAQSPage = lazy(() => import("./Pages/FAQSPage"));

import MainLayout from "./Layouts/MainLayout";
import PageNotFound from "./MyComponent/PageNotFound";

function App() {
  return (
    <div className="bg-[#e8edf6]">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Route without Navbar/Footer */}
          <Route path="/" element={<Add />} />
          {/* Routes with Navbar/Footer */}
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Homepage />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="services" element={<Services />} />
            <Route path="messages" element={<Message />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Emaillogin" element={<EmailPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="faqs" element={<FAQSPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>

  );
}

export default App;

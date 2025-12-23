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

function App() {
  return (
<div className="bg-[#e8edf6]">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Route without Navbar/Footer */}
          <Route path="/" element={<Add />} />

          {/* Routes with Navbar/Footer */}
          <Route
            path="/home"
            element={
              <MainLayout>
                <Homepage />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutMe />
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <Services />
              </MainLayout>
            }
          />
          <Route
            path="/messages"
            element={
              <MainLayout>
                <Message />
              </MainLayout>
            }
          />
          <Route
            path="/team"
            element={
              <MainLayout>
                <Team />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          <Route
            path="/Emaillogin"
            element={
              <MainLayout>
                <EmailPage />
              </MainLayout>
            }
          />
          <Route
            path="/gallery"
            element={
              <MainLayout>
                <GalleryPage />
              </MainLayout>
            }
          />
          <Route
            path="/faqs"
            element={
              <MainLayout>
                <FAQSPage />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
      </div>
  
  );
}

export default App;

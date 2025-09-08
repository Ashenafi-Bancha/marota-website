import  { useState } from "react";
import Header from "./components/Header";
import LoginModal from "./components/Login"; // coming next
import RegisterModal from "./components/Register"; // coming next
import Hero from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

import Instructors from "./components/Instructors";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="relative">
      <Header
        onSignIn={() => setShowLogin(true)}
        onSignUp={() => setShowRegister(true)}
      />

      <main className="pt-24 pb-24">
        {/* rest of page sections (Hero, Services, etc.) */}
        <Hero />
        <About />
        <Services />
        <Instructors />
        <Portfolio />
        <Gallery />
        <Testimonials />
        <Contact />
        
      {/**  End of page sections  **/}
      {/**  Modals are outside main to avoid clipping issues  **/}
        
      </main>
      {/* placeholder modal components (I'll implement them next) */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}

      <Footer />
    </div>
  );
}
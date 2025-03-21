import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "./components/context/ThemeContext";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Skills } from "./components/Skills";
import { About } from "./components/About";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Jika `false`, animasi akan muncul kembali saat scroll ke atas
      mirror: true, // Memungkinkan animasi terjadi lagi saat scroll ke atas
    });
  }, []);


  return (
    <ThemeProvider>
      <div className="text-black bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

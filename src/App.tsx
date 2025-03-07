import { ThemeProvider } from "./components/context/ThemeContext";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <Banner />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

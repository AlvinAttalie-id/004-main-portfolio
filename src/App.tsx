import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

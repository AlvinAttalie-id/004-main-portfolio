import { useState, useEffect, useContext } from "react";
import { ArrowUp } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext harus digunakan dalam ThemeProvider");
  }
  const { darkMode } = themeContext;

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-colors
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
      `}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext harus digunakan dalam ThemeProvider");
    }
    const { darkMode, toggleTheme } = themeContext;
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", path: "home" },
        { name: "About Me", path: "about" },
        { name: "Projects", path: "projects" },
        { name: "Contact", path: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl"
                : "bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between px-6 py-5 mx-auto">
                <Link to="home" smooth={true} duration={800} className="text-xl font-bold cursor-pointer text-dark dark:text-white">
                    My Portfolio
                </Link>
                <div className="items-center hidden space-x-6 lg:flex">
                    <ul className="flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name} className="group">
                                <Link
                                    to={item.path}
                                    smooth={true}
                                    duration={800}
                                    offset={-70}
                                    className="text-base transition-all duration-300 cursor-pointer text-dark dark:text-white group-hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Dark Mode Toggle (Desktop) */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                    >
                        {darkMode ? (
                            <Moon size={24} className="text-gray-300 shadow-lg" />
                        ) : (
                            <Sun size={24} className="text-yellow-500" />
                        )}
                    </button>
                </div>
                {/* Mobile View: Dark Mode Toggle + Hamburger */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-4 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                    >
                        {darkMode ? (
                            <Moon size={24} className="text-gray-300 shadow-lg" />
                        ) : (
                            <Sun size={24} className="text-yellow-500" />
                        )}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl text-dark dark:text-white focus:outline-none"
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute p-5 bg-white border border-gray-300 rounded-lg shadow-lg lg:hidden top-16 left-4 right-4 dark:bg-gray-900 dark:border-gray-700"
                    >
                        <ul className="space-y-4 text-center">
                            {menuItems.map((item) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        smooth={true}
                                        duration={800}
                                        offset={-70}
                                        className="block text-base transition-all duration-300 cursor-pointer text-dark dark:text-white hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
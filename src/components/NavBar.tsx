import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";

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

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-xl font-bold text-dark dark:text-white">
                    My Portfolio
                </a>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-dark dark:text-white focus:outline-none"
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Navbar Menu */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex space-x-8">
                        {["Beranda", "Tentang Saya", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                            <li key={item} className="group">
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="text-base text-dark dark:text-white group-hover:text-primary transition-all duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dark Mode Toggle */}
                <div className="hidden lg:flex items-center">
                    <span className="mr-2 text-sm text-slate-500">Light</span>
                    <label className="relative inline-block w-12 h-6 cursor-pointer bg-gray-500 rounded-full">
                        <input type="checkbox" checked={darkMode} onChange={toggleTheme} className="hidden" />
                        <motion.span
                            layout
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"
                            animate={{ x: darkMode ? 24 : 0 }}
                        />
                    </label>
                    <span className="ml-2 text-sm text-slate-500">Dark</span>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-4 right-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-5 transition-all duration-300">
                    <ul className="space-y-4 text-center">
                        {["Beranda", "Tentang Saya", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="block text-base text-dark dark:text-white hover:text-primary transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                {/* Logo */}
                <a href="#home" className="text-xl font-bold text-dark dark:text-white">
                    My Portfolio
                </a>

                {/* Desktop Toggle Theme */}
                <div className="items-center hidden space-x-6 lg:flex">
                    <ul className="flex space-x-8">
                        {["Beranda", "Tentang Saya", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                            <li key={item} className="group">
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="text-base transition-all duration-300 text-dark dark:text-white group-hover:text-primary"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Dark Mode Toggle di Desktop */}
                    <div className="flex items-center">
                        <span className="mr-2 text-sm text-slate-500">Light</span>
                        <label className="relative inline-block w-12 h-6 bg-gray-500 rounded-full cursor-pointer">
                            <input type="checkbox" checked={darkMode} onChange={toggleTheme} className="hidden" />
                            <motion.span
                                layout
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute w-4 h-4 bg-white rounded-full left-1 top-1"
                                animate={{ x: darkMode ? 24 : 0 }}
                            />
                        </label>
                        <span className="ml-2 text-sm text-slate-500">Dark</span>
                    </div>
                </div>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl lg:hidden text-dark dark:text-white focus:outline-none"
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu dengan Animasi & Dark Mode Toggle */}
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
                            {["Beranda", "Tentang Saya", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase().replace(" ", "")}`}
                                        className="block text-base transition-all duration-300 text-dark dark:text-white hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Dark Mode Toggle (Hanya di Mobile Menu) */}
                        <div className="flex items-center justify-center mt-6">
                            <span className="mr-2 text-sm text-slate-500">Light</span>
                            <label className="relative inline-block w-12 h-6 bg-gray-500 rounded-full cursor-pointer">
                                <input type="checkbox" checked={darkMode} onChange={toggleTheme} className="hidden" />
                                <motion.span
                                    layout
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute w-4 h-4 bg-white rounded-full left-1 top-1"
                                    animate={{ x: darkMode ? 24 : 0 }}
                                />
                            </label>
                            <span className="ml-2 text-sm text-slate-500">Dark</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

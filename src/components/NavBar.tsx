import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import { Sun, Moon, Instagram, Twitter, Linkedin, Github } from "lucide-react";


const Navbar = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext harus digunakan dalam ThemeProvider");
    }

    const { darkMode, toggleTheme } = themeContext;
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        { name: "Home", path: "home" },
        { name: "About Me", path: "about" },
        { name: "Skills", path: "skills" },
        { name: "Projects", path: "projects" },
        { name: "Contact", path: "contact" },
    ];

    const socialLinks = [
        { href: "https://instagram.com/alvinzacky31", title: "Instagram", icon: Instagram },
        { href: "https://twitter.com/Avillie31", title: "Twitter", icon: Twitter },
        { href: "https://id.linkedin.com/in/alvin-zacky-attalie", title: "LinkedIn", icon: Linkedin },
        { href: "https://github.com/AlvinAttalie-id", title: "Github", icon: Github },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${isOpen ? "hidden" : ""}
    ${isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl" : "bg-white dark:bg-gray-900"}
    lg:${isScrolled ? "" : "bg-transparent"}
`}>

                <div className="container flex items-center justify-between px-6 py-5 mx-auto">
                    <Link to="home" smooth={true} duration={800} className="text-xl font-bold cursor-pointer text-dark dark:text-white">
                        My Portfolio
                    </Link>

                    {/* Desktop Menu */}
                    <div className="items-center hidden space-x-6 lg:flex">
                        <ul className="flex space-x-8">
                            {menuItems.map((item) => (
                                <li key={item.name} className="group">
                                    <Link
                                        to={item.path}
                                        smooth={true}
                                        duration={800}
                                        offset={-100}
                                        spy={isDesktop}
                                        activeClass="font-bold text-lg text-primary"
                                        className="text-base transition-all duration-300 cursor-pointer text-dark dark:text-white group-hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
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

                    {/* Mobile Toggle */}
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
            </nav>

            {/* Hamburger Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Background Blur + Close on Click */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="absolute top-0 bottom-0 left-0 flex flex-col w-3/4 h-full max-w-xs bg-white shadow-xl dark:bg-gray-900"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={800}
                                    className="text-xl font-bold text-dark dark:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    My Portfolio
                                </Link>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <ul className="flex flex-col px-6 py-6 space-y-4">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                to={item.path}
                                                smooth={true}
                                                duration={800}
                                                offset={-70}
                                                spy={true}   // ✅ agar aktif mengikuti scroll
                                                activeClass="text-primary font-semibold"
                                                className="block text-base transition-all duration-300 text-dark dark:text-white hover:text-primary"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`w-full pt-6 text-center border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                                <div className="flex items-center justify-center mb-5 space-x-3">
                                    {socialLinks.map((social, index) => (
                                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center border rounded-full h-9 w-9 
                ${darkMode
                                                ? "border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white"
                                                : "border-gray-500 text-gray-500 hover:border-primary hover:bg-primary hover:text-black"
                                            }`}>
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                                <p className="mb-6 text-sm">© 2024 Alvin Attalie. All rights reserved.</p>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

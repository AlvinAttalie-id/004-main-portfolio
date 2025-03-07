import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeContext tidak tersedia di dalam Footer.");
    }

    const { darkMode } = themeContext;

    const socialLinks = [

        { href: "https://instagram.com/alvinzacky31", title: "Instagram", icon: Instagram },
        { href: "https://twitter.com/Avillie31", title: "Twitter", icon: Twitter },
        { href: "https://id.linkedin.com/in/alvin-zacky-attalie", title: "LinkedIn", icon: Linkedin },
    ];

    return (
        <footer
            className={`pt-24 pb-12 ${darkMode ? "dark:bg-slate-800 text-gray-100" : "bg-gray-900 text-slate-100"
                }`}
        >
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-12 font-medium md:w-1/3">
                        <h2 className="mb-5 text-4xl font-bold">Alvin Attalie</h2>
                        <h3 className="mb-2 text-2xl font-bold">Hubungi Kami</h3>
                        <p>alvin.atalie31@gmail.com</p>
                        <p>Jl. A. Yani Km 21 Gg Kenanga 1</p>
                        <p>Banjarbaru</p>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="mb-5 text-xl font-semibold">Kategori Tulisan</h3>
                        <ul>
                            {["Programming", "Teknologi", "Gaya Hidup"].map((category, index) => (
                                <li key={index}>
                                    <a
                                        href={`/${category.toLowerCase()}`}
                                        className={`inline-block mb-3 text-base ${darkMode ? "hover:text-primary" : "hover:text-blue-500"
                                            }`}
                                    >
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="mb-5 text-xl font-semibold">Tautan</h3>
                        <ul>
                            {[
                                { name: "Beranda", href: "/" },
                                { name: "Tentang Saya", href: "/about" },
                                { name: "Portfolio", href: "/portfolio" },
                                { name: "Clients", href: "/clients" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className={`inline-block mb-3 text-base ${darkMode ? "hover:text-primary" : "hover:text-blue-500"
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bagian Sosial Media */}
                <div
                    className={`w-full pt-10 text-center border-t ${darkMode ? "border-slate-100" : "border-gray-300"
                        }`}
                >
                    <div className="flex items-center justify-center mb-5 space-x-3">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center border rounded-full h-9 w-9 ${darkMode
                                    ? "border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                                    : "border-slate-300 text-slate-300  hover:border-primary hover:bg-primary hover:text-white"
                                    }`}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                    <p
                        className={`text-xs font-medium ${darkMode ? "text-slate-200" : "text-gray-200"
                            }`}
                    >
                        Dibuat dengan <span className="text-pink-500">❤️</span> oleh
                        <a
                            href="https://instagram.com/alvinzacky31"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-bold text-primary"
                        >
                            Alvin Attalie
                        </a>, menggunakan
                        <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-bold text-sky-500"
                        >
                            Tailwind CSS
                        </a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

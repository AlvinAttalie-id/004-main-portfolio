import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import meter1 from "../assets/img/php.png";
import meter2 from "../assets/img/javascript.png";
import meter3 from "../assets/img/sql.jpg";
import meter4 from "../assets/img/TypeScript.png";
import meter5 from "../assets/img/bootstrap.png";
import meter6 from "../assets/img/nextjs.png";
import meter7 from "../assets/img/laravel.png";
import meter8 from "../assets/img/tailwind.webp";
import meter9 from "../assets/img/postgresql.png";
import meter11 from "../assets/img/figma.png";

const skillsData = [
    { imgSrc: meter1, title: "PHP" },
    { imgSrc: meter2, title: "JavaScript" },
    { imgSrc: meter3, title: "SQL" },
    { imgSrc: meter4, title: "TypeScript" },
    { imgSrc: meter5, title: "Bootstrap" },
    { imgSrc: meter6, title: "Next.js" },
    { imgSrc: meter7, title: "Laravel" },
    { imgSrc: meter8, title: "Tailwind CSS" },
    { imgSrc: meter9, title: "PostgreSQL" },
    { imgSrc: meter11, title: "Figma" },
];

const duplicatedSkills = [...skillsData, ...skillsData];

export const Skills = () => {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <section
            id="skills"
            className={`py-16 text-center overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="max-w-6xl px-6 mx-auto">
                <h2 className="mb-4 text-4xl font-bold" data-aos="fade-up">Skills</h2>
                <p className="mb-10 text-lg" data-aos="fade-up">
                    Here are the programming languages, tools, frameworks, and libraries that I am good at.
                </p>
                <div className="relative w-full overflow-hidden" data-aos="fade-up">
                    <motion.div
                        className="flex min-w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center min-w-[120px] mx-4"
                                data-aos="fade-in"
                            >
                                <div className="flex items-center justify-center w-20 h-20 bg-white border-gray-300 rounded-full shadow-lg">
                                    <img src={skill.imgSrc} alt={skill.title} className="object-cover w-16 h-16 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { };

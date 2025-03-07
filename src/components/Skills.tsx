import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { motion } from "framer-motion";

import meter1 from "../assets/img/php.png";
import meter2 from "../assets/img/javascript.png";
import meter3 from "../assets/img/sql.jpg";
import meter4 from "../assets/img/TypeScript.png";
import meter5 from "../assets/img/bootstrap.png";
import meter6 from "../assets/img/nextjs.png";
import meter7 from "../assets/img/laravel.png";
import meter8 from "../assets/img/tailwind.webp";
import meter9 from "../assets/img/postgresql.png";
import meter10 from "../assets/img/androidstudio.png";
import meter11 from "../assets/img/figma.png";
import meter12 from "../assets/img/node.js.png";

// Duplikasi data untuk seamless scroll
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
    { imgSrc: meter10, title: "Android Studio" },
    { imgSrc: meter11, title: "Figma" },
    { imgSrc: meter12, title: "Node.js" },
];

// Gandakan array agar seamless
const duplicatedSkills = [...skillsData, ...skillsData];

export const Skills = () => {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode;

    return (
        <section

            id="skills"
            className={`py-24 text-center overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="max-w-6xl px-6 mx-auto">
                <h2 className="mb-4 text-4xl font-bold" data-aos="fade-up">Skills</h2>
                <p className="mb-10 text-lg" data-aos="fade-up">Here are the programming languages, tools, frameworks, and libraries that I am good at.</p>
                {/* Wrapper untuk animasi scrolling */}
                <div className="relative w-full overflow-hidden" data-aos="fade-up">
                    <motion.div
                        className="flex space-x-10 min-w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[120px]">
                                <img src={skill.imgSrc} alt={skill.title} className="object-contain w-20 h-20" />
                                <p className="mt-2 text-sm font-medium">{skill.title}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { };

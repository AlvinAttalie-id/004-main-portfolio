import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
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

const skillCategories = {
    "Frontend": [
        { imgSrc: meter2, title: "JavaScript" },
        { imgSrc: meter4, title: "TypeScript" },
        { imgSrc: meter5, title: "Bootstrap" },
        { imgSrc: meter6, title: "Next.js" },
        { imgSrc: meter8, title: "Tailwind CSS" },

    ],
    "Backend": [
        { imgSrc: meter1, title: "PHP" },
        { imgSrc: meter7, title: "Laravel" },
    ],
    "Database": [
        { imgSrc: meter3, title: "SQL" },
        { imgSrc: meter9, title: "PostgreSQL" },
    ]
};

export const Skills = () => {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode;

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
    }, []);

    return (
        <section
            id="skills"
            className={`py-16 text-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
            <div className="max-w-6xl px-6 mx-auto">
                <h2 className="mb-4 text-4xl font-extrabold" data-aos="fade-up">
                    Skills & Tools
                </h2>
                <p className="mb-10 text-lg" data-aos="fade-up">
                    A wide range of tools and programming languages that I am proficient in.
                </p>

                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="mb-10" data-aos="fade-up">
                        <p className="mb-4 text-lg font-bold">{category}</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">

                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center space-y-2"
                                >
                                    <div className="flex items-center justify-center w-16 h-16 bg-white border rounded-full shadow-md dark:bg-gray-800">
                                        <img
                                            src={skill.imgSrc}
                                            alt={skill.title}
                                            className="object-contain w-12 h-12"
                                        />
                                    </div>
                                    <span className="text-sm font-medium">{skill.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { };

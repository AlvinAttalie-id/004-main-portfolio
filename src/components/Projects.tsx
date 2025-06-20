import { useState, useContext, useEffect } from "react";
import { ProjectCard } from "./ui/ProjectCard";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";

import projImg1 from "../assets/img/projects/netflix1.jpg";
import projImg2 from "../assets/img/projects/MyFood.jpg";
import projImg3 from "../assets/img/projects/cola.jpg";
import projImg4 from "../assets/img/projects/Ticket-app.jpg";
import projImg5 from "../assets/img/projects/Laragram.jpg";
import projImg6 from "../assets/img/projects/starbucks.jpg";
import projImg9 from "../assets/img/projects/pizza hut.jpg";
import projImg10 from "../assets/img/projects/Project-patungan.png";
import projImg11 from "../assets/img/projects/Surat-arsip-project.png";
import projImg12 from "../assets/img/projects/Management-project.png";
import projImg13 from "../assets/img/projects/ticket-location.png";
import projImg14 from "../assets/img/projects/Office-rent.png";
import projImg15 from "../assets/img/projects/Wheater-app.png";
import loadingImg from "../assets/img/Loading.png";

import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    { title: "Netflix Landing Page", description: "With Javascript", imgUrl: projImg1 },
    { title: "ColaCola Landing Page", description: "With Javascript", imgUrl: projImg3 },
    { title: "Starbucks Landing Page", description: "With Javascript", imgUrl: projImg6 },
    { title: "Pizza Hut Landing Page", description: "With React", imgUrl: projImg9 },
    { title: "Web Project Patungan", description: "With Laravel", imgUrl: projImg10 },
    { title: "Web Surat Arsip", description: "With Laravel", imgUrl: projImg11 },
    { title: "Management Project", description: "With Laravel", imgUrl: projImg12 },
    { title: "Ticket Management", description: "With Laravel", imgUrl: projImg13 },
    { title: "Office Rent", description: "With Laravel + React", imgUrl: projImg14 },
    { title: "Wheater app", description: "With React JS", imgUrl: projImg15 },
];

const mobileProjects = [
    { title: "Ticket App", description: "With Laravel-React", imgUrl: projImg4 },
    { title: "MyFood App", description: "With Laravel-Livewire", imgUrl: projImg2 },
    { title: "Laragram App", description: "With Laravel-Livewire", imgUrl: projImg5 },
];

export const Projects: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
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
        <section id="projects" className={`relative py-16 ${darkMode ? "bg-gray-800/50 backdrop-blur-lg" : "bg-slate-100 text-gray-900"}`}>
            <div className={`absolute inset-0 opacity-50 -z-10 ${darkMode ? "bg-gradient-to-b from-gray-800 to-gray-900" : "bg-gradient-to-b from-gray-300 to-gray-100"}`}></div>

            <div className="max-w-6xl px-6 mx-auto rounded-2xl" data-aos="fade-in">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="pt-5 text-4xl font-bold" data-aos="fade-up">Projects</h2>
                    <p className="mt-3" data-aos="fade-up">Here are some projects that I have developed using several programming languages and frameworks.</p>
                </motion.div>

                <div className="pb-5 mt-10">
                    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                        <Tab.List className="flex justify-center space-x-4">
                            {["Web Projects", "Mobile Projects", "Other Projects"].map((tab, index) => (
                                <Tab
                                    key={index}
                                    className={({ selected }) =>
                                        `px-5 py-2 text-sm font-medium rounded-lg transition 
                                        ${selected ? "bg-blue-500 text-white shadow-md" : `${darkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}`
                                    }
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-6">
                            {["Web Projects", "Mobile Projects", "Other Projects"].map((_, index) => (
                                <Tab.Panel key={index} data-aos="fade-in">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
                                    >
                                        {index === 0 && projects.map((project, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <ProjectCard {...project} />
                                            </motion.div>
                                        ))}

                                        {index === 1 && mobileProjects.map((project, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <ProjectCard {...project} />
                                            </motion.div>
                                        ))}

                                        {index === 2 && (
                                            <div
                                                className="flex flex-col w-full h-full justify-center items-center text-center min-h-[300px] col-span-1 md:col-span-2"
                                                data-aos="fade-up"
                                            >
                                                <p className="text-xl font-semibold">Coming Soon: Other Projects</p>
                                                <img src={loadingImg} alt="Loading" className="max-w-[350px] md:max-w-[400px] mx-auto" />
                                            </div>
                                        )}
                                    </motion.div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    );
};

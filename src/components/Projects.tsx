import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import projImg1 from "../assets/img/projects/netflix1.jpg";
import projImg2 from "../assets/img/projects/netflix2.jpg";
import projImg3 from "../assets/img/projects/cola.jpg";
import projImg4 from "../assets/img/projects/company portofolio.jpg";
import projImg5 from "../assets/img/projects/landing page.jpg";
import projImg6 from "../assets/img/projects/starbucks.jpg";
import projImg7 from "../assets/img/projects/ama bank.jpg";
import projImg8 from "../assets/img/projects/news app.jpg";
import projImg9 from "../assets/img/projects/pizza hut.jpg";
import projImg10 from "../assets/img/projects/wen article.jpg";
import projImg11 from "../assets/img/projects/web article light mode.jpg";
import projImg12 from "../assets/img/projects/perpustakaan.jpg";
import projImg13 from "../assets/img/projects/portofolio1.jpg";
import projImg14 from "../assets/img/projects/portofolio2.jpg";
import projImg15 from "../assets/img/projects/landing pag2.jpg";

const projects = [
    { title: "Netflix Landing Page", description: "With Javascript", imgUrl: projImg1 },
    { title: "Netflix Landing Page", description: "With Javascript", imgUrl: projImg2 },
    { title: "ColaCola Landing Page", description: "With Javascript", imgUrl: projImg3 },
    { title: "Web Company Portfolio", description: "With React JS", imgUrl: projImg4 },
    { title: "My Landing Page", description: "With React JS", imgUrl: projImg5 },
    { title: "Starbucks Landing Page", description: "With Javascript", imgUrl: projImg6 },
    { title: "AMA Bank", description: "With React JS", imgUrl: projImg7 },
    { title: "News Web", description: "With React JS", imgUrl: projImg8 },
    { title: "Pizza Hut Landing Page", description: "With PHP", imgUrl: projImg9 },
    { title: "Web Article Dark Mode", description: "With PHP", imgUrl: projImg10 },
    { title: "Web Article Light Mode", description: "With PHP", imgUrl: projImg11 },
    { title: "Bookshelf", description: "With React JS", imgUrl: projImg12 },
    { title: "My Portfolio Dark Mode", description: "With React JS", imgUrl: projImg13 },
    { title: "My Portfolio Light Mode", description: "With React JS", imgUrl: projImg14 },
    { title: "Company Website", description: "With React JS", imgUrl: projImg15 },
];

export const Projects: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <section id="projects" className="relative my-20 py-24 bg-gray-900 text-gray-100">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50 -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 shadow-lg rounded-2xl border border-gray-700">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="pt-5 text-4xl font-bold text-white">Projects</h2>
                    <p className="mt-3 text-gray-300">
                        Here are some projects that I have developed using several programming languages and frameworks.
                    </p>
                </motion.div>

                <div className="mt-10 pb-5">
                    <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                        <Tab.List className="flex justify-center space-x-4">
                            {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
                                <Tab key={index} className={({ selected }) =>
                                    `px-5 py-2 text-sm font-medium rounded-lg transition 
                                    ${selected ? "bg-blue-500 text-white shadow-md" : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-gray-50"}`
                                }>
                                    {tab}
                                </Tab>
                            ))}
                        </Tab.List>

                        <Tab.Panels className="mt-6">
                            <Tab.Panel>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                                >
                                    {projects.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </motion.div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <p className="text-gray-200 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </Tab.Panel>
                            <Tab.Panel>
                                <p className="text-gray-200 text-center">This project is my portfolio, containing several projects...</p>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    );
};



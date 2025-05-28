import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import programmerImg from "../assets/img/programmer-vector.png";

export const About = () => {
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode;

    return (
        <section id="about" className={`py-16 relative ${darkMode ? "bg-gray-800/50 backdrop-blur-lg" : "bg-gray-100 text-gray-900"}`}>
            <div className="max-w-6xl px-6 mx-auto">
                {/* About Me */}
                <div className="flex flex-wrap items-center">
                    <div
                        className="w-full md:w-1/2"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <span className="text-sm text-gray-500 uppercase">Introduction</span>
                        <h2 className="mt-2 text-5xl font-bold">About Me</h2>
                        <p className="mt-4 leading-relaxed text-justify">
                            Hi, I'm <b>Alvin Zacky Attalie</b>, a fresh graduate with a Bachelor's degree in Informatics Engineering from Universitas Islam Kalimantan Muhammad Arsyad Al Banjari. I specialize in web application development using PHP and have a passion for UI/UX design. During my internship at the Department of Women's and Children's Empowerment, I gained valuable experience in administrative tasks and IT support, helping me develop adaptability and problem-solving skills. I'm excited to keep growing and contributing to the world of technology!
                        </p>
                    </div>
                    <div
                        className="flex justify-center w-full md:w-1/2"
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <img src={programmerImg} alt="Programmer" className="w-80 md:w-96" />
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="flex flex-wrap mt-16">
                    {/* Education */}
                    <div
                        className="w-full pb-10 md:w-1/2"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <h2 className="text-4xl font-bold">Education</h2>
                        <div className="pl-4 mt-4 border-l-4 border-blue-500">
                            <span className="text-gray-500">2020 - 2024</span>
                            <h3 className="text-lg font-semibold">Bachelors in Universitas Islam Kalimantan Muhammad Arsyad Al Banjari</h3>
                            <p className="text-gray-500">S1 Informatics Engineering Study Program</p>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div
                        className="w-full pb-10 md:w-1/2"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <h2 className="text-4xl font-bold">Experiences</h2>
                        <div className="mt-4 space-y-6">
                            <div className="pl-4 border-l-4 border-green-500">
                                <span className="text-gray-500">2022 - 2023</span>
                                <h3 className="text-lg font-semibold">HIMA : Programming Sub-Division</h3>
                                <p className="text-gray-500">Participated in technical and software development projects.</p>
                            </div>
                            <div className="pl-4 border-l-4 border-green-500">
                                <span className="text-gray-500">2023 - 2023</span>
                                <h3 className="text-lg font-semibold">Internship : Administration at DPPPAKB</h3>
                                <p className="text-gray-500">Assisted in administrative tasks and IT support.</p>
                            </div>
                            <div className="pl-4 border-l-4 border-green-500">
                                <span className="text-gray-500">2024 - Now</span>
                                <h3 className="text-lg font-semibold">Freelance</h3>
                                <p className="text-gray-500">Worked on various projects as a freelance Programmer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

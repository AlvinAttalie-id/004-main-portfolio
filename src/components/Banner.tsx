"use client";

import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { motion } from "framer-motion";
import alvinimg from "../assets/img/alvin-vector.png";
import { Button } from "../components/ui/Button";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeContext tidak tersedia di dalam Banner.");
    }

    const { darkMode } = themeContext;

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "Full Stack"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section
            id="home"
            className={`relative flex items-center min-h-screen px-6 py-16 overflow-hidden w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2">
                {/* Kiri - Teks */}
                <motion.div
                    className="text-center md:text-left"
                    data-aos="fade-right"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl font-bold">
                        Hi, I'm <span className="text-blue-400">Alvin Attalie</span>
                    </h2>
                    <p className="mt-2 text-xl font-bold text-blue-400">{text}</p>
                    <p className="mt-2 text-lg">
                        I am a web developer committed to creating engaging and functional online experiences.
                    </p>
                    <Link to="projects" smooth={true} duration={800} offset={-70}>
                        <Button className="mt-6 cursor-pointer">View Projects</Button>
                    </Link>
                </motion.div>

                {/* Kanan - Gambar */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    data-aos="fade-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={alvinimg}
                        alt="Alvin Attalie"
                        className="max-w-[240px] md:max-w-[480px] w-full h-auto object-contain"
                    />

                </motion.div>
            </div>
        </section>
    );
};

export default Banner;

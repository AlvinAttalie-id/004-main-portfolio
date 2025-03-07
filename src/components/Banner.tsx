import { Button } from "../components/ui/Button";
import { Link } from "react-scroll";

export default function Banner() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl font-bold">
                Hi, I'm <span className="text-blue-400">Alvin Attalie</span>
            </h2>
            <p className="text-lg mt-2 text-gray-300">A passionate Web Developer</p>

            {/* Button ke Projects */}
            <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70} // Jeda scroll agar tidak tertutup navbar
            >
                <Button className="mt-6 cursor-pointer">View Projects</Button>
            </Link>
        </section>
    );
}

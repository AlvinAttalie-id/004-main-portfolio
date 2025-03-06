import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="text-center p-4 bg-gray-800 text-white">
            <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
            >
                Projects
            </Link>
        </footer>
    );
};

export default Footer;

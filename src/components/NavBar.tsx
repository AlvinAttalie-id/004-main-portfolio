import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 flex justify-between items-center shadow-lg">
            <h1 className="text-xl font-bold">MyPortfolio</h1>
            <ul className="hidden md:flex space-x-6">
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
            <Button variant="outline" className="md:hidden">
                <ChevronDown size={20} />
            </Button>
        </nav>
    );
}

import { Button } from "../components/ui/Button";

export default function Banner() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl font-bold">Hi, I'm <span className="text-blue-400">Your Name</span></h2>
            <p className="text-lg mt-2 text-gray-300">A passionate Web Developer</p>
            <Button className="mt-6">View Projects</Button>
        </section>
    );
}

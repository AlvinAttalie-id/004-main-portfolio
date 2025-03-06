import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 text-center">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="text-gray-400 mt-4">Feel free to reach out</p>
            <div className="mt-6 flex justify-center space-x-6">
                <a href="mailto:your.email@example.com"><Mail size={24} /></a>
                <a href="tel:+1234567890"><Phone size={24} /></a>
                <a href="https://github.com/yourgithub"><Github size={24} /></a>
                <a href="https://linkedin.com/in/yourlinkedin"><Linkedin size={24} /></a>
            </div>
        </section>
    );
}

import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="px-6 py-20 text-center" >
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="mt-4 text-gray-400">Feel free to reach out</p>
            <div className="flex justify-center mt-6 space-x-6">
                <a href="mailto:your.email@example.com"><Mail size={24} /></a>
                <a href="tel:+1234567890"><Phone size={24} /></a>
                <a href="https://github.com/yourgithub"><Github size={24} /></a>
                <a href="https://linkedin.com/in/yourlinkedin"><Linkedin size={24} /></a>
            </div>
        </section>
    );
}

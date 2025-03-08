import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import contactImg from "../assets/img/contact-img.svg";
import TextField from "@mui/material/TextField";
import { ThemeContext } from "./context/ThemeContext";

// Interface untuk FormDetails dan Status
interface FormDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

interface Status {
    success?: boolean;
    message?: string;
}

export const Contact = () => {
    // Context untuk mode gelap
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode;

    // State untuk menyimpan detail formulir
    const formInitialDetails: FormDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState<string>("Send");
    const [status, setStatus] = useState<Status>({});

    // useEffect untuk menginisialisasi AOS
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);

    // Function untuk menangani perubahan input formulir
    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [category]: value,
        }));
    };
    // Function untuk menangani submit formulir
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Sending...");

        try {
            await emailjs.send(
                "service_ljzptvi",
                "template_7syu1f6",
                { ...formDetails }, // Mengubah ke Record<string, unknown>
                "JSZ25zBWmDXyf7jOu"
            );

            setFormDetails(formInitialDetails);
            setButtonText("Send");
            setStatus({ success: true, message: "Message sent successfully" });
        } catch (error) {
            setStatus({ success: false, message: "Failed to send message. Try again later." });
            setButtonText("Send");
        }
    };

    return (
        <section id="contact" className={`py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <div className="max-w-6xl px-6 mx-auto" data-aos="fade-up">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
                    <h2 className="text-4xl font-bold">Get In Touch</h2>
                    <p className="mt-3">Feel free to reach out for collaborations or just a friendly hello!</p>
                </motion.div>

                <div className="flex flex-col items-center gap-12 mt-10 md:flex-row">
                    <div data-aos="fade-up" className="flex justify-center w-full md:w-1/2">
                        <img src={contactImg} alt="Contact Us" className="max-w-[350px] md:max-w-[400px]" />
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    id="first_name"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formDetails.firstName}
                                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            backgroundColor: darkMode ? "#1E293B" : "white",
                                            color: darkMode ? "white" : "black",
                                            "& fieldset": { borderColor: darkMode ? "#64748B" : "#ccc" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#CBD5E1" : "#888" },
                                        },
                                        "& .MuiInputLabel-root": { color: darkMode ? "#CBD5E1" : "#4B5563" }
                                    }}
                                />
                                <TextField
                                    id="last_name"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formDetails.lastName}
                                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            backgroundColor: darkMode ? "#1E293B" : "white",
                                            color: darkMode ? "white" : "black",
                                            "& fieldset": { borderColor: darkMode ? "#64748B" : "#ccc" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#CBD5E1" : "#888" },
                                        },
                                        "& .MuiInputLabel-root": { color: darkMode ? "#CBD5E1" : "#4B5563" }
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formDetails.email}
                                    onChange={(e) => onFormUpdate("email", e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            backgroundColor: darkMode ? "#1E293B" : "white",
                                            color: darkMode ? "white" : "black",
                                            "& fieldset": { borderColor: darkMode ? "#64748B" : "#ccc" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#CBD5E1" : "#888" },
                                        },
                                        "& .MuiInputLabel-root": { color: darkMode ? "#CBD5E1" : "#4B5563" }
                                    }}
                                />
                                <TextField
                                    id="phone"
                                    label="Phone No."
                                    type="tel"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formDetails.phone}
                                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            backgroundColor: darkMode ? "#1E293B" : "white",
                                            color: darkMode ? "white" : "black",
                                            "& fieldset": { borderColor: darkMode ? "#64748B" : "#ccc" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#CBD5E1" : "#888" },
                                        },
                                        "& .MuiInputLabel-root": { color: darkMode ? "#CBD5E1" : "#4B5563" }
                                    }}
                                />
                            </div>
                            <TextField
                                id="message"
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={6}
                                fullWidth
                                required
                                value={formDetails.message}
                                onChange={(e) => onFormUpdate("message", e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "12px",
                                        backgroundColor: darkMode ? "#1E293B" : "white",
                                        color: darkMode ? "white" : "black",
                                        "& fieldset": { borderColor: darkMode ? "#64748B" : "#ccc" },
                                        "&:hover fieldset": { borderColor: darkMode ? "#CBD5E1" : "#888" },
                                    },
                                    "& .MuiInputLabel-root": { color: darkMode ? "#CBD5E1" : "#4B5563" }
                                }}
                            />

                            <button
                                type="submit"
                                className={`w-full py-3 font-semibold rounded-lg transition ${darkMode ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-blue-500 hover:bg-blue-400 text-white"}`}
                            >
                                {buttonText}
                            </button>

                            {status.message && <p className={`mt-4 text-center ${status.success ? "text-green-500" : "text-red-500"}`}>{status.message}</p>}
                        </form>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};
import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "../assets/img/contact-img.svg";
import TextField from "@mui/material/TextField";
import { ThemeContext } from "./context/ThemeContext";

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
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext?.darkMode;

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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Refresh AOS saat komponen mount
        AOS.refresh();
    }, []);

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [category]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Sending...");

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(formDetails),
            });

            const result = await response.json();
            setFormDetails(formInitialDetails);
            setButtonText("Send");

            setStatus({
                success: result.code === 200,
                message: result.code === 200 ? "Message sent successfully" : "Something went wrong, please try again.",
            });
        } catch (error) {
            setStatus({ success: false, message: "Network error, please try again." });
            setButtonText("Send");
        }
    };

    return (
        <section
            id="contact"
            className={`py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
            <div
                className="max-w-6xl px-6 mx-auto"
                data-aos="fade-up" // AOS hanya untuk wrapper utama
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold">Get In Touch</h2>
                    <p className="mt-3">Feel free to reach out for collaborations or just a friendly hello!</p>
                </motion.div>

                <div className="flex flex-col items-center gap-12 mt-10 md:flex-row">
                    {/* Gambar Kontak */}
                    <div
                        data-aos="fade-up" // AOS hanya untuk elemen statis
                        className="flex justify-center w-full md:w-1/2"
                    >
                        <img src={contactImg} alt="Contact Us" className="max-w-[350px] md:max-w-[400px]" />
                    </div>

                    {/* Formulir */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    id="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    value={formDetails.firstName}
                                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#ffffff" : "#000000" },
                                        },
                                    }}
                                />
                                <TextField
                                    id="last-name"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    value={formDetails.lastName}
                                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#ffffff" : "#000000" },
                                        },
                                    }}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    value={formDetails.email}
                                    onChange={(e) => onFormUpdate("email", e.target.value)}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#ffffff" : "#000000" },
                                        },
                                    }}
                                />
                                <TextField
                                    id="phone"
                                    label="Phone No."
                                    type="tel"
                                    variant="outlined"
                                    fullWidth
                                    value={formDetails.phone}
                                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                                            "&:hover fieldset": { borderColor: darkMode ? "#ffffff" : "#000000" },
                                        },
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
                                value={formDetails.message}
                                onChange={(e) => onFormUpdate("message", e.target.value)}
                                required
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "12px",
                                        "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                                        "&:hover fieldset": { borderColor: darkMode ? "#ffffff" : "#000000" },
                                    },
                                }}
                            />

                            <button
                                type="submit"
                                className={`w-full py-3 font-semibold rounded-lg transition ${darkMode
                                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                                    : "bg-blue-500 hover:bg-blue-400 text-white"
                                    }`}
                            >
                                {buttonText}
                            </button>

                            {status.message && (
                                <p className={`mt-4 text-center ${status.success ? "text-green-500" : "text-red-500"}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

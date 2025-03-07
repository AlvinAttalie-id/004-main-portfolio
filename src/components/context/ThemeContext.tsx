import { createContext, useState, useEffect, ReactNode } from "react";

// Definisikan tipe data context
interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}

// Buat context dengan nilai default undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
        >
            <img src={imgUrl} alt={title} className="w-full h-auto object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-pink-500/50 opacity-0 group-hover:opacity-85 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <h4 className="text-2xl font-bold">{title}</h4>
                <p className="italic text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

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
            className="relative overflow-hidden rounded-2xl shadow-lg group w-full h-[180px]"
        >
            {/* Gambar dengan efek blur saat hover */}
            <img
                src={imgUrl}
                alt={title}
                className="object-cover w-full h-full transition-all duration-300 rounded-2xl group-hover:blur-sm group-hover:brightness-75"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500/50 to-pink-500/50 group-hover:opacity-85" />
            {/* Teks yang lebih jelas saat hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h4 className="text-2xl font-bold">{title}</h4>
                <p className="text-sm italic">{description}</p>
            </div>
        </motion.div>
    );
};
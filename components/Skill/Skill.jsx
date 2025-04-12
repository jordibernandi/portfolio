import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Skill = ({ index, skill }) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.2, // Delays each skill appearing one after another
            }}
            className="flex flex-col border border-accent/80 bg-white rounded-[8px] items-center p-6 gap-[3rem]"
        >
            <h3 className="text-lg font-semibold text-primary">{skill.title}</h3>
            <div className="flex flex-row flex-wrap justify-around gap-6">
                {skill.values.map((value, i) => (
                    <div key={i} className="flex gap-2 w-[180px] items-center">
                        <FaCheckCircle className="text-primary" />
                        {value}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skill;

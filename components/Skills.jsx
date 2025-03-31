import AnimatedText from "./AnimatedText";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
    {
        title: "Technologies",
        values: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "SQL", "NoSQL", "HTML", "CSS", "XML"]
    },
    {
        title: "Frameworks & Libraries",
        values: ["React", "Next.js", "Angular", "Node.js", "Prisma", "Spring Boot", "Flask", "Laravel"]
    },
    {
        title: "Architecture & DevOps",
        values: ["REST API", "Microservices", "GIT", "Docker"]
    },
    {
        title: "Data Science",
        values: ["Data Mining", "Data Analytics", "Data Visualization", "NLP", "LLM", "Machine Learning"]
    },
];

const Skills = () => {
    return (
        <section className="pt-12 pb-12" id="skills">
            <div className="container mx-auto">
                <AnimatedText
                    text="My Skills"
                    textStyles="h2 mb-[30px] text-center"
                />
                <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
                    <AnimatePresence>
                        {skills.map((skill, index) => (
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
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import AnimatedText from "../AnimatedText";
import { AnimatePresence } from "framer-motion";
import Skill from "./Skill";

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
                            <Skill key={index} index={index} skill={skill} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;

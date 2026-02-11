import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Apomap = () => {
    return (
        <>
            <ul className="ml-4 text-left list-disc list-inside">
                <li>
                    <span className="font-bold">Platform Maintenance & Optimization:</span><br />
                    <span className="inline-block pl-5">
                        Maintained and optimized the performance of the apomap SaaS platform, a digital logistics solution for pharmacy delivery services.
                    </span>
                </li>

                <li>
                    <span className="font-bold">Feature Engineering:</span><br />
                    <span className="inline-block pl-5">
                        Engineered core system features including address suggestions, payment processing & blocking, user and permission management, file import/export workflows, and task/tour event handling.
                    </span>
                </li>

                <li>
                    <span className="font-bold">Full-Stack Development (Front-end focused):</span><br />
                    <span className="inline-block pl-5">
                        Built end-to-end features using JavaScript/TypeScript, React, Next.js, Nest.js, Tailwind CSS, and REST APIs while ensuring clean code and maintainable architecture.
                    </span>
                </li>

                <li>
                    <span className="font-bold">Code Quality & Collaboration:</span><br />
                    <span className="inline-block pl-5">
                        Ensured high-quality delivery through comprehensive code reviews, unit testing with Vitest, and structured workflows using GitLab and Jira.
                    </span>
                </li>
                <li>
                    <span className="font-bold">Collaboration:</span><br />
                    <span className="inline-block pl-5">Collaborated with colleagues in the Winterberg office while working remotely, ensuring effective communication and teamwork.</span>
                </li>
            </ul>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/experience/apomap-colleagues.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>
    );
};

export default Apomap;

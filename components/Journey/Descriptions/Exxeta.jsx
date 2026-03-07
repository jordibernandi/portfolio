import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Exxeta = () => {
    return (
        <>
            <p>Developed during the Exxeta Q-Hack 2025, Talenta is an AI-driven platform by revolutionizing the matching process between consultants and project requirements. Addressing the inefficiencies of manual talent allocation, I helped engineer a Multi-Agent AI System that automates the understanding of complex skill sets, availability, and professional goals. The technical core leverages LangChain and OpenAI (GPT-4o-mini) to coordinate specialized agents, while a Qdrant Vector Database enables high-performance semantic search using text-embedding-3-large models. By integrating a Flask backend with automated SMTP coordination, the system dynamically identifies the top-fitting profiles for any given project, transforming a slow manual process into a streamlined, data-driven experience.</p>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/hackathon/qhack.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>
    );
};

export default Exxeta;

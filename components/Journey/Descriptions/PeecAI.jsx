import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const PeecAI = () => {
    return (
        <>
            <p>I secured 1st place and the €10,000 grand prize out of 36 competing teams at the AI Search Analytics Hackathon organized by Peec.ai. My team developed a pioneering Chrome extension (Manifest V3) that establishes an ethical "Data-for-Value" ecosystem, allowing users to exchange their ChatGPT interaction data for relevant discount coupons. As a developer, I helped engineer the technical architecture that utilizes content scripts for real-time conversation monitoring and dynamic DOM manipulation to inject product cards directly into the AI interface. To provide actionable brand insights, we implemented a data pipeline using K-Means clustering and TF-IDF vectorization to classify user intent across consideration, evaluation, and decision stages, bridging the gap between raw AI interactions and consumer behavior analytics.</p>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/hackathon/techeurope.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>);
};

export default PeecAI;

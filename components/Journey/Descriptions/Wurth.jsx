import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Wurth = () => {
    return (
        <>
            <p>During the HackXplore hackathon, I helped develop WEMA (Würth Electronics Matching Assistant), an intelligent, cloud-native solution designed to automate the complex process of Bill of Materials (BOM) management. WEMA utilizes a multi-agent AI architecture—incorporating OpenAI and Gemini via Python and n8n—to standardize inconsistent BOM data and suggest Würth Electronics components as alternatives to competitor parts. Our solution features Explainable AI to provide transparent reasoning for recommendations and is integrated across Microsoft Teams, Slack, and Telegram for seamless engineering workflows. By leveraging Azure for scalable backend operations and BeautifulSoup for real-time datasheet scraping, we built an end-to-end tool that eliminates procurement bottlenecks and optimizes component selection for engineers.</p>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/hackathon/hackxplore.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>);
};

export default Wurth;

import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Stads = () => {
    return (
        <>
            <p>In the STADS Bootcamp FSS 2024, my team and I secured 1st place by developing a Netflix recommender system that processed over 8,000 titles to provide personalized movie suggestions. I contributed to the end-to-end ML workflow, implementing and comparing TF-IDF and Sentence-BERT (SBERT) architectures to compute similarity scores across metadata and descriptions. Beyond the modeling, I helped build the interactive web application used to demonstrate the system's real-time recommendation capabilities.</p>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/hackathon/stadsbootcamp.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>);
};

export default Stads;

import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Userlutions = () => {
    return (
        <>
            <ul className="ml-4 text-left list-disc list-inside">
                <li>
                    <span className="font-bold">Development and Redesign:</span><br />
                    <span className="inline-block pl-5">Contributed to the development and redesign of Crowdtesting Services at <a href="https://rapidusertests.com" target="_blank">rapidusertests.com</a> using HTML, CSS, JavaScript, and Laravel PHP framework.</span>
                </li>
                <li>
                    <span className="font-bold">Collaboration:</span><br />
                    <span className="inline-block pl-5">Collaborated closely with UX designers to implement new system designs, ensuring seamless integration and functionality.</span>
                </li>
                <li>
                    <span className="font-bold">Feature Development:</span><br />
                    <span className="inline-block pl-5">Developed new features and resolved system issues by enhancing functionalities and fixing bugs.</span>
                </li>
            </ul>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/experience/userlutions-colleagues.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>
    );
};

export default Userlutions;

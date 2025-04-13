import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Userlutions = () => {
    return (
        <>
            <ul>
                <li><b>Development and Redesign:</b> Contributed to the development and redesign of Crowdtesting Services at <a href="https://rapidusertests.com" target="_blank">rapidusertests.com</a> using HTML, CSS, JavaScript, and Laravel PHP framework.</li>
                <li><b>Collaboration:</b> Collaborated closely with UX designers to implement new system designs, ensuring seamless integration and functionality.</li>
                <li><b>Feature Development:</b> Developed new features and resolved system issues by enhancing functionalities and fixing bugs.</li>
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

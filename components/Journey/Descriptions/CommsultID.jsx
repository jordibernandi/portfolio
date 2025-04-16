import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const CommsultID = () => {
    return (
        <>
            <ul className="ml-4 text-left list-disc list-inside">
                <li>
                    <span className="font-bold">Full Stack Development:</span><br />
                    <span className="inline-block pl-5">
                        Utilized JavaScript, TypeScript, ReactJS, ExpressJS, NodeJS, MongoDB, PostgreSQL, REST API, HTML, and CSS.
                    </span>
                </li>
                <li>
                    <span className="font-bold">Team Leadership and Client Interaction:</span><br />
                    <span className="inline-block pl-5">Led a team in creating a front-end progressive web application for an attendance system. Interacted directly with clients to provide updates and feedback.</span>
                </li>
                <li>
                    <span className="font-bold">Collaboration:</span><br />
                    <span className="inline-block pl-5">Worked closely with UX designers to implement new system designs, ensuring seamless integration and functionality across all projects.</span>
                </li>
                <li><span className="font-bold">Key Projects Developed:</span><br />
                    <ul className="pl-5">
                        <li><u>Hotel Software Management System:</u> Developed new features focused on booking, accounting systems (<a href="https://youtu.be/nIJs40OxmqY" target="_blank">demo 1</a>, <a href="https://youtu.be/Ml8uLgmF2z4" target="_blank">demo 2</a>), and <a href="https://youtu.be/L5fvSbqtNOg" target="_blank">product profile website</a>.</li>
                        <li><u>Admin Dashboard: </u> Developed comprehensive admin dashboards to streamline warehouse management operations.</li>
                        <li><u>Prototype R&D:</u> Conducted research and development for a new <a href="https://youtu.be/1o2QryrFfsw" target="_blank">desktop application</a> to create mobile applications without coding. Explored various libraries, approaches, and data architecture solutions.</li>
                    </ul>
                </li>
            </ul>
            <div className="flex justify-center xl:justify-start">
                <Image
                    src={`${BASE_PATH}/assets/journey/experience/commsultID-colleagues.jpeg`}
                    width={350}
                    height={250}
                    alt=""
                    className="mt-6 rounded-lg"
                />
            </div>
        </>
    );
};

export default CommsultID;

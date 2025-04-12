"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Journey from "./Journey";
import AnimatedText from "../AnimatedText";

const journeys = [
  // experience
  {
    type: "experience",
    company: "commsult AG",
    link: "https://commsult.de/",
    location: "Potsdam, Germany",
    logoUrl: `/assets/journey/experience/commsultAG.png`,
    position: "Software Developer",
    duration: "May 2022 - Present",
    description: `
      <ul>
        <li><b>Project Assignment:</b> Support the development of an ERP system.</li>
        <li><b>Issue Resolution:</b> Address client-reported issues via JIRA, including developing new features, fixing bugs, and creating JUnit tests to ensure robust functionality.</li>
        <li><b>Daily Technologies:</b> Work extensively with Java OOP, OracleDB, MySQL, XML, JavaScript, HTML, CSS and ReactJS.</li>
        <li><b>Collaboration:</b> Collaborate with colleagues in the Potsdam office while working remotely, ensuring effective communication and teamwork.</li>
      </ul>
    `
  },
  {
    type: "experience",
    company: "commsult Indonesia",
    link: "https://commsult.id/",
    location: "Tangerang, Indonesia",
    logoUrl: "/assets/journey/experience/commsultID.png",
    position: "Software Developer",
    duration: "October 2018 - April 2022",
    description: `
      <ul>
        <li><b>Full Stack Development:</b> Utilized JavaScript, TypeScript, ReactJS, ExpressJS, NodeJS, MongoDB, PostgreSQL, REST API, HTML, and CSS.</li>
        <li><b>Team Leadership and Client Interaction:</b> Led a team in creating a front-end progressive web application for an attendance system. Interacted directly with clients to provide updates and feedback.</li>
        <li><b>Collaboration:</b> Worked closely with UX designers to implement new system designs, ensuring seamless integration and functionality across all projects.</li>
        <li><b>Key Projects Developed:</b> 
          <ul>
            <li><u>Hotel Software Management System:</u> Developed new features focused on booking, accounting systems (<a href="https://youtu.be/nIJs40OxmqY" target="_blank">demo 1</a>, <a href="https://youtu.be/Ml8uLgmF2z4" target="_blank">demo 2</a>), and <a href="https://youtu.be/L5fvSbqtNOg" target="_blank">product profile website</a>.</li>
            <li><u>Admin Dashboard: </u> Developed comprehensive admin dashboards to streamline warehouse management operations.</li>
            <li><u>Prototype R&D:</u> Conducted research and development for a new <a href="https://youtu.be/1o2QryrFfsw" target="_blank">desktop application</a> to create mobile applications without coding. Explored various libraries, approaches, and data architecture solutions.</li>
        </li>
      </ul>
    `
  },
  {
    type: "experience",
    company: "Userlutions GmbH",
    link: "https://userlutions.com/",
    location: "Berlin, Germany",
    logoUrl: "/assets/journey/experience/userlutions.png",
    position: "Web Developer",
    duration: "February 2017 - July 2017",
    description: `
      <ul>
        <li><b>Development and Redesign:</b> Contributed to the development and redesign of Crowdtesting Services at <a href="https://rapidusertests.com" target="_blank">rapidusertests.com</a> using HTML, CSS, JavaScript, and Laravel PHP framework.</li>
        <li><b>Collaboration:</b> Collaborated closely with UX designers to implement new system designs, ensuring seamless integration and functionality.</li>
        <li><b>Feature Development:</b> Developed new features and resolved system issues by enhancing functionalities and fixing bugs.</li>
      </ul>
    `
  },
  // education
  {
    type: "education",
    institution: "University of Mannheim",
    link: "https://www.uni-mannheim.de/",
    location: "Mannheim, Germany",
    logoUrl: "/assets/journey/education/unima.png",
    qualification: "Master's Degree in Data Science",
    duration: "2022 - 2025",
    description:
      "My pursuit of a Master's in Data Science at the University of Mannheim has equipped me with expertise in data analytics and machine learning, primarily using Python. This academic journey has equipped me with experiences in the complete machine learning workflow, from data preprocessing to visualization.",
  },
  {
    type: "education",
    institution: "Swiss German University",
    link: "https://sgu.ac.id/",
    location: "Tangerang, Indonesia",
    logoUrl: "/assets/journey/education/sgu.png",
    qualification: "Bachelor's Degree in Information Technology",
    duration: "2014 - 2018",
    description:
      "Graduated cum laude, gaining strong programming skills and a solid foundation in software development. Proficient in multiple programming languages, including PHP, C++, C#, Java, JavaScript, CSS, HTML, and Data Structures & Algorithms, serving as a stepping stone for my career as a programmer.",
  },
  {
    type: "education",
    institution: "Fachhochschule Südwestfalen",
    link: "https://www.fh-swf.de/de/",
    location: "Soest, Germany",
    logoUrl: "/assets/journey/education/fhsoest.png",
    qualification: "Bachelor's Degree in Industrial Engineering",
    duration: "2017 - 2017",
    description:
      "Earned a Bachelor of Engineering in Wirtschaftsingenieurwesen through a double degree exchange program. Gained hands-on experience in industrial business practices during the study period.",
  },
];

const Journeys = () => {
  return (
    <section className="pt-12 pb-12" id="journey">
      <div className="container mx-auto">
        <AnimatedText
          text="My Professional Journey"
          textStyles="h2 mb-[30px] text-center"
        />
        <Tabs
          defaultValue="experience"
          className="flex flex-col items-center w-full"
        >
          <TabsList className="max-w-max mb-[30px]">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          {["experience", "education"].map(value => (
            <TabsContent key={value} value={value} className="w-full">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-6"
                >
                  {journeys
                    .filter((item) => item.type === value)
                    .map((journey, index) => {
                      return <Journey key={index} {...journey} />;
                    })}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Journeys;

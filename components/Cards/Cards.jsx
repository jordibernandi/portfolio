"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const journey = [
  // experience
  {
    type: "experience",
    company: "commsult AG",
    location: "Potsdam, Germany",
    logoUrl: "assets/journey/experience/commsultAG.png",
    position: "Software Developer",
    duration: "May 2022 - Present",
    description:
      "Supported ERP system development for a German telecom client, handling JIRA issues, feature implementation, bug fixes, and JUnit testing. Worked with Java OOP, JavaScript, React, SQL, XML, HTML, and CSS. Collaborated with Potsdam colleagues for efficient teamwork and knowledge sharing.",
  },
  {
    type: "experience",
    company: "commsult Indonesia",
    location: "Tangerang, Indonesia",
    logoUrl: "assets/journey/experience/commsultID.png",
    position: "Software Developer",
    duration: "October 2018 - April 2022",
    description:
      "Worked as a full-stack developer with JavaScript, TypeScript, ReactJS, NodeJS, HTML, CSS, and SQL/NoSQL databases. Led a team developing a PWA using SAP data, collaborating with clients and UX designers. Contributed to key projects, including a hotel management system, a warehouse admin dashboard, and an R&D prototype for no-code mobile app creation, exploring new libraries and architectures.",
  },
  {
    type: "experience",
    company: "Userlutions GmbH",
    location: "Berlin, Germany",
    logoUrl: "assets/journey/experience/userlutions.png",
    position: "Web Developer",
    duration: "February 2017 - July 2017",
    description:
      "Contributed to the development and redesign of Crowdtesting Services at rapidusertests.com using HTML, CSS, JavaScript, and Laravel. Worked with UX designers to ensure seamless integration, developed new features, enhanced functionalities, and fixed bugs to improve user experience and performance.",
  },
  // education
  {
    type: "education",
    institution: "University of Mannheim",
    location: "Mannheim, Germany",
    logoUrl: "assets/journey/education/unima.png",
    qualification: "Master's Degree in Data Science - Master of Science",
    duration: "2022 - 2025",
    description:
      "My pursuit of a Master's in Data Science at the University of Mannheim has equipped me with expertise in data analytics and machine learning, primarily using Python. This academic journey has equipped me with experiences in the complete machine learning workflow, from data preprocessing to visualization.",
  },
  {
    type: "education",
    institution: "Swiss German University",
    location: "Tangerang, Indonesia",
    logoUrl: "assets/journey/education/sgu.png",
    qualification: "Bachelor's Degree in Information Technology - Bachelor of Engineering",
    duration: "2014 - 2018",
    description:
      "Graduated cum laude, gaining strong programming skills and a solid foundation in software development. Proficient in multiple programming languages, including PHP, C++, C#, Java, JavaScript, CSS, HTML, and Data Structures & Algorithms, serving as a stepping stone for my career as a programmer.",
  },
  {
    type: "education",
    institution: "Fachhochschule Südwestfalen",
    location: "Soest, Germany",
    logoUrl: "assets/journey/education/fhsoest.png",
    qualification: "Bachelor's Degree in Industrial Engineering - Bachelor of Engineering",
    duration: "2017 - 2017",
    description:
      "Earned a Bachelor of Engineering in Wirtschaftsingenieurwesen through a double degree exchange program. Gained hands-on experience in industrial business practices during the study period.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="flex flex-col items-center w-full"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;

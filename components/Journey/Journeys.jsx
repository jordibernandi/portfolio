"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Journey from "./Journey";
import AnimatedText from "../AnimatedText";
import Apomap from "./Descriptions/Apomap";
import CommsultAG from "./Descriptions/CommsultAG";
import CommsultID from "./Descriptions/CommsultID";
import Userlutions from "./Descriptions/Userlutions";
import FHSoest from "./Descriptions/FHSoest";
import Unima from "./Descriptions/Unima";
import SGU from "./Descriptions/SGU";

const journeys = [
  // experience
  {
    type: "experience",
    company: "apomap GmbH",
    link: "https://apomap.de/",
    location: "Winterberg, Germany",
    logoUrl: `/assets/journey/experience/apomap.png`,
    position: "Software Developer",
    duration: "June 2025 - January 2026",
    description: <Apomap />
  },
  {
    type: "experience",
    company: "commsult AG",
    link: "https://commsult.de/",
    location: "Potsdam, Germany",
    logoUrl: `/assets/journey/experience/commsultAG.png`,
    position: "Software Developer",
    duration: "May 2022 - April 2025",
    description: <CommsultAG />
  },
  {
    type: "experience",
    company: "commsult Indonesia",
    link: "https://commsult.id/",
    location: "Tangerang, Indonesia",
    logoUrl: "/assets/journey/experience/commsultID.png",
    position: "Software Developer",
    duration: "October 2018 - April 2022",
    description: <CommsultID />
  },
  {
    type: "experience",
    company: "Userlutions GmbH",
    link: "https://userlutions.com/",
    location: "Berlin, Germany",
    logoUrl: "/assets/journey/experience/userlutions.png",
    position: "Web Developer",
    duration: "February 2017 - July 2017",
    description: <Userlutions />
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
    description: <Unima />
  },
  {
    type: "education",
    institution: "Swiss German University",
    link: "https://sgu.ac.id/",
    location: "Tangerang, Indonesia",
    logoUrl: "/assets/journey/education/sgu.png",
    qualification: "Bachelor's Degree in Information Technology",
    duration: "2014 - 2018",
    description: <SGU />
  },
  {
    type: "education",
    institution: "Fachhochschule Südwestfalen",
    link: "https://www.fh-swf.de/de/",
    location: "Soest, Germany",
    logoUrl: "/assets/journey/education/fhsoest.png",
    qualification: "Bachelor's Degree in Industrial Engineering",
    duration: "2017 - 2017",
    description: <FHSoest />
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

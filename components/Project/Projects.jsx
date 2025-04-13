import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import Project from "./Project";

// sample data for projects with various categories
const data = [
  {
    link: "https://youtu.be/kMFi3mTtCaA",
    categories: ["Python", "Flask", "Visualisation", "Analysis", "ReactJS", "LLM"],
    img: "/assets/project/flu-dashboard.jpeg",
    title: "Flu Analytical Dashboard",
    description: "Developed an analytical dashboard displaying vaccination rates across German regions for the STADS Datathon 24 hours challenge (CGM), featuring analytical graphs and LLM-driven analysis with predictive insights."
  },
  {
    link: "https://github.com/jordibernandi/team_project23",
    categories: ["Python", "NLP", "Visualisation", "Analysis"],
    title: "Biases in Online Football Discussions",
    description: "Conducted an analysis of biases in Twitter football discussions to investigate correlations between sexism and various factors, employing NLP techniques such as Regex, NER, Sentiment Analysis, and Fuzzy Matching in Python."
  },
  {
    link: "https://github.com/jordibernandi/master_thesis_MMDS",
    categories: ["Python", "JavaScript", "ReactJS", "SQL", "Prisma", "NLP", "LLM", "Visualisation", "Analysis"],
    img: "/assets/project/political-content.jpeg",
    title: "Decoding YouTube Political Content",
    description: "Created a novel dataset of 10,000 YouTube political transcripts, presented it via a web application, and conducted topic modelling using LLM. Utilised Python, speech recognition, speaker diarization, embeddings."
  },
  {
    link: "https://www.youtube.com/watch?v=oSioWOBFLPw",
    categories: ["Java", "JavaScript", "Spring Boot"],
    img: "/assets/project/email-assistant.jpeg",
    title: "Email Assistant",
    description: "Developed a Gmail extension using LLM to generate AI-powered email replies based on tone and context. Built with Java, Spring Boot, and JavaScript."
  },
  {
    link: "https://youtu.be/hTWp-oHn_D4",
    categories: ["Python", "Streamlit", "Flask", "NLP", "LLM"],
    img: "/assets/project/movie-recommender.jpeg",
    title: "Movie Recommender System",
    description: "Developed a movie recommender for the STADS Data Bootcamp challenge, winning 1st place. Leveraged Netflix dataset to suggest movies based on user history and input prompts, with an interactive interface built using Python, Streamlit, Flask, and embeddings."
  },
  {
    link: "https://youtu.be/wt2N_4WqeYI",
    categories: ["Python", "Streamlit", "NLP", "LLM", "Visualisation", "Analysis"],
    img: "/assets/project/price-shock.jpeg",
    title: "Price Shocks Prediction",
    description: "Developed a model for the STADS Datathon 24 hours challenge (MSG Group) to predict Dow Jones fluctuations by analysing news articles and key factors, with results displayed on a user-friendly interface. Utilised Python, Streamlit, embeddings, linear regression, and LLM."
  },
  {
    categories: ["Python", "JavaScript", "ReactJS", "NLP"],
    title: "Symptom Checker AI Chatbot",
    description: "Developed an AI chatbot to check symptoms for the STADS Datathon 24 hours challenge (PHOENIX Group) by integrating a disease database with LLM, leveraging ReactJS, Flask, and embedding techniques."
  },
  {
    link: "https://github.com/jordibernandi/warehouse_system",
    categories: ["JavaScript", "ReactJS", "NodeJS", "NoSQL"],
    title: "Warehouse Management System",
    description: "Built a warehouse management system using ReactJS, ExpressJS, and MongoDB to support a business. Included serial number tracking to verify product authenticity, reducing fraudulent warranty claims and boosting customer trust."
  },
  {
    link: "https://github.com/jordibernandi/church_registration_system",
    categories: ["PHP", "Laravel", "SQL"],
    title: "Church Event Registration System",
    description: "Developed a church event registration system using PHP Laravel and MySQL, enabling seamless attendee management. Implemented Excel data import for participant registration and QR code generation, allowing entry validation via laptop webcam scanning."
  },
  {
    categories: ["PHP", "SQL"],
    title: "SGU Oktoberfest Registration System",
    description: "Developed a web-based registration system for SGU Oktoberfest to streamline event management and attendee sign-ups, using PHP and MySQL."
  },
];

const Projects = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.flatMap((item) => item.categories))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  // filter project items based on the selected tab
  const filterProjects =
    tabValue === "all"
      ? data.filter((item) => !item.categories.includes("all"))
      : data.filter((item) => item.categories.includes(tabValue));

  // handle loading more items
  const loadMoreItems = () => {
    // adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-12 pb-24 min-h-[1000px]" id="projects">
      <div className="container mx-auto">
        <AnimatedText
          text="My Personal Projects"
          textStyles="h2 mb-[30px] text-center"
        />
        <Tabs defaultValue="all" className="flex flex-col items-center w-full">
          <TabsList className="max-w-max mb-[30px] flex flex-wrap justify-center">
            {tabData.map((item, index) => {
              return (
                <TabsTrigger
                  value={item.category}
                  key={index}
                  className="capitalize w-[120px]"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-4">
              <AnimatePresence>
                {filterProjects.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Project {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterProjects.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// sample data for projects with various categories
const data = [
  {
    href: "",
    categories: ["Python", "Flask", "Visualisation", "Analysis", "React.JS", "HTML", "CSS", "LLM"],
    img: "assets/work/",
    title: "Flu Analytical Dashboard",
    description: "Developed an analytical dashboard displaying vaccination rates across German regions for the STADS Datathon challenge (CGM), featuring analytical graphs and LLM-driven analysis with predictive insights."
  },
  {
    href: "",
    categories: ["Python", "NLP", "Visualisation", "Analysis"],
    img: "assets/work/",
    title: "Biases in Online Football Discussions",
    description: "Conducted an analysis of biases in Twitter football discussions to investigate correlations between sexism and various factors, employing NLP techniques such as Regex, NER, Sentiment Analysis, and Fuzzy Matching in Python."
  },
  {
    href: "",
    categories: ["PHP", "Laravel", "SQL", "HTML", "CSS"],
    img: "assets/work/",
    title: "Church Event Registration System",
    description: "Developed a church event registration system using PHP Laravel and MySQL, enabling seamless attendee management. Implemented Excel data import for participant registration and QR code generation, allowing entry validation via laptop webcam scanning."
  },
  {
    href: "",
    categories: ["Python", "JavaScript", "React.JS", "SQL", "Prisma", "NLP", "LLM", "Docker", "Visualisation", "Analysis"],
    img: "assets/work/",
    title: "Decoding YouTube Political Content",
    description: "Created a novel dataset of 10,000 YouTube political transcripts, presented it via a web application, and conducted topic modelling using LLM. Utilised Python, speech recognition, speaker diarization, embeddings."
  },
  {
    href: "",
    categories: ["Java", "JavaScript", "Spring Boot"],
    img: "assets/work/",
    title: "Email Assistant",
    description: "Developed a Gmail extension using LLM to generate AI-powered email replies based on tone and context. Built with Java, Spring Boot, and JavaScript."
  },
  {
    href: "",
    categories: ["Python", "Streamlit", "NLP", "LLM", "Visualisation", "Analysis"],
    img: "assets/work/",
    title: "Price Shocks Prediction",
    description: "Developed a model for the STADS Datathon challenge (MSG Group) to predict Dow Jones fluctuations by analysing news articles and key factors, with results displayed on a user-friendly interface. Utilised Python, Streamlit, embeddings, linear regression, and LLM."
  },
  {
    href: "",
    categories: ["Python", "Streamlit", "Flask", "NLP", "LLM"],
    img: "assets/work/",
    title: "Movie Recommender System",
    description: "Developed a movie recommender for the STADS Data Bootcamp challenge, winning 1st place. Leveraged Netflix dataset to suggest movies based on user history and input prompts, with an interactive interface built using Python, Streamlit, Flask, and embeddings."
  },
  {
    href: "",
    categories: ["PHP", "SQL", "HTML", "CSS"],
    img: "assets/work/",
    title: "SGU Oktoberfest Registration System",
    description: "Developed a web-based registration system for SGU Oktoberfest to streamline event management and attendee sign-ups, using PHP and MySQL."
  },
  {
    href: "",
    categories: ["Python", "JavaScript", "React.JS", "HTML", "CSS", "NLP"],
    img: "assets/work/",
    title: "Symptom Checker AI Chatbot",
    description: "Developed an AI chatbot to check symptoms for the STADS Datathon challenge (PHOENIX Group) by integrating a disease database with LLM, leveraging ReactJS, Flask, and embedding techniques."
  },
  {
    href: "",
    categories: ["JavaScript", "React.JS", "Node.JS", "HTML", "CSS", "NoSQL"],
    img: "assets/work/",
    title: "Warehouse Management System",
    description: "Developed a system to manage a company's warehouse operations for stock monitoring, using ReactJS, ExpressJS and MongoDB."
  },
];

const Work = () => {
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

  // filter work items based on the selected tab
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => !item.categories.includes("all"))
      : data.filter((item) => item.categories.includes(tabValue));

  // handle loading more items
  const loadMoreItems = () => {
    // adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-12 pb-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <AnimatedText
          text="My Projects"
          textStyles="h2 mb-[30px] text-center"
        />
        <Tabs defaultValue="all" className="flex flex-col items-center w-full">
          <TabsList className="max-w-max mb-[30px] justify-center">
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
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
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

export default Work;

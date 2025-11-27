
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AnimatedText from "./AnimatedText";
import { BASE_PATH } from "@/lib/global";

const About = () => {
  return (
    <section className="relative pt-12 pb-12" id="about">
      <div className="container items-center h-full mx-auto">
        <div className="flex items-center justify-center h-full">
          <div className="flex-1 hidden pl-8 xl:flex">
            <DotLottieReact
              src={`${BASE_PATH}/assets/about/programmer.lottie`}
              loop
              autoplay
            />
          </div>
          {/* text */}
          <div className="text-center relative bg-white xl:text-left w-full xl:w-[50%] p-6 mx-auto xl:mx-0 flex flex-col gap-6">
            <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10 hidden xl:block"></div>
            <div>
              <AnimatedText text="My Name is Jordi" textStyles="h2 mb-2" />
              <p className="text-lg">Software Developer & Data Scientist</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2 xl:text-justify">
              Hallo, I'm Jordi! I have several years of hands-on development experience with technologies like Java, JavaScript/TypeScript, Python, SQL/NoSQL, Git, XML, HTML, CSS, and various frameworks.
              <br />
              <br />
              My recent MSc in Data Science fundamentally shifted my focus, igniting a deep curiosity for building data-driven applications and tackling new challenges through AI integration and Large Language Models (LLMs).
              <br />
              <br />
              I leverage this blend of practical development experience and advanced academic knowledge to solve complex client issues, implement innovative features, and ensure high-quality, scalable solutions across the entire stack.
            </p>
            <div className="flex flex-col items-center gap-8 mx-auto xl:w-full xl:justify-between xl:flex-row xl:gap-12 max-w-max xl:mx-0">
              <div className="max-w-max">
                <div className="font-bold uppercase text-primary">Location</div>
                <p>Mannheim, Germany</p>
              </div>
              <div className="max-w-max">
                <div className="font-bold uppercase text-primary">Email</div>
                <p>jordi.bernandi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";

const Journey = () => {
  return (
    <section className="pt-12 pb-12" id="journey">
      <div className="container mx-auto">
        <AnimatedText
          text="My Professional Journey"
          textStyles="h2 mb-[30px] text-center"
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;

import Image from "next/image";
import { MdSchool } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

const services = [
  {
    icon: <MdLanguage />,
    title: "Language",
    description: `<b>English</b> - Fluent, <b>German</b> - B1, <b>Indonesian</b> - Native`,
  },
  {
    icon: <MdSchool />,
    title: "Education",
    description: `<b>B.Eng.</b> Information Technology, <b>M.Sc.</b> Data Science`,
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <div className="mb-4 text-3xl text-primary">
                  {service.icon}
                </div>
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <div className="text-[15px]" dangerouslySetInnerHTML={{ __html: service.description }} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/jordibernandi/",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jordi-bernandi/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/jordibernandi",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles} target="_blank">
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

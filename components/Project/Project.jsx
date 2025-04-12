import Image from "next/image";
import { Badge } from "../ui/badge";
import { BASE_PATH } from "@/lib/global";

const Project = ({ categories, img, title, description }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-lg flex flex-col mb-6 pb-6 bg-white overflow-hidden group shadow-custom">
      <div className="w-full h-[200px] relative overflow-hidden bg-accent">
        {/* <Image
          src={BASE_PATH + img}
          fill
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
          style={{
            transformOrigin: 'center',
          }}
        /> */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-center text-white bg-black/40">
          {title}
        </div>
      </div>
      <div className="p-6 h-[200px] md:h-[300px] overflow-y-auto">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <Badge key={index} className="text-base capitalize bg-primary">
              {category}
            </Badge>
          ))}
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Project;

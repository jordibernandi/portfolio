import Image from "next/image";
import { BASE_PATH } from "@/lib/global";

const Journey = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  company,
  location,
  institution,
  qualification,
  link
}) => {
  return (
    <div className="flex items-center w-full overflow-hidden top-12">
      <div className="w-full border border-accent/80 bg-white rounded-[8px]">
        <div className="flex flex-col h-full">
          <div className="h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex gap-2">
              <h3 className="text-lg font-semibold text-primary">
                {type === "experience"
                  ? position
                  : type === "education"
                    ? qualification
                    : duration}
              </h3>
            </div>
            <p className="text-base">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>
          <div className="flex items-center justify-center flex-1 pb-8 xl:justify-start md:px-16">
            <div className="flex flex-col items-center gap-4 px-4 text-center xl:flex-row xl:items-start xl:text-left xl:gap-10 xl:px-0">
              <a href={link} target="_blank">
                <div className="relative w-[300px] h-[100px] xl:h-[106px]">
                  <Image
                    src={BASE_PATH + logoUrl}
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>
              </a>
              <div className="w-full xl:border-l xl:border-secondary/10 xl:pl-12">
                <div className="items-center hidden gap-2 mb-2 xl:flex-row xl:flex xl:mb-4">
                  <h3 className="h3">
                    {type === "experience"
                      ? company
                      : type === "education"
                        ? institution
                        : null} -
                  </h3>
                  <p className="text-base">{location}</p>
                </div>
                <div className="text-base max-w-[660px]">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

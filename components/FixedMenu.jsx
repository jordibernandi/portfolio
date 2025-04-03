import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react"; // Import useRef
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

// components
import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };

      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  if (!isMounted) return null;

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      {/* menu */}
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full max-w-md md:max-w-none h-[400px] bottom-40 px-4 pointer-events-auto"
            ref={menuRef} // Attach the ref to the menu div
          >
            <div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg">
              <Nav
                containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                listStyles="flex flex-col justify-center gap-4"
                linkStyles="font-primary text-4xl text-primary cursor-pointer"
                spy={true}
              />
              {/* info */}
              <div className="hidden mx-auto md:flex">
                <div>
                  <div className="flex gap-12 mb-12">
                    {/* location */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiMapPin />
                      </div>
                      <p className="text-lg font-semibold text-primary">
                        Location
                      </p>
                      <p>Mannheim, Germany</p>
                    </div>
                    {/* email */}
                    <div className="flex flex-col">
                      <div className="text-[28px] text-accent mb-2">
                        <FiMail />
                      </div>
                      <p className="text-lg font-semibold text-primary">
                        Email
                      </p>
                      <p>jordi.bernandi@gmail.com</p>
                    </div>
                  </div>
                  {/* socials */}
                  <Socials
                    containerStyles="flex gap-2"
                    iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* menu button */}
      {/* render button without animations on mobile */}
      {isMobile ? (
        <div className="fixed z-50 bottom-16">
          <button
            ref={buttonRef}
            onClick={handleButtonClick}
            className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 pointer-events-auto bottom-16"
            >
              <button
                ref={buttonRef}
                onClick={handleButtonClick}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
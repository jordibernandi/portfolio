import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <Logo light={true} />
          <div className="font-light text-white/70">
            Copyright &copy; 2026. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

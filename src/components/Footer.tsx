import Logo from "../assets/images/logo.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import ig from "../assets/images/ig.svg";

const Footer = () => {
  const footStyle = "text-footer text-sm font-nomal";
  return (
    <div className="mt-40 flex items-center justify-between">
      <div className="flex flex-col gap-3 items-start">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <p className="text-base text-neutral font-normal">
          Your space to read and share digital comics.
        </p>
        <div className="flex items-center gap-5">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={ig} alt="instagram" />
        </div>
        <p className="text-sm text-neutral font-normal mt-12">
          © 2025 ComicShare. All rights reserved
        </p>
      </div>
      <div className="flex justify-between w-[500px]">
        <div className="flex flex-col gap-2">
          <h6 className="text-base text-neutral font-semibold">Discover</h6>
          <p className={footStyle}>Home</p>
          <p className={footStyle}>Browse Comics</p>
          <p className={footStyle}>Popular</p>
          <p className={footStyle}>Newest</p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-base text-neutral font-semibold">Community</h6>
          <p className={footStyle}>About Us</p>
          <p className={footStyle}>Help Center</p>
          <p className={footStyle}>FAQ</p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-base text-neutral font-semibold">Legal</h6>
          <p className={footStyle}>Terms of Service</p>
          <p className={footStyle}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import enegylogo from "../assets/energylogo.jpg";
import ace from "../assets/aceelogo.jpg";
import impel from "../assets/impellogo.png";
import nust from "../assets/nust.jpeg";
import tennes from "../assets/tennes.jpeg";
import heatpump from "../assets/heatpump.jpg";
import aok from "../assets/aok.jpeg";
import bredsesen from "../assets/bredesen.jpeg";

const logos = [enegylogo, ace, impel, nust, tennes, heatpump, aok, bredsesen];

const Featuredby = () => {
  return (
    <div>
      <div className="p-3">
        <h1 className="lg:text-[60px] text-[30px] font-bold text-primary text-center">
          Featured By
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-[80px] p-5">
          {logos.map((logo, index) => (
            <div key={index} className="p-2">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-center p-5 text-[30px] text-primary font-bold bg-secondary">
        Get in Touch
      </h3>
      <div className="flex justify-center gap-4 p-3 text-[24px] text-primary bg-secondary">
        <a href="https://www.facebook.com/sarasultanaqib"><FaFacebookF /></a>
        <a href=""><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/sarasultanaqib"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/sarasultanaqib"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Featuredby;

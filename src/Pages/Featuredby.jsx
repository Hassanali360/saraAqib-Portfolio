import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import enegylogo from "../assets/energylogo.jpg";
import ace from "../assets/aceelogo.jpg";
import impel from "../assets/impellogo.png"
const Featuredby = () => {
  return (
    <div>
      <div className="bg-secondary p-3">
        <h1 className="lg:text-[60px] text-[30px] font-bold text-primary text-center">
          Featured By
        </h1>
        <div className="flex justify-evenly p-5 flex-wrap items-center gap-4">
          {/* Logo 1 with background matched to blend */}
          <div className="bg-[#a3d5c3] p-4">
            <img
              src={enegylogo}
              alt="Logo"
              className="bg-[#a3d5c3] p-2 w-24 h-24 object-contain"
            />
          </div>

          {/* Placeholder logos */}
          <div className="bg-[#a3d5c3] p-4">
            <img
              src={ace}
              alt="Logo"
              className="bg-[#a3d5c3] p-2 w-24 h-24 object-contain"
            />
          </div>
          <div className="bg-[#a3d5c3] p-4">
            <img
              src={impel}
              alt="Logo"
              className="bg-[#a3d5c3] p-2 w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>

      <h3 className="text-center p-5 text-[30px] text-primary font-bold">
        Get in Touch
      </h3>
      <div className="flex justify-center gap-4 p-3 text-[24px] text-primary">
        <div><a href=""><FaFacebookF /></a></div>
        <div><FaTwitter /></div>
        <div><a href="https://www.linkedin.com/in/sarasultanaqib"><FaLinkedinIn /></a></div>
        <div><FaInstagram /></div>
      </div>
    </div>
  );
};

export default Featuredby;

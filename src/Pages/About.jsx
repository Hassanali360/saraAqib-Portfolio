import aboutimg from "../assets/About.JPG";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around px-4 py-10">
      
      {/* Left Side - Image (Only visible on md and above) */}
      <div className="hidden md:block">
        <img
          src={aboutimg}
          width={500}
          height={300}
          className="rounded-lg object-cover"
          alt="About Section"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-[40px] md:text-[60px] font-bold text-primary">About Me</h1>

        <p className="text-[16px] md:text-[18px] text-gray-800">
          I hold a <span className="text-primary font-bold">Ph.D. in Energy Sciences</span> with a minor in Energy Leadership, focusing on clean energy solutions that bridge research, policy, and business. My goal is to lead transformative initiatives that benefit both <span className="text-primary font-bold">people and the planet.</span>
          <br /><br />
          I mentor future innovators, collaborate across disciplines, and bring expertise in decarbonization, phase change materials, and smart energy systems.
          <br /><br />
          I also specialize in science communication, public speaking, and leadership, with honors like <span className="text-primary font-bold"> UTK "40 Under 40" and ACEEE Linda Latham Scholar.</span>  
        </p>

        <button
          onClick={() => navigate("/portfolio")}
          className="px-[30px] py-2 bg-primary text-white rounded-lg font-bold text-[18px] hover:bg-slate-400"
        >
          Visit My Portfolio
        </button>
      </div>
    </div>
  );
};

export default About;

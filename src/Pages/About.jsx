import aboutimg from "../assets/about.JPG";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around px-4 py-10">
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
         I led projects and multidisciplinary teams at  <span className="text-primary font-bold"> Oak Ridge National Laboratory and California Energy Commission</span> where I focused on clean energy solutions for sustainable buildings to bridge research, with policy and market transformation. I graduated with distinction from my <span className="text-primary font-bold">Ph.D. in Energy Sciences and Engineering</span>
          <br /><br />
           with minor in Entrepreneurship, Policy and Science Writing. 
My goal is to lead impactful initiatives that benefit both people and the planet.

          <br /><br />I found my passion in <span className="text-primary font-bold">mentoring and storytelling</span> which led me to start my blog on intentional living, a coaching academy, a podcast and personal brand. I mentor future innovators and scientists, collaborate across disciplines, and translate the impact through creative videos, sustainable products, and policy advocacy. 

<br />As a public speaker, and leader, I have been named <span className="text-primary font-bold"> UTK "40 Under 40" and ACEEE Linda Latham Scholar. </span>   I have also received the highest priority extraordinary ability Einstein visa; EB1A.</p>

        <button
          onClick={() => navigate("/portfolio")}
          className="px-[30px] py-2 bg-primary text-white rounded-lg font-bold text-[18px] hover:bg-secondary"
        >
          Visit My Portfolio
        </button>
      </div>
    </div>
  );
};

export default About;

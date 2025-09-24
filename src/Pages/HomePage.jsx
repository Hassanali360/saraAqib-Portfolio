import React from 'react';
import heroimg from "../assets/hero-sec.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen relative">

      {/* Small devices background image with overlay */}
      <div className="md:hidden absolute inset-0">
        <img
          src={heroimg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center min-h-screen px-4 relative z-10">

        {/* Left Side - Text Section */}
        <div className="flex flex-col justify-center items-center space-y-4 w-full md:w-1/2 text-white md:text-black text-center md:text-left">
          <h1 className="text-[40px] md:text-[60px] font-bold text-primary">Sara Sultan</h1>
          <div className="text-secondary text-[20px] md:text-[25px]">
           Sustainability | Creative Storytelling | Leadership
          </div>

          <p className='text-[16px] md:text-[18px] px-2 md:px-0 text-center'>
           I am a passionate Sustainability Scientist and Manager with a strong background in creative direction, storytelling, and environmental impact.
          </p>

          <div className='mt-4 md:flex md:gap-4'>
            <button  className='px-[30px] py-2 bg-primary text-white rounded-lg font-bold text-[18px] hover:bg-secondary'>
              <a href="https://topmate.io/sarasultanaqib">Book a Coffee Chat</a>
            </button>
          </div>
        </div>

        {/* Right Side - Image only visible on md and above */}
        <div className="hidden md:block">
          <img
            src={heroimg}
            width={500}
            height={500}
            className="rounded-lg object-cover"
            alt="Hero Section"
          />
        </div>

      </div>
    </div>
  );
};

export default HomePage;

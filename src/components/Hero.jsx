import React from "react";
import { Link } from "react-router-dom";
import PinkToOrange from "./Buttons/PinkToOrange";
import OrangeOutline from "./Buttons/OrangeOutline";

const Hero = () => {
  return (
    <div className="min-h-screen w-3/4 mx-auto pt-16 ">
      <h1 className="text-5xl  font-extrabold text-center capitalize p-2  leading-normal bg-maingrad">
        <span>Convert your </span>
        <span
          className=" text-orange-500"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)",
          }}
        >
          code{" "}
        </span>
        <span>Into</span> <br />
        <span>Great </span>
        <span
          className=" text-orange-500"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)",
          }}
        >
          Images!
        </span>
      </h1>
        <div className="flex gap-4 items-center justify-center mt-4">
        <OrangeOutline text="Explore More" link={"/"}/>  
        <PinkToOrange text="Get Started"  link={"/workstation"}/>
        </div>
    </div>
  );
};

export default Hero;

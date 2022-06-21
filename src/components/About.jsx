import React from "react";
import men from "../assets/men.svg";

const About = () => {
  return (
    <div class="hero min-h-screen w-4/5 mx-auto">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={men} class=" rounded-lg shadow-2xl w-96" />
        <div>
          <h1 class="text-5xl font-bold">About Me</h1>
          <p class="py-6">
            Hello! I'm Mohammed Shojib, a passionate Web developer.My core skill
            is based on JavaScript and I love to do most of the things using
            JavaScript & ReactJS. I love to make the web more open to the world.
            I am available for any kind of job opportunity that suits my
            interests.
          </p>
          <button class="btn btn-primary text-gray-200">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;

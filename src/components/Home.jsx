import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../App";

const Home = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">
            Hy! I Am <span>Shojib</span>
          </h1>
          <p class="py-6">A passionated Full stack web developer.</p>
          <a
            href="https://drive.google.com/file/d/13c29vCC4tJBOmlVSdHN4_4XCHEn7k3-a/view?usp=sharing"
            class="btn btn-primary text-gray-200"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

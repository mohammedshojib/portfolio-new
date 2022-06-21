import React, { useContext } from "react";
import { ProjectContext } from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  const [projects, setProjects] = useContext(ProjectContext);

  return (
    <>
      <Home />
      <About />
      <Skills />
      <div id="project" className="text-center mt-10">
        <h4 className="text-4xl font-bold mt-10 mb-10">Projects</h4>
        <div className="grid w-4/5 m-auto gap-5 grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => (
            <Projects key={project._id} project={project} />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default HomePage;

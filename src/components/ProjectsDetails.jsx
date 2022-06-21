import React, { useContext, useState } from "react";
import { ProjectContext } from "../App";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const [projects] = useContext(ProjectContext);
  const { id } = useParams();
  const project = projects.find((project) => project._id == id);
  const [imgUrl, setImgurl] = useState(project.imageURL);

  const seturl = (url) => {
    setImgurl(url);
  };
  return (
    <div class="hero min-h-screen w-4/5 mx-auto">
      <div class="hero-content flex-col lg:flex-row">
        <div className="w-full lg:w-6/12 mr-0 lg:mr-5">
          <img src={imgUrl} class=" rounded-lg shadow-2xl w-full" />
          <div className="flex items-center justify-between">
            <div className="mt-2" style={{ width: "100px" }}>
              <img
                src={project.imageURL}
                onClick={() => seturl(project.imageURL)}
                class="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="mt-2 ms-5" style={{ width: "100px" }}>
              <img
                src={project.imageURL2}
                onClick={() => seturl(project.imageURL2)}
                class="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="mt-2 ms-5" style={{ width: "100px" }}>
              <img
                src={project.imageURL3}
                onClick={() => seturl(project.imageURL3)}
                class="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 ml-0 lg:ml-5">
          <h1 class="text-5xl font-bold">{project.title}</h1>
          <p class="py-6">{project.details}</p>
          <p class="py-6">Build with: {project.build}</p>
          <div>
            <a href={project.liveURL} class="btn btn-primary text-gray-200">
              Preview
            </a>
            <a
              href={project.client}
              class="px-3 py-2.5 hover:bg-primary font-bold rounded-lg border-2 border-primary text-gray-200 ml-2"
            >
              Client
            </a>
            <a
              href={project.server}
              class="px-3 py-2.5 hover:bg-primary font-bold rounded-lg border-2 border-primary text-gray-200 ml-2"
            >
              Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;

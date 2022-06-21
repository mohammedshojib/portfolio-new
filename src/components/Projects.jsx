import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div class="card w-90 bg-gray-700 shadow-xl">
      <figure class="px-5 pt-5">
        <img src={project.imageURL} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{project.title}</h2>
        <p>Build with: {project.build}</p>
        <div class="card-actions">
          <button
            onClick={() => navigate(`/project/${project._id}`)}
            class="btn btn-primary"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

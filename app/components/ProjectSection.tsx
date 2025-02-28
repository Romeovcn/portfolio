import React, { useState } from "react";
import ProjectWildcard from "./ProjectWildcard";
import CurrentProject from "./CurrentProject";
import projects from "/projects.json";
import { Project } from "../types/Project";

const ProjectSection: React.FunctionComponent = ({}) => {
  const [showProjectModal, setShowProjectModal] = React.useState<boolean>(false);
  const [currentProject, setCurrentProject] = React.useState<Project>(projects[0]);

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <CurrentProject
        project={currentProject}
        showProjectModal={showProjectModal}
        setShowProjectModal={setShowProjectModal}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          showProjectModal && "pointer-events-none"
        }`}>
        {projects.map((project: Project, index: number) => (
          <ProjectWildcard
            key={`index-${project.name}`}
            index={index}
            project={project}
            showProjectModal={showProjectModal}
            setShowProjectModal={setShowProjectModal}
            setCurrentProject={setCurrentProject}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

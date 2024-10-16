"use client";
import React, { useEffect, useRef, useState } from "react";
import { Project } from "../types/Project";

interface MyComponentProps {
  index: number;
  project: Project;
  showProjectModal: boolean;
  setShowProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentProject: React.Dispatch<React.SetStateAction<Project>>;
}

const ProjectWildcard: React.FunctionComponent<MyComponentProps> = ({
  index,
  project,
  showProjectModal,
  setShowProjectModal,
  setCurrentProject,
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const divRef = useRef(null);

  useEffect(() => {
    if (showProjectModal && divRef.current) {
      setTimeout(() => {
        divRef.current.classList.add("translate-x-full");
      }, index * 50);
    } else if (!showProjectModal && divRef.current) {
      divRef.current.classList.remove("translate-x-full");
    }
  }, [showProjectModal]);

  const handleClick = () => {
    if (!showProjectModal) {
      setCurrentProject(project);
      setShowProjectModal(true);
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-5 transition-all duration-500 cursor-pointer bg-black">
      <div className="w-full h-[1px] bg-slate-700" />
      <div className="grid grid-cols-10 justify-between items-center">
        <div
          className={`col-span-4 transition-all duration-300 ease-in-out ${
            isHovered && !showProjectModal && "pl-8"
          }`}>
          <h2 className="text-[64px] font-[700] uppercase">{project.name}</h2>
        </div>
        <span
          className={`col-start-6 text-[22px] ${
            isHovered && !showProjectModal ? "text-white" : "text-slate-700"
          }`}>
          View project
        </span>
        <span className="col-start-8 col-span-3 text-[22px] text-right">
          {project.technologies}
        </span>
      </div>
    </div>
  );
};

export default ProjectWildcard;

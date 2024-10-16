"use client";
import React from "react";
import { Project } from "../types/Project";

interface MyComponentProps {
  project: Project;
  showProjectModal: boolean;
  setShowProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentProject: React.FunctionComponent<MyComponentProps> = ({
  project,
  showProjectModal,
  setShowProjectModal,
}) => {
  return (
    <div
      onClick={() => setShowProjectModal(false)}
      className={`flex w-screen h-[1080px] text-[64px] font-500 transition-all duration-500 ${
        showProjectModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <h2 className="uppercase">{project.name}</h2>
    </div>
  );
};

export default CurrentProject;

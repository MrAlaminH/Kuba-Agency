import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Recent Works
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project1.jpg"
          title="Modern Next.js Portfolio"
          description="2D dark line drawing, A young Pakistani man with his family, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing"
        />
        <ProjectCard
          src="/project2.jpg"
          title="Interactive Website Cards"
          description="full bright moon in a mountain area, digital arts, comics, fantasy, highly detail color drawing"
        />
        <ProjectCard
          src="/project3.jpg"
          title="Golden Aged Themed Website"
          description="2D dark line drawing, an 18th century many pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing"
        />
      </div>
    </div>
  );
};

export default Projects;

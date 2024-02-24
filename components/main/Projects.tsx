
"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [displayedProjects, setDisplayedProjects] = useState(6); // Initial number of projects to display
  const [showLoadMore, setShowLoadMore] = useState(true);

  const projectsData = [
  {  src: "/project1.jpg",
    title: "Modern Next.js Portfolio",
    description:
      "2D dark line drawing, A young Pakistani man with his family, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Graphics Design", "SMM"],
  },
  {
    src: "/project2.jpg",
    title: "Interactive Website Cards",
    description:
      "full bright moon in a mountain area, digital arts, comics, fantasy, highly detail color drawing",
    categories: ["Graphics Design"],
  },
  {
    src: "/project3.jpg",
    title: "Golden Aged Themed Website",
    description:
      "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Graphics Design"],
  },
  {
    src: "/work2.png",
    title: "Golden Aged Themed Website",
    description:
      "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Web Development" ],
  },
  {
    src: "/work1.png",
    title: "Golden Aged Themed Website",
    description:
      "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Web Development" ],
  },
  {
    src: "/work2.png",
    title: "Golden Aged Themed Website",
    description:
      "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Web Development"],
  },
  {
    src: "/work2.png",
    title: "Golden Aged Themed Website",
    description:
      "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Web Development"],
  },
  {
    src: "/work2.png",
    title: "Golden Aged Themed Website",
    description:
      "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
    categories: ["Web Development"],
  },
  // Add more projects with categories as needed
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  const loadMoreProjects = () => {
    const newDisplayedProjects = displayedProjects + 3;
    setDisplayedProjects(newDisplayedProjects);

    // Check if there are more projects to show
    setShowLoadMore(newDisplayedProjects < filteredProjects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text text-yellow-400 py-20">
        Our Recent Works
      </h1>
      <div className="filter-buttons flex flex-wrap justify-center gap-2">
        {["ALL", "Web Development", "SMM", "Graphics Design", "Video Editing"].map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`filter-btn ${selectedCategory === category && "active"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        {filteredProjects.slice(0, displayedProjects).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      {showLoadMore && (
        <div className="mt-4">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={loadMoreProjects}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;


"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [displayedProjects, setDisplayedProjects] = useState(6); // Initial number of projects to display
  const [showLoadMore, setShowLoadMore] = useState(true);

  const projectsData = [
    {
      src: "/slider4.png",
      title: "Gym Website Showcase",
      description:
        "Check out this sleek gym website example designed to inspire fitness enthusiasts. It features modern design elements and interactive features to engage users and promote a healthy lifestyle.",
      categories: ["Graphics Design", "SMM"],
    },
    {
      src: "/slider2.png",
      title: "Real Estate Website Demo",
      description:
        "Explore this sophisticated real estate website example, showcasing stunning properties and intuitive search functionalities. It offers a seamless user experience for property buyers and sellers alike.",
      categories: ["Graphics Design"],
    },
    {
      src: "/slider1.png",
      title: "Crypto Website Preview",
      description:
        "Dive into this dynamic crypto website example, highlighting the latest trends and insights in the cryptocurrency world. It provides valuable resources and tools for both novice and experienced traders.",
      categories: ["Graphics Design"],
    },
    {
      src: "/slider6.png",
      title: "Car Detailing Website Demo",
      description:
        "Experience this professional car detailing website example, featuring high-resolution images and informative content to showcase the quality of services offered. It's designed to attract car enthusiasts and detail-oriented customers.",
      categories: ["Web Development"],
    },
    {
      src: "/work1.png",
      title: "Travel Website Preview",
      description:
        "Embark on a journey with this captivating travel website example, offering enticing destinations and travel tips. It's designed to inspire wanderlust and facilitate seamless trip planning for adventurers.",
      categories: ["Web Development"],
    },
    {
      src: "/slider3.png",
      title: "Luxury Real Estate Website Demo",
      description:
        "Step into the world of luxury with this real estate website example, featuring exquisite properties and immersive virtual tours. It caters to high-end clientele seeking premium real estate options.",
      categories: ["Web Development"],
    },
    {
      src: "/slider5.png",
      title: "Adventure Travel Website Preview",
      description:
        "Get ready for an adventure with this exciting travel website example, showcasing adrenaline-pumping activities and off-the-beaten-path destinations. It's designed for thrill-seekers and explorers.",
      categories: ["Web Development"],
    },
    {
      src: "/work2.png",
      title: "Crypto Investment Website Preview",
      description:
        "Explore potential opportunities in the world of cryptocurrency with this informative investment website example. It provides valuable insights and analysis to help users make informed investment decisions.",
      categories: ["Web Development"],
    }
    
    
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
      <h1 className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 py-20">
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

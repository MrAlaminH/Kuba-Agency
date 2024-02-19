
// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         Our Recent Works
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         <ProjectCard
//           src="/project1.jpg"
//           title="Modern Next.js Portfolio"
//           description="2D dark line drawing, A young Pakistani man with his family, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing"
//         />
//         <ProjectCard
//           src="/project2.jpg"
//           title="Interactive Website Cards"
//           description="full bright moon in a mountain area, digital arts, comics, fantasy, highly detail color drawing"
//         />
//         <ProjectCard
//           src="/project3.jpg"
//           title="Golden Aged Themed Website"
//           description="2D dark line drawing, an 18th century many pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing"
//         />
//       </div>
//       <br /><br />
//       <div className=" h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         <ProjectCard
//           src="/work1.png"
//           title="Modern Next.js Portfolio"
//           description="2D dark line drawing, A young Pakistani man with his family, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing"
//         />
//         <ProjectCard
//           src="/work2.png"
//           title="Interactive Website Cards"
//           description="full bright moon in a mountain area, digital arts, comics, fantasy, highly detail color drawing"
//         />
//         <ProjectCard
//           src="/work1.png"
//           title="Golden Aged Themed Website"
//           description="2D dark line drawing, an 18th century many pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const projectsData = [
    {
      src: "/project1.jpg",
      title: "Modern Next.js Portfolio",
      description:
        "2D dark line drawing, A young Pakistani man with his family, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
      categories: ["nextjs", "CSS", "TSX"],
    },
    {
      src: "/project2.jpg",
      title: "Interactive Website Cards",
      description:
        "full bright moon in a mountain area, digital arts, comics, fantasy, highly detail color drawing",
      categories: ["CSS", "Heda"],
    },
    {
      src: "/project3.jpg",
      title: "Golden Aged Themed Website",
      description:
        "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
      categories: ["nextjs", "TSX"],
    },
    
    {
      src: "/work2.png",
      title: "Golden Aged Themed Website",
      description:
        "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
      categories: ["nextjs", "TSX"],
    },
    {
      src: "/work1.png",
      title: "Golden Aged Themed Website",
      description:
        "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
      categories: ["nextjs", "TSX"],
    },
    {
      src: "/work2.png",
      title: "Golden Aged Themed Website",
      description:
        "2D dark line drawing, an 18th century many Pakistani people in a gathering, Cinematic, comic art, digital arts, fantasy, highly detailed colored drawing",
      categories: ["nextjs", "TSX", "Heda"],
    },
    // Add more projects with categories as needed
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Recent Works
      </h1>
      <div className="filter-buttons flex flex-wrap justify-center gap-2">
        {["ALL", "nextjs", "CSS", "TSX", "Heda"].map((category, index) => (
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
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;


import { useState } from "react";
import Introduction from "../components/pragraphs/Introduction";
import ProjectCard from "../components/Cards/ProjectCard";

export default function MyProject() {
  // Projects Data
  const projectsData = [
    {
      title: "Name project [1]",
      image: "./images/",
      description:
        "Name project[1]: is an AI-powered chatbot designed to automate customer service tasks and improve response times. It integrates seamlessly with messaging platforms to provide 24/7 support.",
      skills: ["AI", "Chatbot", "Automation"],
    },
    {
      title: "Name project [2]",
      image: "./images/",
      description:
        "Name project[2]: is a mobile app that digitizes traditional debt recording for small businesses, enabling secure and private delayed payments through a digital card. It promotes transparency, trust, and financial literacy with features for savings, investment, and community funds.",
      skills: ["Project Management", "ERP", "Financial Tech", "Solution Architecture"],
    },
    {
      title: "Name project [3]",
      image: "./images/",
      description:
        "Name project [3]: is a digital platform that provides crowdfunding and community-driven financial support for small businesses. It fosters growth, transparency, and collaboration between users.",
      skills: ["Crowdfunding", "FinTech", "Community Growth"],
    },
    {
      title: "Name project [4]",
      image: "./images/",
      description:
        "Name project [4]: is a digital platform that provides crowdfunding and community-driven financial support for small businesses. It fosters growth, transparency, and collaboration between users.",
      skills: ["Crowdfunding", "FinTech", "Community Growth"],
    },
    {
      title: "Name project [5]",
      image: "./images/",
      description:
        "Name project [5]: is a digital platform that provides crowdfunding and community-driven financial support for small businesses. It fosters growth, transparency, and collaboration between users.",
      skills: ["Crowdfunding", "FinTech", "Community Growth"],
    },
  ];

  const [current, setCurrent] = useState(1); // Default on Last Project added

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <>
      <Introduction  
          section={"MyProjects"} 
          title={"My Projects"} 
          subTitle={"I present to you a group of the most prominent projects that I have implemented recently."} 
      />

      <div className={"carousel-projects"}>
        <button onClick={prevProject} className={"arrow"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <path  d="M328 112L184 256l144 144" />
          </svg>
        </button>

        {/* Cards Container */}
          <div className="Container-Cards">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                active={index === current}
              />
            ))}
          </div>

        <button onClick={nextProject} className={"arrow"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <path d="M184 112l144 144-144 144" />
          </svg>
        </button>
      </div>

      {/* Description */}
      <div className="description">
        <h3>{projectsData[current].title}</h3>
        <p>{projectsData[current].description}</p>
        <br />
        <p>
          <span className="highlight">Skills:</span>{" "}
          {projectsData[current].skills.join(", ")}
        </p>
      </div>
    </>
  )
}

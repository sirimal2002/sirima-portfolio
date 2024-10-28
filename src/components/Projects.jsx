/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image - Always visible */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Basic Info - Always visible */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-750 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <button
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Preview of description - Always visible */}
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies - Always visible */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0">
          {/* Additional project details */}
          <div className="border-t border-gray-700 pt-4 mt-4">
            <h4 className="text-white font-semibold mb-3">Project Details</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-gray-300 font-medium mb-2">Features:</h5>
                <ul className="list-disc list-inside text-gray-400">
                  {project.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) || (
                    <>
                      <li>Responsive design for all devices</li>
                      <li>User authentication and authorization</li>
                      <li>Real-time data updates</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h5 className="text-gray-300 font-medium mb-2">Links:</h5>
                <div className="flex gap-4">
                  <a
                    href={project.github || "#"}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                  <a
                    href={project.demo || "#"}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {project.challenges && (
                <div>
                  <h5 className="text-gray-300 font-medium mb-2">
                    Challenges & Solutions:
                  </h5>
                  <p className="text-gray-400">{project.challenges}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React and Node.js. Implemented features including product catalog, shopping cart, user authentication, and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "../../src/assets/free-bg-1.png",
      features: [
        "User authentication and profile management",
        "Product search and filtering",
        "Shopping cart and checkout process",
        "Order tracking and history",
      ],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-demo-link.com",
      challenges:
        "Implemented real-time inventory tracking while handling concurrent transactions. Solved using MongoDB transactions and WebSocket updates.",
    },
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates and team collaboration features.",
    //   tech: ["React", "Firebase", "Material-UI"],
    //   image: "/api/placeholder/400/301",
    //   features: [
    //     "Real-time task updates",
    //     "Team collaboration tools",
    //     "File attachments",
    //     "Progress tracking",
    //   ],
    //   github: "https://github.com/yourusername/task-manager",
    //   demo: "https://your-demo-link.com",
    //   challenges:
    //     "Managed complex state synchronization across multiple users. Implemented optimistic updates for better UX.",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "Real-time weather tracking application with historical data visualization and location-based forecasting.",
    //   tech: ["React", "OpenWeather API", "ChartJS"],
    //   image: "/api/placeholder/400/302",
    //   features: [
    //     "5-day weather forecast",
    //     "Historical weather data",
    //     "Location-based updates",
    //     "Interactive weather maps",
    //   ],
    //   github: "https://github.com/yourusername/weather-app",
    //   demo: "https://your-demo-link.com",
    //   challenges:
    //     "Optimized API calls to stay within rate limits while providing real-time updates. Implemented client-side caching.",
    // },
  ];

  return (
    <div className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

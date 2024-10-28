/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
      {/* Main Image */}
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].caption}
        className="w-full h-full object-cover"
      />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <p className="text-sm md:text-base">{images[currentIndex].caption}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300">
      {/* Header - Always visible */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 cursor-pointer hover:bg-gray-750 transition-colors"
      >
        <div className="flex justify-between items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
              {experience.type}
            </span>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-gray-400">{experience.organization}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">{experience.date}</span>
            {isExpanded ? (
              <ChevronUp className="text-gray-400" size={24} />
            ) : (
              <ChevronDown className="text-gray-400" size={24} />
            )}
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0">
          {/* Photo Carousel */}
          {experience.images && experience.images.length > 0 && (
            <div className="mb-6">
              <Carousel images={experience.images} />
            </div>
          )}

          <p className="text-gray-300 mb-4">{experience.description}</p>

          {/* Skills Section */}
          {experience.skills && (
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Skills Gained:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {experience.achievements && (
            <div>
              <h4 className="text-white font-semibold mb-2"> Achievements:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="mb-1">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      type: "Work",
      title: "Software Engineer",
      organization: "SIAM COMMERCIAL BANK, BANGKOK, THAILAND",
      date: "Feb 2024 - Present",
      skills: ["Java", "Golang", "React", "SQL", "Azure"],
      achievements: [
        "Designed and implemented data transformation and loading processes based on business requirements using Java Spring Boot.",
        "Refined and fixed front-end issues using React in an internal project, used by all company branches to generate and submit reports to the government.",
        "Developed back-end services for a unified request platform using Golang, centralizing all requests into a single service.",
        "Collaborated with outsourced teams to prepare and provide data for web interfaces.",
        "Prepared comprehensive deployment documentation for the project during its go-live phase.",
      ],
      images: [
        {
          url: "../../src/assets/free-bg-1.png",
          caption: "Working with team during final project presentation",
        },
        {
          url: "../../src/assets/free-bg-2.png",
          caption: "Participating in a coding workshop",
        },
      ],
    },
    {
      type: "Bootcamp",
      title: "Web Development Bootcamp",
      organization: "Skooldio",
      date: "Jan 2024 - March 2024",
      description: "Intensive 12-week program focusing on web development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Figma"],
      achievements: [
        "Developed a project e-commerce shop",
        "Collaborated with team of 3 on final project",
      ],
      images: [
        {
          url: "../../src/assets/free-bg-1.png",
          caption: "Working with team during final project presentation",
        },
        {
          url: "../../src/assets/free-bg-2.png",
          caption: "Participating in a coding workshop",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">
          Experience & Training
        </h2>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

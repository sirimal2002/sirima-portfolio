import { motion } from "framer-motion";
import Avatar from "../../src/assets/me1.jpg";

const BioSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Photo Section */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.div
              className="absolute inset-0 border-4 border-blue-500 rounded-lg transform rotate-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-lg border-4 border-white">
              <img
                src={Avatar}
                alt="Profile Photo"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Bio Text Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I&apos;m a junior software engineer with a year of experience and a
            background in electrical engineering. Driven With a commitment to
            continuous learning, I enjoy taking on new challenges in the field
            of software development
          </motion.p>

          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I&apos;m excited to expand my knowledge and opportunities to work
            with different tech stacks beyond my current experience a
            collaborative environment where I can learn from experienced
            developers, and Involvement in projects that challenge me to solve
            complex problems and develop new skills.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="/resume.pdf"
              className="text-blue-500 hover:text-blue-400 transition-colors"
              download="Srima's resume"
            >
              <span className="inline-block p-2 border border-blue-500 rounded-full hover:bg-blue-500/10">
                Download CV
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillsGrid = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Golang", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "Postman", "Draw.io", "Figma", "G-suite and MS-suite"],
    },
    {
      title: "Cloud",
      skills: ["Azure Data Factory"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-block px-3 py-1 bg-blue-600 hover:bg-blue-700 
                             text-white text-sm rounded-full transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AboutMe() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <BioSection />

        <SkillsGrid />
      </div>
    </div>
  );
}

/**
 *  SKILLS
 Programming  Languages: Java, Golang, HTML, CSS, JavaScript, SQL and Basic Python
 Tools: Git, Postman, Draw.io, Figma, G-suite and MS-suite
 Cloud: Azure data factory, Azure blob storage
 */

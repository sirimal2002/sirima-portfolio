import { motion } from "framer-motion";
import Avatar from "../../src/assets/me.png";

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
            className="text-2xl font-bold text-white mb-4"
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
            A passionate individual with a love for cooking, gaming, and caring
            for two lovely cats, now eager to explore opportunities in software
            engineering. Through my journey, I`&apos;`ve developed a unique
            perspective that combines creativity with technical expertise.
          </motion.p>

          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            When I`&apos;`m not coding, you can find me experimenting with new
            recipes in the kitchen, exploring virtual worlds through gaming, or
            spending quality time with my feline companions. This diverse range
            of interests helps me maintain a balanced approach to
            problem-solving and creativity in software development.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 transition-colors"
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
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "VS Code", "Jenkins"],
    },
    {
      title: "Cloud",
      skills: ["Azure Data Factory", "AWS", "Google Cloud", "Azure DevOps"],
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

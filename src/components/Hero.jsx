import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          John Doe
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com"
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-gray-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

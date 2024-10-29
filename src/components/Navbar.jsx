import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Home", href: "#hero" },
    { text: "About Me", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#project" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-white">
                My Portfolio
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.text}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;

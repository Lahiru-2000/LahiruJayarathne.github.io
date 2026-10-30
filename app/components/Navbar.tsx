"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js navigation
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close the mobile menu after navigating
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section or navigate if on another page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      // If section exists on the current page, scroll smoothly
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the page with the section
      router.push(`/#${id}`);
    }

    setIsOpen(false); // Close mobile menu on selection
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all z-50 ${
        scrolling ? "bg-gray-900/80 backdrop-blur-lg shadow-md" : "backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 tracking-wider cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-purple-800"
  onClick={() => scrollToSection("home")}
>
  Lahiru
</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-lg">
            <NavLinks scrollToSection={scrollToSection} scrolling={scrolling} />
          </div>

          {/* Desktop "Hire Me" Button */}
          <div className="hidden lg:flex items-center">
            <button
              className="bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              onClick={() => navigateToPage("/hireme")}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 dark:bg-gray-800 transition-all">
          <div className="flex flex-col space-y-4 p-6">
            <NavLinks scrollToSection={scrollToSection} scrolling={scrolling} />
            {/* Mobile "Hire Me" Button */}
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg w-full"
              onClick={() => navigateToPage("/hireme")}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ scrollToSection, scrolling }: { scrollToSection: (id: string) => void, scrolling: boolean }) => {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {links.map(({ name, id }) => (
        <button
          key={id}
          className={`relative font-medium transition hover:text-blue-500 ${
            scrolling ? "text-gray-200" : "text-white"
          }`}
          onClick={() => scrollToSection(id)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default Navbar;

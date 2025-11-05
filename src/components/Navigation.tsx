import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset = 80;
    const elementPosition = targetElement.offsetTop - offset;

    // Enhanced smooth scroll with spring physics
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section with improved detection
      const sections = ["home", "services", "portfolio", "about", "contact"];
      const scrollPosition = window.scrollY + 300;

      // Special case for home section
      const servicesOffset =
        document.getElementById("services")?.offsetTop ??
        Number.POSITIVE_INFINITY;
      if (scrollPosition < servicesOffset) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-white">LAYERS</span>
          <span className="text-[#87CEEB]">.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeSection === link.toLowerCase()
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={(e) => smoothScroll(e, link.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800]"
                initial={{ width: "0%" }}
                animate={{
                  width: activeSection === link.toLowerCase() ? "100%" : "0%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              />
            </motion.a>
          ))}
          <motion.button
            className="px-6 py-2.5 bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,229,127,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        className="md:hidden overflow-hidden bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-gray-800"
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-lg font-medium ${
                activeSection === link.toLowerCase()
                  ? "text-[#FFD700]"
                  : "text-gray-300 hover:text-[#FFD700]"
              } transition-colors`}
              onClick={(e) => {
                smoothScroll(e, link.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
          <motion.button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#FFB800] text-black font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}

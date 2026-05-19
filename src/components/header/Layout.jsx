import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navMenu = [
    { title: "Home", link: "home" },
    { title: "About", link: "about" },
    { title: "Service", link: "service" },
    { title: "Projects", link: "projects" },
    { title: "Contact", link: "contact" },
  ];

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-3xl font-extrabold tracking-wide text-orange-600">
            Bokra
          </h1>
          <p className="text-md text-gray-200 -mt-1 tracking-widest">
            Construction
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navMenu.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-90}
              spy={true}
              activeClass="text-orange-500"
              className="cursor-pointer text-gray-200 font-medium hover:text-orange-500 transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-x-5">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 sm:px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer
            shadow-gray-900 shadow-lg
          ">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-bold text-white cursor-pointer"
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 w-1/2 bg-orange-500 shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-125 py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navMenu.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-lg font-semibold text-white hover:text-orange-500 transition"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

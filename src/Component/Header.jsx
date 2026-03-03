import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import DiGiLogo from "../assets/DiGiLogo.png";

const Logo = () => (
  <img
    src={DiGiLogo}
    alt="DiGi Trend"
    className="h-12 w-auto object-contain transition-all sm:h-14 md:h-16 lg:h-16 xl:h-20"
  />
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [logoOffset, setLogoOffset] = useState(0);

  const dropdownRef = useRef(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setShowHeader(true);
      } else if (currentY > lastScrollYRef.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLogoOffset(Math.sin(currentY / 120) * 6);
      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b bg-white transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 md:py-3 lg:px-8">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={1500}
          easing="easeInOutQuint"
          className="cursor-pointer transition-transform duration-150"
          style={{ transform: `translateY(${logoOffset}px)` }}
        >
          <Logo />
        </ScrollLink>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-xl bg-blue-900 px-4 py-2 font-medium text-white transition-all duration-300"
          >
            Menu
          </button>

          <div
            className={`absolute right-0 mt-3 w-60 rounded-lg border bg-white py-3 shadow-xl transition-all duration-300 ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-95 opacity-0"
            }`}
          >
            <ScrollLink
              to="features"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Benefits
            </ScrollLink>
            <ScrollLink
              to="partners"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Trusted Partners
            </ScrollLink>
            <ScrollLink
              to="design"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Our Design
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="work"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Our Best Work
            </ScrollLink>
            <ScrollLink
              to="review"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Customer Review
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </ScrollLink>
            <ScrollLink
              to="faqs"
              smooth={true}
              duration={1500}
              easing="easeInOutQuint"
              offset={-70}
              className="block cursor-pointer px-5 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              FAQs
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

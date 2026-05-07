import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-outline-variant py-0 text-on-surface"
          : "bg-transparent border-transparent py-2 text-white"
      }`}
    >
      <div className="max-w-container-max mx-auto px-md h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div
            className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-white"} transition-colors duration-500`}
          >
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="font-h3 text-xl font-bold tracking-tight">
            Luna Bistro
          </h2>
        </a>
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className={`font-label-caps uppercase tracking-widest hover:text-secondary transition-colors duration-500 ${isScrolled ? "text-on-surface" : "text-white"}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          variant={isScrolled ? "navScrolled" : "navTransparent"}
          size="small"
          className="font-label-caps uppercase tracking-widest duration-500"
        >
          Book Now
        </Button>
      </div>
    </header>
  );
}

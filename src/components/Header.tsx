import { useEffect, useState } from "react";
import LanguageSelect from "./LanguageSelect";
import ThemeSelect from "./ThemeSelect";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 flex h-16 w-full animate-slide-in-top flex-row items-center px-4 sm:px-8 ${scrollPosition > 0 && "bg-satin-linen-200 shadow-outline dark:bg-comet-800 dark:shadow-comet-100/5"} transition duration-500`}
    >
      <h1 className="text-center font-display text-2xl font-semibold text-satin-linen-800 sm:text-3xl dark:text-comet-200">
        Nuno Alves
      </h1>
      <LanguageSelect className="ml-auto" />
      <ThemeSelect className="sm:ml-3 ml-1" />
    </header>
  );
}

export default Header;

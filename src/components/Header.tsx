import { useEffect, useState } from "react";
import LanguageSelect from "./LanguageSelect";

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
      className={`fixed z-50 flex h-16 w-full animate-slide-in-top flex-row items-center justify-between px-6 sm:px-8 ${scrollPosition > 0 && "bg-satin-linen-200 dark:bg-comet-800 shadow-outline dark:shadow-comet-100/5"} transition duration-500`}
    >
      <h1 className="text-center font-display text-2xl font-semibold text-satin-linen-800 dark:text-comet-200 sm:text-3xl">
        Nuno Alves
      </h1>
      <LanguageSelect />
    </header>
  );
}

export default Header;

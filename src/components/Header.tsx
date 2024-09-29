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
      className={`h-16 z-50 animate-slide-in-top flex flex-row items-center w-full fixed justify-between
                      px-6
                      sm:px-8
                      ${scrollPosition > 0 && "bg-satin-linen-200 shadow"} transition duration-500`}
    >
      <h1
        className="text-2xl font-display font-semibold text-center text-satin-linen-800
                     sm:text-3xl"
      >
        Nuno Alves
      </h1>
      <LanguageSelect />
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <header className={`h-16 flex flex-row items-center w-screen fixed ${scrollPosition > 0 && "bg-satin-linen-200"} transition-colors duration-500`}>
      <h1 className="text-3xl font-display font-semibold text-center text-satin-linen-800 ml-8">
        Nuno Alves
      </h1>
    </header>
  );
}

export default Header;

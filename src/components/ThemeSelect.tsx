import { useEffect } from "react";
import {
  DropdownSelectIconItem,
  IconButtonDropdownSelect,
} from "./DropdownSelect";
import { HiMoon, HiSun } from "react-icons/hi2";
import { MdMonitor } from "react-icons/md";

export default function ThemeSelect({ className }: { className?: string }) {
  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    darkModePreference.addEventListener("change", (e) => {
      toggleDarkMode(e.matches);
    });

    darkModePreference.addListener((e) => {
      toggleDarkMode(e.matches);
    });

    return () => {
      darkModePreference.removeEventListener("change", (e) => {
        toggleDarkMode(e.matches);
      });

      darkModePreference.removeListener((e) => {
        toggleDarkMode(e.matches);
      });
    };
  }, []);

  function toggleDarkMode(isDarkMode: boolean) {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
  }

  return (
    <IconButtonDropdownSelect icon={<HiMoon />} className={className}>
      <DropdownSelectIconItem label="Light" icon={<HiSun />} />
      <DropdownSelectIconItem label="Dark" icon={<HiMoon />} />
      <DropdownSelectIconItem label="System" icon={<MdMonitor />} />
    </IconButtonDropdownSelect>
  );
}

import { useEffect } from "react";
import {
  DropdownSelectIconItem,
  IconButtonDropdownSelect,
} from "./DropdownSelect";
import { HiMoon, HiSun } from "react-icons/hi2";
import { MdMonitor } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function ThemeSelect({ className }: { className?: string }) {
  const { t } = useTranslation();

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
      <DropdownSelectIconItem label={t("settings.theme.light")} icon={<HiSun />} />
      <DropdownSelectIconItem label={t("settings.theme.dark")} icon={<HiMoon />} />
      <DropdownSelectIconItem label={t("settings.theme.system")} icon={<MdMonitor />} />
    </IconButtonDropdownSelect>
  );
}

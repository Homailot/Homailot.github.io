import { useEffect, useState } from "react";
import {
  DropdownSelectIconItem,
  IconButtonDropdownSelect,
} from "./DropdownSelect";
import { HiMoon, HiSun } from "react-icons/hi2";
import { MdMonitor } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "usehooks-ts";

export default function ThemeSelect({ className }: { className?: string }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useLocalStorage("theme", "system");
  const { t } = useTranslation();

  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    setIsDarkMode(darkModePreference.matches);

    darkModePreference.addEventListener("change", onSystemPreferenceChange);
    darkModePreference.addListener(onSystemPreferenceChange);

    return () => {
      darkModePreference.removeEventListener(
        "change",
        onSystemPreferenceChange,
      );
      darkModePreference.removeListener(onSystemPreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (
      selectedTheme === "dark" ||
      (selectedTheme === "system" && isDarkMode)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [selectedTheme, isDarkMode]);

  function onSystemPreferenceChange(preference: MediaQueryListEvent) {
    const isDarkMode = preference.matches;
    setIsDarkMode(isDarkMode);
  }

  const icon =
    selectedTheme === "dark" || (selectedTheme === "system" && isDarkMode) ? (
      <HiMoon />
    ) : (
      <HiSun />
    );

  return (
    <IconButtonDropdownSelect
      icon={icon}
      selectedKey={selectedTheme}
      className={className}
      onSelectionChange={(key) => setSelectedTheme(key as string)}
    >
      <DropdownSelectIconItem
        id="light"
        key="light"
        label={t("settings.theme.light")}
        icon={<HiSun />}
      />
      <DropdownSelectIconItem
        id="dark"
        key="dark"
        label={t("settings.theme.dark")}
        icon={<HiMoon />}
      />
      <DropdownSelectIconItem
        id="system"
        key="system"
        label={t("settings.theme.system")}
        icon={<MdMonitor />}
      />
    </IconButtonDropdownSelect>
  );
}

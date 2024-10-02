import { useTranslation } from "react-i18next";
import {
  DropdownSelectItem,
  IconButtonDropdownSelect,
  TextButtonDropdownSelect,
} from "./DropdownSelect";
import { HiLanguage } from "react-icons/hi2";

export default function LanguageSelect({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const lngs = [
    { id: "en", label: "English" },
    { id: "pt", label: "Português" },
  ];

  return (
    <>
      <TextButtonDropdownSelect
        className={`hidden md:inline-flex ${className}`}
        icon={<HiLanguage />}
        items={lngs}
        selectedKey={currentLanguage}
        onSelectionChange={(lng) => void i18n.changeLanguage(lng as string)}
      >
        {({ label }) => <DropdownSelectItem className="flex" label={label} />}
      </TextButtonDropdownSelect>
      <IconButtonDropdownSelect
        className={`md:hidden ${className}`}
        icon={<HiLanguage />}
        items={lngs}
        selectedKey={currentLanguage}
        onSelectionChange={(lng) => void i18n.changeLanguage(lng as string)}
      >
        {({ label }) => <DropdownSelectItem className="flex" label={label} />}
      </IconButtonDropdownSelect>
    </>
  );
}

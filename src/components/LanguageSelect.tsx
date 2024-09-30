import { useTranslation } from "react-i18next";
import { DropdownSelect, DropdownSelectItem } from "./DropdownSelect";
import { HiLanguage } from "react-icons/hi2";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const lngs = [
    { id: "en", label: "English" },
    { id: "pt", label: "Português" },
  ];

  return (
    <DropdownSelect
      icon={<HiLanguage />}
      items={lngs}
      selectedKey={currentLanguage}
      onSelectionChange={(lng) => void i18n.changeLanguage(lng as string)}
    >
      {({ label }) => <DropdownSelectItem className="flex" label={label} />}
    </DropdownSelect>
  );
}

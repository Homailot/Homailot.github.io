import { useTranslation } from "react-i18next";
import { DropdownSelect } from "./DropdownSelect";
import { ListBoxItem } from "react-aria-components";

export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const lngs = [
        { id: 'en', label: 'English' },
        { id: 'pt', label: 'Português' },
    ]

    return (
        <DropdownSelect 
            items={lngs}
            selectedKey={currentLanguage}
            onSelectionChange={(lng) => i18n.changeLanguage(lng as string)}
            >
            {({label}) => <ListBoxItem>{label}</ListBoxItem>}
        </DropdownSelect>
    );
}
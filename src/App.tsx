import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { I18nProvider } from "react-aria-components";

function App() {
  const { i18n } = useTranslation();

  return (
    <I18nProvider locale={i18n.resolvedLanguage}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </I18nProvider>
  );
}

export default App;

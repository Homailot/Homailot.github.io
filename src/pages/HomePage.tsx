import { Trans, useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return <div className="flex flex-row items-center justify-content-center h-screen min-h-screen bg-satin-linen-50">
    <div className="flex flex-col justify-center items-start w-1/2 bg-satin-linen-100">
      <h1 className="text-7xl font-display font-semibold text-satin-linen-800 ml-8">
        {t("about.greeting")}
      </h1>
      <p className="text-2xl font-body text-satin-linen-800 ml-8">
        <Trans i18nKey="about.part_1" t={t} />
      </p>
      <p className="text-2xl font-body text-satin-linen-800 ml-8">
        {t("about.part_2")}
      </p>
      <p className="text-2xl font-body text-satin-linen-800 ml-8">
        {t("about.part_3")}
      </p>
    </div>
  </div>;
}

export default HomePage;

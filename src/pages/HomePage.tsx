import { Trans, useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return <div className="flex flex-row items-center justify-content-center h-screen min-h-screen bg-satin-linen-50">
    <div className="w-1/2 h-auto bg-satin-linen-100">
      <div className="flex flex-col justify-center items-start  w-[38rem] p-12">
        <h1 className="text-4xl font-display font-semibold text-satin-linen-800 mb-2">
          {t("about.greeting")}
        </h1>
        <p className="text-xl font-body text-satin-linen-800 mb-8 leading-relaxed">
          <Trans i18nKey="about.part_1" t={t} />
        </p>
        <p className="text-xl font-body text-satin-linen-800 mb-8 leading-relaxed">
          {t("about.part_2")}
        </p>
        <p className="text-xl font-body text-satin-linen-800 leading-relaxed">
          {t("about.part_3")}
        </p>
      </div>
    </div>
  </div>;
}

export default HomePage;

import { Trans, useTranslation } from "react-i18next";
import PhotoCard from "../components/PhotoCard";

function HomePage() {
  const { t } = useTranslation();

  return <div className="flex flex-row items-center justify-center py-16 min-h-screen bg-satin-linen-50">
    <div className="w-[45rem] h-auto bg-gradient-horizontal-edges">
      <article className="flex flex-col justify-center items-start m-auto w-[38.5rem] p-12">
        <h1 className="text-4xl font-display font-semibold text-satin-linen-800 mb-2">
          {t("about.greeting")}
        </h1>
        <p className="text-xl font-body text-satin-linen-800 mb-8 leading-9">
          <Trans i18nKey="about.part_1" t={t} />
        </p>
        <p className="text-xl font-body text-satin-linen-800 mb-8 leading-9">
          {t("about.part_2")}
        </p>
        <p className="text-xl font-body text-satin-linen-800 leading-9">
          {t("about.part_3")}
        </p>
      </article>
    </div>
    <div className="relative w-[30rem]">
      <PhotoCard className="absolute rotate-[-5deg] top-[-20rem] left-[-6rem]" photo="cards/card_01.jpg" title="A photo of me" />
      <PhotoCard className="absolute rotate-[6deg] top-[-15rem] left-[10rem]" photo="cards/card_02.jpg" title="A photo of me" />
      <PhotoCard className="absolute rotate-[7.33deg] top-[-3rem] left-[-6rem]" photo="cards/card_03.jpg" title="A photo of me" />
    </div>
  </div>;
}

export default HomePage;

import { Trans, useTranslation } from "react-i18next";
import PhotoCard from "../components/PhotoCard";

function HomePage() {
  const { t } = useTranslation();

  return <div className="flex gap-6 lg:flex-row flex-col-reverse items-center justify-center pt-16 min-h-screen bg-satin-linen-50 overflow-hidden">
    <div className="w-[45rem] h-auto bg-gradient-horizontal-edges lg:animate-slide-in-left animate-slide-in-bottom">
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
    <div className="relative w-[30rem] h-[360px] mt-8 lg:h-auto">
      <PhotoCard className="z-10 animate-[card-drop-1_0.6s_ease-in-out_1.1s_backwards] absolute rotate-[-5deg] lg:top-[-320px] lg:left-[-96px] left-[60px]" photo="cards/card_01.jpg" title="A photo of me" />
      <PhotoCard className="z-20 animate-[card-drop-2_0.6s_ease-in-out_1.6s_backwards] lg:animate-[card-drop-2-lg_0.6s_ease-in-out_1.6s_backwards] absolute lg:rotate-[6deg] rotate-[2.33deg] lg:top-[-240px] lg:left-[160px] left-[350px] lg:bottom-0 bottom-[-50px]" photo="cards/card_02.jpg" title="A photo of me" />
      <PhotoCard className="z-30 animate-[card-drop-3_0.6s_ease-in-out_2.1s_backwards] absolute rotate-[7.33deg] lg:top-[-48px] lg:left-[-96px] left-[-220px]" photo="cards/card_03.jpg" title="A photo of me" />
    </div>
  </div>;
}

export default HomePage;

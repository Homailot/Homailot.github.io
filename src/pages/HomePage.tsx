import { Trans, useTranslation } from "react-i18next";
import PhotoCard from "../components/PhotoCard";

function HomePage() {
  const { t } = useTranslation();

  return <div className="flex gap-6 lg:flex-row flex-col-reverse items-center justify-center pt-16 min-h-screen bg-satin-linen-50 overflow-hidden">
    <div className="w-full h-auto animate-slide-in-bottom bg-satin-linen-100
                    md:w-[45rem] md:bg-gradient-horizontal-edges md:bg-transparent
                    lg:animate-slide-in-left">
      <article className="flex flex-col justify-center items-start m-auto max-w-[38.5rem] px-8 pt-10 pb-8
                          sm:px-12 sm:pt-12 sm:pb-12">
        <h1 className="text-3xl font-display font-semibold text-satin-linen-800 mb-2
                       sm:text-4xl">
          {t("about.greeting")}
        </h1>
        <p className="text-lg font-body text-satin-linen-800 mb-8 leading-8
                      sm:text-xl sm:leading-9">
          <Trans i18nKey="about.part_1" t={t} />
        </p>
        <p className="text-lg font-body text-satin-linen-800 mb-8 leading-8
                      sm:text-xl sm:leading-9">
          {t("about.part_2")}
        </p>
        <p className="text-lg font-body text-satin-linen-800 leading-8
                      sm:text-xl sm:leading-9">
          {t("about.part_3")}
        </p>
      </article>
    </div>
    <div className="relative w-[30rem] h-[360px] mt-8 lg:h-auto">
      <PhotoCard className="z-10 animate-[card-drop-1_0.6s_ease-in-out_1.1s_backwards] absolute rotate-[-5deg] left-[60px]
                            lg:top-[-320px] lg:left-[-96px]" photo="cards/card_01.jpg" title="A photo of me" />
      <PhotoCard className="z-20 animate-[card-drop-2_0.6s_ease-in-out_1.6s_backwards] absolute rotate-[2.33deg] left-[350px] bottom-[-50px]
                            lg:animate-[card-drop-2-lg_0.6s_ease-in-out_1.6s_backwards] lg:rotate-[6deg] lg:top-[-240px] lg:left-[160px] lg:bottom-0" photo="cards/card_02.jpg" title="A photo of me" />
      <PhotoCard className="z-30 animate-[card-drop-3_0.6s_ease-in-out_2.1s_backwards] absolute rotate-[7.33deg] left-[-220px]
                            lg:top-[-48px] lg:left-[-96px]" photo="cards/card_03.jpg" title="A photo of me" />
    </div>
  </div>;
}

export default HomePage;

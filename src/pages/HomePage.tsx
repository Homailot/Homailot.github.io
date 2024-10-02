import { Trans, useTranslation } from "react-i18next";
import PhotoCard from "../components/PhotoCard";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-4 overflow-hidden bg-satin-linen-50 pt-16 lg:flex-row dark:bg-comet-950">
      <div className="md:bg-gradient-horizontal-edges h-auto w-full animate-slide-in-bottom md:w-[45rem] md:bg-transparent lg:animate-slide-in-left">
        <article className="m-auto flex max-w-[38.5rem] flex-col items-start justify-center px-8 pb-8 pt-10 sm:px-12 sm:pb-12 sm:pt-12">
          <h1 className="mb-2 font-display text-3xl font-semibold text-satin-linen-800 sm:text-4xl dark:text-comet-100">
            {t("about.greeting")}
          </h1>
          <p className="mb-8 font-body text-lg leading-8 text-satin-linen-800 sm:text-xl sm:leading-9 dark:text-comet-200">
            <Trans i18nKey="about.part_1" t={t} />
          </p>
          <p className="mb-8 font-body text-lg leading-8 text-satin-linen-800 sm:text-xl sm:leading-9 dark:text-comet-200">
            {t("about.part_2")}
          </p>
          <p className="font-body text-lg leading-8 text-satin-linen-800 sm:text-xl sm:leading-9 dark:text-comet-200">
            {t("about.part_3")}
          </p>
        </article>
      </div>
      <div className="relative mt-8 h-[360px] w-[30rem] lg:h-auto">
        <PhotoCard
          className="absolute left-[60px] z-10 rotate-[-5deg] animate-[card-drop-1_0.6s_ease-in-out_1.1s_backwards] lg:left-[-66px] lg:top-[-320px]"
          photo="cards/card_01.jpg"
          title="A photo of me"
        />
        <PhotoCard
          className="absolute bottom-[-50px] left-[350px] z-20 rotate-[2.33deg] animate-[card-drop-2_0.6s_ease-in-out_1.6s_backwards] lg:bottom-0 lg:left-[160px] lg:top-[-240px] lg:rotate-[6deg] lg:animate-[card-drop-2-lg_0.6s_ease-in-out_1.6s_backwards]"
          photo="cards/card_02.jpg"
          title="A photo of me"
        />
        <PhotoCard
          className="absolute left-[-220px] z-30 rotate-[7.33deg] animate-[card-drop-3_0.6s_ease-in-out_2.1s_backwards] lg:left-[-66px] lg:top-[-48px]"
          photo="cards/card_03.jpg"
          title="A photo of me"
        />
      </div>
    </div>
  );
}

export default HomePage;

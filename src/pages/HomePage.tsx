import { Trans, useTranslation } from "react-i18next";
import PhotoCard from "../components/PhotoCard";

function HomePage() {
  const { t } = useTranslation();

  return <div className="flex gap-6 flex-row items-center justify-center pt-16 min-h-screen bg-satin-linen-50 overflow-hidden">
    <div className="w-[45rem] h-auto bg-gradient-horizontal-edges animate-slide-in-left">
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
      <PhotoCard className="z-10 animate-[card-drop-1_0.6s_ease-in-out_1.1s_backwards] absolute rotate-[-5deg] top-[-20rem] left-[-6rem]" photo="cards/card_01.jpg" title="A photo of me" />
      <PhotoCard className="z-20 animate-[card-drop-2_0.6s_ease-in-out_1.6s_backwards] absolute rotate-[6deg] top-[-15rem] left-[10rem]" photo="cards/card_02.jpg" title="A photo of me" />
      <PhotoCard className="z-30 animate-[card-drop-3_0.6s_ease-in-out_2.1s_backwards] absolute rotate-[7.33deg] top-[-3rem] left-[-6rem]" photo="cards/card_03.jpg" title="A photo of me" />
    </div>
  </div>;
}

export default HomePage;

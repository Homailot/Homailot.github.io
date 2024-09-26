import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          about: {
            greeting: "Hello!",
            part_1: "My name is Nuno Alves, I’m a Software Engineer from Portugal with an interest in <strong>Web & Mobile Design and Development</strong>, <strong>Computer Graphics</strong>, <strong>Game Development</strong>, and <strong>Computer Networking.</strong>",
            part_2: "In my free time, I like to listen and discover music, play video games, read manga, watch movies, and play the drums.",
            part_3: "Currently, I am studying Japanese because of my love of Japanese video games and as a challenge."
          } 
        },
      },
      pt: {
        translation: {
          about: {
            greeting: "Olá!",
            part_1: "O meu nome é Nuno Alves, sou um Engenheiro de Software residente em Portugal com interesse em <strong>Desenvolvimento e Design para Web & Mobile</strong>, <strong>Computação Gráfica</strong>, <strong>Desenvolvimento de Jogos</strong> e <strong>Redes de Computadores.</strong>",
            part_2: "Nos meus tempos livres, gosto de ouvir e descobrir música, jogar videojogos, ler manga, ver filmes e tocar bateria.",
            part_3: "Presentemente, estou a estudar japonês devido à minha paixão por videojogos japoneses e como um desafio."
          } 
        },
      },
    },
  });

export default i18n;

import { usePrefs } from "../i18n/Preferences";

export default function Hero() {
  const { t } = usePrefs();

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2"
    >
      <div>
        <span className="inline-block rounded bg-brand-blue px-3 py-1.5 font-pixel text-[8px] text-white shadow-[3px_3px_0_0_#e88fb0]">
          {t("hero.badge")}
        </span>

        <h1 className="mt-6 text-6xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          {t("hero.hi")}
          <br />
          <span className="text-accent">Tinhinane.</span>
        </h1>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">{t("hero.text")}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            {t("hero.explore")} <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn-secondary">
            {t("hero.touch")}
          </a>
        </div>
      </div>

      {/* Illustration : /public/hero-robot.svg */}
      <div className="flex justify-center">
        <img
          src="/hero-robot.svg"
          alt={t("hero.alt")}
          className="w-full max-w-sm"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </section>
  );
}

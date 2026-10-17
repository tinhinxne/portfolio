import SectionTitle from "./SectionTitle";
import { usePrefs } from "../i18n/Preferences";

const facts = [
  { icon: "♥", color: "bg-rose-300", key: "interests" },
  { icon: "+", color: "bg-brand-purple-light", key: "approach" },
  { icon: "!", color: "bg-highlight", key: "focus" },
];

export default function About() {
  const { t } = usePrefs();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle number="01" title={t("about.title")} />

      <div className="win">
        <div className="win-bar">
          <span>About_Me.txt</span>
        </div>

        <div className="grid md:grid-cols-[220px_1fr]">
          {/* Carte profil */}
          <aside className="flex flex-col items-center gap-2 bg-win-gray/60 p-6 text-center">
           <div className="relative h-24 w-24 overflow-hidden rounded-lg border-2 border-brand-blue-dark bg-brand-purple-light">
  <img
    src="/robot.svg"
    alt=""
    aria-hidden="true"
    className="robot-peek absolute inset-0 h-full w-full object-contain p-1.5"
    onError={(e) => {
      // si robot.svg n'existe pas encore, on utilise l'illustration du Hero
      if (!e.currentTarget.src.endsWith("/hero-robot.svg")) {
        e.currentTarget.src = "/hero-robot.svg";
      }
    }}
  />
</div>
            <p className="font-mono text-xs font-bold">Tinhinane Belarbi</p>
            <p className="text-[11px] text-ink/60">{t("about.role")}</p>
            <span className="mt-2 rounded border border-ink/30 bg-surface px-2 py-1 font-pixel text-[7px]">
              {t("about.ready")}
            </span>
          </aside>

          {/* Texte */}
          <div className="space-y-4 bg-surface p-6 text-sm leading-relaxed">
            <p>
              {t("about.p1a")}
              <mark className="bg-highlight px-1 font-semibold text-black">Tinhinane</mark>
              {t("about.p1b")}
            </p>
            <p>{t("about.p2")}</p>
            <p>
              <strong>{t("about.goalsLabel")}</strong> {t("about.goals")}
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {facts.map((f) => (
                <div
                  key={f.key}
                  className="flex items-center gap-3 rounded-lg border border-ink/10 bg-win-panel/60 p-3"
                >
                  <span
                    className={`grid h-7 w-7 place-items-center rounded ${f.color} text-xs text-black`}
                  >
                    {f.icon}
                  </span>
                  <div className="text-[11px] leading-tight">
                    <p className="font-semibold">{t(`about.${f.key}`)}</p>
                    <p className="text-ink/60">{t(`about.${f.key}Value`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t border-ink/10 bg-win-gray px-3 py-1 font-mono text-[9px]">
          <span>{t("about.statusLeft")}</span>
          <span>{t("about.statusRight")}</span>
        </div>
      </div>
    </section>
  );
}

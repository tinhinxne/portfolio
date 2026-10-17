import SectionTitle from "./SectionTitle";
import { usePrefs } from "../i18n/Preferences";

const PROFILE_URL = "https://github.com/tinhinxne";

// Les textes (descriptions, types, statuts) sont dans translations.js, section "github".
const repos = [
  {
    name: "odysse-expo",
    descKey: "odysse",
    typeKey: "mobile",
    statusKey: "public",
    url: "https://github.com/SOSOBEN1/odysse-expo",
  },
  {
    name: "PermisManager",
    descKey: "permis",
    typeKey: "desktop",
    statusKey: "public",
    url: "https://github.com/tinhinxne/PermisManager",
  },
  {
    name: "Salle-De-Sport",
    descKey: "sport",
    typeKey: "desktop",
    statusKey: "public",
    url: "https://github.com/amina-hue/Salle-De-Sport",
  },
  {
    name: "DevOps-MiniProject",
    descKey: "devops",
    typeKey: "devops",
    statusKey: "inProgress",
    highlight: true,
    url: "https://github.com/tinhinxne/DevOps-MiniProject",
  },
];

const statusStyle = {
  public: "font-semibold text-emerald-600",
  inProgress: "font-semibold text-rose-500",
  notPublic: "text-ink/50",
};

export default function Github() {
  const { t } = usePrefs();

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle number="04" title={t("github.title")} subtitle={t("github.subtitle")} />

      {/* Explorateur de fichiers */}
      <div className="win">
        <div className="win-bar">
          <span>C:\My Documents\GitHub Repositories</span>
        </div>

        <div className="flex items-center gap-3 border-b border-ink/10 bg-win-gray px-3 py-2 text-[11px]">
          <span>{t("github.back")}</span>
          <span>{t("github.up")}</span>
          <span className="ml-2 font-mono">{t("github.address")}</span>
          <span className="flex-1 rounded border border-ink/20 bg-surface px-2 py-1 font-mono">
            📁 tinhinxne
          </span>
        </div>

        <div className="grid md:grid-cols-[180px_1fr]">
          <aside className="space-y-2 bg-brand-lilac p-4 text-[11px]">
            <p className="font-pixel text-[8px] text-link">{t("github.tasks")}</p>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-link underline"
            >
              {t("github.profile")}
            </a>
            <a
              href={`${PROFILE_URL}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-link underline"
            >
              {t("github.publicRepos")}
            </a>
            <p className="pt-4 text-ink/60">{t("github.note")}</p>
          </aside>

          <div className="bg-surface">
            <div className="grid grid-cols-[1fr_110px_110px] border-b border-ink/10 px-4 py-2 font-mono text-[10px] text-ink/50">
              <span>{t("github.colName")}</span>
              <span>{t("github.colType")}</span>
              <span>{t("github.colStatus")}</span>
            </div>

            {repos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid grid-cols-[1fr_110px_110px] items-center border-b border-ink/5 px-4 py-3 transition hover:bg-brand-lilac/70 ${
                  r.highlight ? "bg-brand-lilac" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">📁</span>
                  <div>
                    <p className="font-mono text-xs font-bold text-link">{r.name}</p>
                    <p className="text-[10px] text-ink/60">{t(`github.repos.${r.descKey}`)}</p>
                  </div>
                </div>
                <span className="text-[10px]">{t(`github.types.${r.typeKey}`)}</span>
                <span className={`text-[10px] ${statusStyle[r.statusKey]}`}>
                  {t(`github.status.${r.statusKey}`)}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between border-t border-ink/10 bg-win-gray px-3 py-1 font-mono text-[9px]">
          <span>{t("github.items").replace("{n}", repos.length)}</span>
          <span>{t("github.verified")}</span>
        </div>
      </div>

      {/* Projet d'équipe en cours */}
      <div className="win mt-6">
        <div className="win-bar">
          <span>Current_Team_Project.exe</span>
        </div>
        <div className="flex flex-col items-center gap-6 bg-win-panel p-6 md:flex-row">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-lg bg-brand-blue font-pixel text-xs text-white shadow-[4px_4px_0_0_#e88fb0]">
            TEAM
          </div>

          <div className="space-y-1.5 text-xs">
            <p className="font-pixel text-[8px] text-rose-500">{t("github.teamBadge")}</p>
            <h3 className="text-base font-bold">{t("github.teamTitle")}</h3>
            <p>
              <strong>{t("github.focusLabel")}</strong> {t("github.focusText")}
            </p>
            <p>
              <strong>{t("github.statusLabel")}</strong> {t("github.statusText")}
            </p>
            <p>
              <strong>{t("github.collabLabel")}</strong> {t("github.collabText")}
            </p>
            <div className="flex gap-2 pt-2">
              {["Git", "GitHub", "DevOps"].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 md:ml-auto">
            <a
              href="https://github.com/tinhinxne/DevOps-MiniProject"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-ink/20 bg-surface px-3 py-2 font-mono text-[10px] text-link transition hover:border-brand-purple hover:underline"
            >
              tinhinxne/DevOps-MiniProject
            </a>
            <p className="text-[10px] text-ink/60">{t("github.ongoing")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

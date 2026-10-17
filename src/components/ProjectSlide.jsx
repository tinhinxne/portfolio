import { useState } from "react";
import { usePrefs } from "../i18n/Preferences";

export default function ProjectSlide({ project }) {
  const { t } = usePrefs();
  const [index, setIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const { images } = project;
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const text = `projects.items.${project.id}`;
  const tags = t(`${text}.tags`);

  const info = (
    <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
      <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
        {t(`${text}.label`)}
      </p>
      <h3 className="text-4xl font-extrabold tracking-tight">{project.name}</h3>
      <p className="max-w-md text-sm leading-relaxed text-ink/70">{t(`${text}.description`)}</p>

      <div className="flex flex-wrap gap-2">
        {Array.isArray(tags) &&
          tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
      </div>

      {project.stats.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.stats.map((s) => (
            <div
              key={s.labelKey}
              className="min-w-28 rounded-lg border border-ink/10 bg-surface/70 p-3"
            >
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-[11px] text-ink/60">{t(`projects.stats.${s.labelKey}`)}</p>
            </div>
          ))}
        </div>
      )}

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 w-fit rounded-lg bg-brand-purple px-8 py-3 font-pixel text-[9px] text-white shadow-lg transition hover:bg-brand-blue"
      >
        {t("projects.viewSource")}
      </a>
    </div>
  );

  const gallery = (
    <div className="relative flex min-h-[420px] items-center justify-center bg-[#1c1530] p-6">
      <button
        onClick={prev}
        aria-label={t("ui.prev")}
        className="absolute left-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt={`${project.name} ${index + 1}`}
        className="max-h-[380px] rounded-lg object-contain"
      />

      <button
        onClick={next}
        aria-label={t("ui.next")}
        className="absolute right-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25"
      >
        ›
      </button>

      <span className="absolute bottom-3 right-4 font-mono text-[10px] text-white/60">
        {index + 1} / {total}
      </span>
    </div>
  );

  const btn =
    "win-btn grid place-items-center text-[10px] leading-none text-white transition hover:bg-white/40";

  return (
    <article className="win">
      {/* Barre de titre : double-clic = réduire / rouvrir */}
      <div className="win-bar select-none" onDoubleClick={() => setCollapsed((c) => !c)}>
        <span>{project.windowTitle}</span>
        <div className="flex gap-1.5" onDoubleClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            aria-label={t("ui.minimize")}
            title={t("ui.minimize")}
            className={btn}
          >
            –
          </button>
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            aria-label={t("ui.restore")}
            title={t("ui.restore")}
            className={btn}
          >
            □
          </button>
        </div>
      </div>

      {/* Contenu qui se replie en douceur */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
        aria-hidden={collapsed}
      >
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            {project.reverse ? (
              <>
                {gallery}
                {info}
              </>
            ) : (
              <>
                {info}
                {gallery}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

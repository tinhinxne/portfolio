import SectionTitle from "./SectionTitle";
import ProjectSlide from "./ProjectSlide";
import { projects } from "../data/projects";
import { usePrefs } from "../i18n/Preferences";

export default function Projects() {
  const { t } = usePrefs();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle number="03" title={t("projects.title")} subtitle={t("projects.subtitle")} />

      <h3 className="mb-2 max-w-md text-4xl font-medium leading-tight tracking-tight">
        {t("projects.heading")}
      </h3>
      <p className="mb-8 text-xs text-ink/60">{t("projects.intro")}</p>

      <div className="space-y-6">
        {projects.map((p) => (
          <ProjectSlide key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

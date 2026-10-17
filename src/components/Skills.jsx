import SectionTitle from "./SectionTitle";
import { usePrefs } from "../i18n/Preferences";

// Adapte cette liste à tes vraies compétences.
// "key" correspond à un nom de groupe dans translations.js (section "skills").
const skills = [
  {
    key: "webMobile",
    items: ["HTML", "CSS", "React.js", "React Native", "Tailwind CSS"],
  },
  {
    key: "languages",
    items: ["JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    key: "backend",
    items: ["Node.js", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    key: "tools",
    items: ["Git", "GitHub", "Figma", "n8n", "Power BI"],
  },
];

export default function Skills() {
  const { t } = usePrefs();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle number="02" title={t("skills.title")} subtitle={t("skills.subtitle")} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.key} className="win flex flex-col">
            <div className="win-bar">
              <span>{t(`skills.${s.key}`)}.dll</span>
            </div>
            <div className="flex flex-1 flex-wrap content-start gap-2 bg-surface p-4">
              {s.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

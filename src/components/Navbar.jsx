import { useState } from "react";
import { usePrefs } from "../i18n/Preferences";

const links = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "github", href: "#github" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, theme, toggleLang, toggleTheme } = usePrefs();
  const [menuHidden, setMenuHidden] = useState(false);

  const btn =
    "win-btn grid place-items-center text-[10px] leading-none text-white transition hover:bg-white/40";
  const pill =
    "grid h-4 place-items-center rounded-[3px] border border-white/60 bg-white/20 px-1.5 font-pixel text-[7px] leading-none text-white transition hover:bg-white/40";

  return (
    <header className="sticky top-0 z-50">
      {/* Barre de titre : double-clic = réduire / rouvrir le menu */}
      <div
        className="flex select-none items-center justify-between gap-3 bg-brand-blue px-3 py-2 text-white"
        onDoubleClick={() => setMenuHidden((h) => !h)}
      >
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-white font-pixel text-[9px] text-brand-blue">
            T
          </span>
          <span className="truncate font-pixel text-[10px]">
            Tinhinane Belarbi — Personal Portfolio
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5" onDoubleClick={(e) => e.stopPropagation()}>
          {/* Langue : affiche la langue vers laquelle on bascule */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("ui.switchLang")}
            title={t("ui.switchLang")}
            className={pill}
          >
            {t("ui.langShort")}
          </button>

          {/* Thème clair / sombre */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("ui.toLight") : t("ui.toDark")}
            title={theme === "dark" ? t("ui.toLight") : t("ui.toDark")}
            className={pill}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <button
            type="button"
            onClick={() => setMenuHidden(true)}
            aria-label={t("ui.hideMenu")}
            title={t("ui.hideMenu")}
            className={btn}
          >
            –
          </button>
          <button
            type="button"
            onClick={() => setMenuHidden(false)}
            aria-label={t("ui.showMenu")}
            title={t("ui.showMenu")}
            className={btn}
          >
            □
          </button>
        </div>
      </div>

      {/* Menu qui se replie en douceur */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          menuHidden ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
        aria-hidden={menuHidden}
      >
        <div className="overflow-hidden">
          <nav className="flex items-center justify-between border-b border-ink/10 bg-win-gray px-4 py-2">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px]">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-link hover:underline">
                    {t(`nav.${l.key}`)}
                  </a>
                </li>
              ))}
            </ul>
            <span className="hidden font-mono text-[11px] sm:block">Tinhinane Belarbi</span>
          </nav>
        </div>
      </div>
    </header>
  );
}

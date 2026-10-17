import { usePrefs } from "../i18n/Preferences";

export default function Footer() {
  const { t } = usePrefs();
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="flex items-center justify-between bg-win-gray px-6 py-3 font-mono text-[10px]">
      <span>
        {t("footer.credit")} <strong>Tinhinane Belarbi</strong> · {new Date().getFullYear()}
      </span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={backToTop} className="hover:underline">
          {t("footer.top")}
        </button>
        <span className="rounded border border-ink/30 bg-surface px-2 py-0.5 font-pixel text-[7px]">
          {t("footer.ready")}
        </span>
      </div>
    </footer>
  );
}

import { usePrefs } from "../i18n/Preferences";

export default function Marquee() {
  const { t } = usePrefs();

  return (
    <div className="bg-brand-blue py-2 text-center font-mono text-[11px] tracking-wide text-white">
      <span className="text-highlight">★</span>
      <span className="mx-3">{t("marquee")}</span>
      <span className="text-highlight">★</span>
    </div>
  );
}

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { usePrefs } from "../i18n/Preferences";

// Adresse du formulaire Formspree
const FORM_ENDPOINT = "https://formspree.io/f/xppqbgdv";

const empty = { from: "", name: "", subject: "", message: "" };

export default function Contact() {
  const { t } = usePrefs();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const contacts = [
    {
      icon: "@",
      label: t("contact.email"),
      value: "tinhinane.belarbi@se.univ-bejaia.dz",
      href: "mailto:tinhinane.belarbi@univ-bejaia.dz",
    },
    { icon: "GH", label: "GitHub", value: "tinhinxne", href: "https://github.com/tinhinxne" },
    {
      icon: "in",
      label: "LinkedIn",
      value: "Tinhinane BELARBI",
      href: "https://www.linkedin.com/in/tinhinane-belarbi-b6676531b/",
    },
  ];

  const fields = [
    { name: "from", label: t("contact.from"), placeholder: t("contact.phFrom"), type: "email" },
    { name: "name", label: t("contact.name"), placeholder: t("contact.phName"), type: "text" },
    {
      name: "subject",
      label: t("contact.subject"),
      placeholder: t("contact.phSubject"),
      type: "text",
    },
  ];

  const update = (e) => {
    setStatus("idle");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: form.from,
          name: form.name,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm(empty);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const clear = () => {
    setForm(empty);
    setStatus("idle");
  };

  const field =
    "w-full rounded-md border border-ink/10 bg-surface px-3 py-2 text-xs outline-none focus:border-brand-purple";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle number="05" title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="grid gap-6 md:grid-cols-[1fr_1.6fr]">
        {/* Carte de contact */}
        <div className="win">
          <div className="win-bar">
            <span>Contact_Card.vcf</span>
          </div>
          <div className="space-y-3 bg-win-panel p-5">
            {contacts.map((c) => (
              <a
                key={c.icon}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-ink/10 bg-surface p-3 transition hover:border-brand-purple"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-blue text-xs font-bold text-white">
                  {c.icon}
                </span>
                <div className="text-[11px] leading-tight">
                  <p className="font-bold">{c.label}</p>
                  <p className="text-ink/70">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={submit} className="win">
          <div className="win-bar">
            <span>{t("contact.formTitle")}</span>
          </div>
          <div className="space-y-3 bg-win-panel p-5">
            <div className="rounded-md border border-highlight bg-highlight/70 px-3 py-2 text-[11px] text-black">
              <strong>i</strong> {t("contact.banner")}
            </div>

            {fields.map((f) => (
              <label key={f.name} className="grid grid-cols-[64px_1fr] items-center gap-2 text-xs">
                {f.label}
                <input
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  onChange={update}
                  placeholder={f.placeholder}
                  required
                  className={field}
                />
              </label>
            ))}

            <label className="grid grid-cols-[64px_1fr] items-start gap-2 text-xs">
              <span className="pt-2">{t("contact.message")}</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={update}
                placeholder={t("contact.phMessage")}
                required
                className={field}
              />
            </label>

            <div className="flex flex-wrap items-center justify-end gap-3">
              {status === "sent" && (
                <span className="mr-auto text-[11px] text-emerald-600">{t("contact.sent")}</span>
              )}
              {status === "error" && (
                <span className="mr-auto text-[11px] text-rose-500">{t("contact.error")}</span>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-lg bg-brand-blue px-5 py-2.5 font-pixel text-[8px] text-white shadow-md transition hover:bg-brand-purple disabled:opacity-60"
              >
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>
              <button
                type="button"
                onClick={clear}
                className="rounded-lg border border-ink/10 bg-surface px-5 py-2.5 font-pixel text-[8px] transition hover:border-brand-purple"
              >
                {t("contact.clear")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

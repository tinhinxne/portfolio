import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const PreferencesContext = createContext(null);

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* navigation privée : on ignore */
  }
}

// Langue : choix précédent, sinon la langue du navigateur (français ou anglais)
function initialLang() {
  const saved = readStored("lang");
  if (saved === "en" || saved === "fr") return saved;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

// Thème : choix précédent, sinon le réglage clair/sombre du système
function initialTheme() {
  const saved = readStored("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
    store("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    store("theme", theme);
  }, [theme]);

  const value = useMemo(() => {
    const dict = translations[lang];
    // t("hero.badge") va chercher dict.hero.badge ; si la clé n'existe pas, on affiche la clé
    const t = (path) =>
      path.split(".").reduce((obj, key) => (obj == null ? obj : obj[key]), dict) ?? path;

    return {
      lang,
      theme,
      t,
      toggleLang: () => setLang((l) => (l === "en" ? "fr" : "en")),
      toggleTheme: () => setTheme((th) => (th === "dark" ? "light" : "dark")),
    };
  }, [lang, theme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePrefs() {
  return useContext(PreferencesContext);
}

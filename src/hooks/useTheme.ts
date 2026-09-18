import { useCallback, useEffect, useState } from "react";
import { storage } from "../lib/storage";

export type ThemePreference = "light" | "dark" | "system";

function resolveIsDark(pref: ThemePreference): boolean {
  if (pref === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return pref === "dark";
}

export function useTheme() {
  const [preference, setPreferenceState] = useState<ThemePreference>(
    () => (storage.getPreference("theme") as ThemePreference | null) ?? "system"
  );

  useEffect(() => {
    const apply = () => {
      document.documentElement.classList.toggle("dark", resolveIsDark(preference));
    };
    apply();

    if (preference === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }
  }, [preference]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    storage.setPreference("theme", next);
  }, []);

  return { preference, setPreference, isDark: resolveIsDark(preference) };
}

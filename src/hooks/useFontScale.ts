import { useCallback, useEffect, useState } from "react";
import { storage } from "../lib/storage";

export type FontScale = "normal" | "grande" | "extra-grande";

const ORDER: FontScale[] = ["normal", "grande", "extra-grande"];
const LABELS: Record<FontScale, string> = {
  normal: "Normal",
  grande: "Grande",
  "extra-grande": "Extra grande"
};

export function useFontScale() {
  const [scale, setScaleState] = useState<FontScale>(
    () => (storage.getPreference("fontScale") as FontScale | null) ?? "normal"
  );

  useEffect(() => {
    if (scale === "normal") {
      delete document.documentElement.dataset.fontScale;
    } else {
      document.documentElement.dataset.fontScale = scale;
    }
  }, [scale]);

  const setScale = useCallback((next: FontScale) => {
    setScaleState(next);
    storage.setPreference("fontScale", next);
  }, []);

  const cycleScale = useCallback(() => {
    const currentIndex = ORDER.indexOf(scale);
    setScale(ORDER[(currentIndex + 1) % ORDER.length]);
  }, [scale, setScale]);

  return { scale, label: LABELS[scale], setScale, cycleScale };
}

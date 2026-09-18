import { useEffect, useRef, useState } from "react";
import type { ThemePreference } from "../hooks/useTheme";

const HEADER_IMAGES: Array<[src: string, tint: string]> = [
  ["1.png", "#faa17e"], ["9.png", "#929594"], ["8.png", "#689279"], ["2.png", "#efd9b4"],
  ["10.png", "#688590"], ["19.png", "#87a28b"], ["3.png", "#f3d0b7"], ["11.png", "#73a1b6"],
  ["20.png", "#6f938c"], ["4.png", "#6dbfc0"], ["12.png", "#798084"], ["21.png", "#668d91"],
  ["5.png", "#f49b7c"], ["13.png", "#808a7b"], ["22.png", "#63837a"], ["6.png", "#fbca75"],
  ["14.png", "#808a7b"], ["23.png", "#849073"], ["7.png", "#b4f6e5"], ["15.png", "#808a7b"],
  ["24.png", "#8b9286"], ["16.png", "#769992"], ["25.png", "#739285"], ["17.png", "#698691"],
  ["18.png", "#6c99ab"]
];

interface AppHeaderProps {
  username: string;
  onChangeUsername: (name: string) => void;
  themePreference: ThemePreference;
  onChangeTheme: (pref: ThemePreference) => void;
  fontScaleLabel: string;
  onCycleFontScale: () => void;
}

export function AppHeader({
  username,
  onChangeUsername,
  themePreference,
  onChangeTheme,
  fontScaleLabel,
  onCycleFontScale
}: AppHeaderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HEADER_IMAGES.length);
    }, 8000);
    return () => window.clearInterval(timerRef.current);
  }, []);

  const [imgSrc, tint] = HEADER_IMAGES[imageIndex];

  function handleEditName() {
    const newName = window.prompt("Como você quer ser chamado?", username);
    if (newName && newName.trim()) onChangeUsername(newName.trim());
  }

  return (
    <header className="relative">
      {/* Barra de utilitários — tema, tamanho de fonte, marca */}
      <nav
        aria-label="Preferências de exibição"
        className="flex items-center justify-between gap-2 bg-brand-900 px-4 py-2 text-sm text-white"
      >
        <span className="font-heading font-semibold tracking-wide">Bíblia365</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCycleFontScale}
            className="rounded-md px-2 py-1 hover:bg-white/10"
            aria-label={`Tamanho do texto: ${fontScaleLabel}. Tocar para alternar.`}
          >
            <span aria-hidden="true">Aa</span>
          </button>
          <label className="sr-only" htmlFor="theme-select">
            Tema
          </label>
          <select
            id="theme-select"
            value={themePreference}
            onChange={(e) => onChangeTheme(e.target.value as ThemePreference)}
            className="rounded-md bg-white/10 px-2 py-1 text-white [color-scheme:dark]"
          >
            <option value="system">Automático</option>
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>
      </nav>

      {/* Hero decorativo com imagem de fundo rotativa */}
      <div
        className="relative flex min-h-[38vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 py-10 text-center text-white transition-colors duration-700 sm:min-h-[42vh]"
        style={{ backgroundImage: `url(img/${imgSrc})`, backgroundColor: tint }}
        role="img"
        aria-label="Imagem ilustrativa de fundo"
      >
        <div className="absolute inset-0 bg-[image:var(--header-overlay)]" aria-hidden="true" />
        <div className="relative z-10 flex max-w-2xl flex-col items-center gap-3">
          <h1 className="font-heading text-2xl font-semibold drop-shadow sm:text-3xl md:text-4xl">
            Programação de Leitura da Bíblia em 1 Ano
          </h1>
          <p className="flex items-center gap-2 text-base drop-shadow sm:text-lg">
            Olá, <strong>{username || "Visitante"}</strong>
            <button
              type="button"
              onClick={handleEditName}
              className="rounded-full bg-white/20 p-1.5 leading-none hover:bg-white/30"
              aria-label="Editar seu nome"
              title="Editar seu nome"
            >
              ✎
            </button>
          </p>
        </div>
      </div>
    </header>
  );
}

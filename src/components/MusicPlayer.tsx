import { useState } from "react";
import { useLofiPlayer } from "../hooks/useLofiPlayer";

export function MusicPlayer() {
  const { iframeId, isPlaying, volume, toggle, setVolume } = useLofiPlayer();
  const [showVolume, setShowVolume] = useState(false);
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      {/* iframe usado só como fonte de áudio; oculto de tela e de leitores de tela.
          "origin" é obrigatório com enablejsapi=1 — sem ele o handshake da API
          falha e o YouTube mostra o erro 153. */}
      <iframe
        id={iframeId}
        title="Música lofi de fundo"
        aria-hidden="true"
        className="sr-only"
        src={`https://www.youtube.com/embed/rFZHOHl-L8A?enablejsapi=1&mute=1&origin=${origin}`}
        allow="autoplay; encrypted-media"
      />

      <div className="relative">
        <button
          type="button"
          onClick={() => {
            toggle();
            setShowVolume(true);
          }}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pausar música lofi de fundo" : "Tocar música lofi de fundo"}
          title={isPlaying ? "Pausar música" : "Tocar música"}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-700 text-lg text-white shadow-floating hover:bg-stone-800"
        >
          {isPlaying ? "⏸" : "🎵"}
        </button>

        {showVolume && isPlaying && (
          <div className="absolute bottom-14 right-0 flex items-center gap-2 rounded-lg bg-white p-2 shadow-floating dark:bg-stone-800">
            <label htmlFor="volumeControl" className="text-xs text-stone-500 dark:text-stone-400">
              🔊
            </label>
            <input
              type="range"
              id="volumeControl"
              min={0}
              max={100}
              step={5}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24"
              aria-label="Volume da música"
            />
          </div>
        )}
      </div>
    </>
  );
}
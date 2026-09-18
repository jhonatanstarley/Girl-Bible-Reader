import type { RefObject } from "react";
import { MusicPlayer } from "./MusicPlayer";

interface FloatingActionsProps {
  helpDialogRef: RefObject<HTMLDialogElement>;
}

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5522997818598&text=Ol%C3%A1%21%0A%0ATenho%20uma%20sugest%C3%A3o%20para%20o%20programa%20de%20leitura%20da%20biblia%20em%201%20ano.%0AT%C3%A1%20podendo%20falar%3F&type=phone_number&app_absent=0";

export function FloatingActions({ helpDialogRef }: FloatingActionsProps) {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <MusicPlayer />

      <button
        type="button"
        onClick={() => helpDialogRef.current?.showModal()}
        aria-label="Abrir ajuda"
        title="Ajuda"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg text-white shadow-floating hover:bg-brand-700"
      >
        ?
      </button>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar sugestão pelo WhatsApp"
        title="Sugestões pelo WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-floating hover:brightness-95"
      >
        <span aria-hidden="true">✆</span>
      </a>
    </div>
  );
}

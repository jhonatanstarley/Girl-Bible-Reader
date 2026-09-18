import { forwardRef } from "react";

export const HelpDialog = forwardRef<HTMLDialogElement>(function HelpDialog(_props, ref) {
  return (
    <dialog
      ref={ref}
      aria-labelledby="help-title"
      className="w-[min(560px,92vw)] rounded-xl2 p-0 backdrop:bg-stone-900/60 dark:bg-stone-800 dark:text-stone-100"
    >
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-stone-700">
        <h2 id="help-title" className="font-heading text-lg font-semibold">
          Ajuda
        </h2>
        <button
          type="button"
          onClick={() => (ref as React.RefObject<HTMLDialogElement>).current?.close()}
          aria-label="Fechar ajuda"
          className="rounded-full p-1 text-xl leading-none text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-700"
        >
          ×
        </button>
      </div>
      <div className="max-h-[70vh] space-y-3 overflow-y-auto px-5 py-4 text-sm text-stone-700 dark:text-stone-300">
        <p>
          Este app te ajuda a seguir o plano de leitura da Bíblia em 1 ano: acompanhe seu progresso, veja os dias
          restantes e atrasados, e receba um aviso quando estiver em dia.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Data de início</strong>: define quando você começou a leitura.
          </li>
          <li>
            <strong>Plano de leitura</strong>: marque cada grupo de capítulos conforme for lendo.
          </li>
          <li>
            <strong>Progresso</strong>: barra visual e estatísticas de dias restantes/atrasados.
          </li>
          <li>
            <strong>Backup</strong>: baixe seu progresso em um arquivo e carregue depois em outro aparelho.
          </li>
          <li>
            <strong>🟥 vermelho</strong>: visão histórica dos tratos de Deus com Israel. <strong>🔵 azul</strong>:
            desenvolvimento da congregação cristã.
          </li>
        </ul>
        <p>
          Dúvidas ou sugestões? Use o botão do WhatsApp na tela para falar diretamente com quem mantém o app.
        </p>
      </div>
      <div className="flex justify-end border-t border-stone-200 px-5 py-3 dark:border-stone-700">
        <button
          type="button"
          onClick={() => (ref as React.RefObject<HTMLDialogElement>).current?.close()}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Fechar
        </button>
      </div>
    </dialog>
  );
});

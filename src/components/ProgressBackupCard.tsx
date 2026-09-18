import { useRef, useState } from "react";
import { downloadProgressBackup, importProgressBackup } from "../lib/exportImport";

interface ProgressBackupCardProps {
  username: string;
  onImported: () => void;
}

export function ProgressBackupCard({ username, onImported }: ProgressBackupCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<string>("");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importProgressBackup(file);
      onImported();
      setFeedback("Progresso carregado com sucesso!");
    } catch {
      setFeedback("Não foi possível ler esse arquivo. Verifique se é um backup válido.");
    } finally {
      e.target.value = "";
    }
  }

  return (
    <section
      aria-labelledby="backup-heading"
      className="mx-auto mt-6 max-w-4xl rounded-xl2 bg-white p-5 shadow-sm dark:bg-stone-800"
    >
      <h2 id="backup-heading" className="font-heading text-lg font-semibold text-stone-800 dark:text-stone-100">
        Backup do progresso
      </h2>
      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
        Salve seu progresso em um arquivo para continuar em outro dispositivo, ou carregue um backup salvo antes.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => downloadProgressBackup(username)}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Baixar progresso
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-700"
        >
          Carregar progresso
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json"
          onChange={handleFileChange}
          className="sr-only"
          aria-label="Selecionar arquivo de backup de progresso"
        />
      </div>
      {feedback && (
        <p role="status" className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          {feedback}
        </p>
      )}
    </section>
  );
}

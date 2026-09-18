import { readAllLocalStorageEntries, writeLocalStorageEntries } from "./storage";

export function downloadProgressBackup(username: string): void {
  const data = readAllLocalStorageEntries();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `progresso_leitura_${username || "usuario"}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function importProgressBackup(file: File): Promise<void> {
  const text = await file.text();
  const data = JSON.parse(text) as Record<string, unknown>;
  writeLocalStorageEntries(data);
}

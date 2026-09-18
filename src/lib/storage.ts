/**
 * Compatibilidade com o app antigo (produção): as chaves abaixo são
 * exatamente as mesmas que a versão anterior gravava no localStorage.
 * Isso garante que quem já usa o app não perca o progresso ao atualizar.
 */
const KEY_USERNAME = "username";
const KEY_START_DATE = "startDate";
const dayKey = (index: number) => `day${index}`;

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Armazenamento indisponível (modo privado, cota excedida, etc). Segue sem persistir.
  }
}

export const storage = {
  getUsername(): string | null {
    return safeGet(KEY_USERNAME);
  },
  setUsername(name: string): void {
    safeSet(KEY_USERNAME, name);
  },
  getStartDate(): string | null {
    return safeGet(KEY_START_DATE);
  },
  setStartDate(value: string): void {
    safeSet(KEY_START_DATE, value);
  },
  isDayCompleted(index: number): boolean {
    return safeGet(dayKey(index)) === "true";
  },
  setDayCompleted(index: number, completed: boolean): void {
    safeSet(dayKey(index), completed ? "true" : "false");
  },
  // Preferências novas (não existiam no app antigo) — chaves próprias, sem colidir.
  getPreference(key: "theme" | "fontScale"): string | null {
    return safeGet(`biblia365:${key}`);
  },
  setPreference(key: "theme" | "fontScale", value: string): void {
    safeSet(`biblia365:${key}`, value);
  }
};

/** Todas as chaves brutas do localStorage — usado só para exportar/importar backup. */
export function readAllLocalStorageEntries(): Record<string, string> {
  const entries: Record<string, string> = {};
  try {
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key === null) continue;
      const value = window.localStorage.getItem(key);
      if (value !== null) entries[key] = value;
    }
  } catch {
    // ignora
  }
  return entries;
}

export function writeLocalStorageEntries(entries: Record<string, unknown>): void {
  for (const [key, value] of Object.entries(entries)) {
    if (typeof value === "string") {
      safeSet(key, value);
    }
  }
}

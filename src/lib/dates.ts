/** Retorna a data de hoje com horas zeradas, para comparações por dia. */
export function todayAtMidnight(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Faz parse de uma string "YYYY-MM-DD" (input[type=date]) em horário local. */
export function parseDateInput(value: string): Date {
  return new Date(`${value}T00:00:00`);
}

/** Formata uma Date para o valor esperado por input[type=date]. */
export function toDateInputValue(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function formatLongDatePtBR(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

export function formatShortDatePtBR(date: Date, timeZone: "UTC" | "local" = "local"): string {
  return date.toLocaleDateString("pt-BR", timeZone === "UTC" ? { timeZone: "UTC" } : undefined);
}

/** Diferença em dias (arredondada para cima), positiva quando `date` é futura. */
export function diffInDays(date: Date, from: Date = todayAtMidnight()): number {
  const ms = date.getTime() - from.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

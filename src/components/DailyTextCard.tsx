import { buildDailyTextUrl } from "../lib/dailyText";
import { formatLongDatePtBR } from "../lib/dates";

export function DailyTextCard() {
  const today = new Date();
  const url = buildDailyTextUrl(today);

  return (
    <section
      aria-labelledby="texto-dia-heading"
      className="mx-auto mt-6 max-w-4xl rounded-xl2 border border-brand-200 bg-brand-50 p-5 dark:border-brand-800 dark:bg-brand-900/20"
    >
      <h2 id="texto-dia-heading" className="font-heading text-lg font-semibold text-brand-800 dark:text-brand-200">
        Texto do dia
      </h2>
      <p className="mt-1 text-sm capitalize text-stone-600 dark:text-stone-300">
        {formatLongDatePtBR(today)}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
      >
        Abrir texto de hoje em wol.jw.org
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

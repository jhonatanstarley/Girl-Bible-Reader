interface ProgressSummaryProps {
  progressPercent: number;
  completedCount: number;
  totalDays: number;
  daysRemaining: number;
  overdue: number;
  isOnTrack: boolean;
  hasStartDate: boolean;
}

export function ProgressSummary({
  progressPercent,
  completedCount,
  totalDays,
  daysRemaining,
  overdue,
  isOnTrack,
  hasStartDate
}: ProgressSummaryProps) {
  return (
    <section
      aria-labelledby="progresso-heading"
      className="mx-auto -mt-6 max-w-4xl rounded-xl2 bg-white p-5 shadow-floating dark:bg-stone-800 sm:-mt-10 sm:p-6"
    >
      <h2 id="progresso-heading" className="sr-only">
        Seu progresso de leitura
      </h2>

      <div className="mb-2 flex items-baseline justify-between text-sm font-medium text-stone-600 dark:text-stone-300">
        <span>
          {completedCount} de {totalDays} dias lidos
        </span>
        <span className="font-heading text-lg font-semibold text-brand-700 dark:text-brand-300">
          {progressPercent}%
        </span>
      </div>

      <progress
        value={progressPercent}
        max={100}
        className="h-3 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-stone-200 [&::-webkit-progress-value]:bg-brand-500 [&::-moz-progress-bar]:bg-brand-500 dark:[&::-webkit-progress-bar]:bg-stone-700"
        aria-label="Progresso geral do plano de leitura"
      >
        {progressPercent}%
      </progress>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-3">
        <div className="rounded-lg bg-stone-50 p-3 dark:bg-stone-700/40">
          <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">Dias restantes</dt>
          <dd className="font-heading text-xl font-semibold text-stone-800 dark:text-stone-100">
            {hasStartDate ? daysRemaining : "—"}
          </dd>
        </div>
        <div className="rounded-lg bg-stone-50 p-3 dark:bg-stone-700/40">
          <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">Dias atrasados</dt>
          <dd
            className={`font-heading text-xl font-semibold ${
              overdue > 0 ? "text-red-600 dark:text-red-400" : "text-stone-800 dark:text-stone-100"
            }`}
          >
            {hasStartDate ? overdue : "—"}
          </dd>
        </div>
        <div className="col-span-2 rounded-lg bg-stone-50 p-3 dark:bg-stone-700/40 sm:col-span-1">
          <dt className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">Status</dt>
          <dd className="font-heading text-xl font-semibold text-stone-800 dark:text-stone-100">
            {hasStartDate ? (isOnTrack ? "Em dia ✅" : "Atrasado") : "—"}
          </dd>
        </div>
      </dl>

      <p role="status" aria-live="polite" className="sr-only">
        {hasStartDate && isOnTrack ? "Parabéns! Sua leitura está em dia." : ""}
      </p>

      {hasStartDate && isOnTrack && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-center text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Parabéns! Sua leitura está em dia! 🎉
        </p>
      )}
    </section>
  );
}

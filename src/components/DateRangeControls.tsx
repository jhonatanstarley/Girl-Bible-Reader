interface DateRangeControlsProps {
  startDateValue: string;
  endDateValue: string;
  onChangeStartDate: (value: string) => void;
}

export function DateRangeControls({ startDateValue, endDateValue, onChangeStartDate }: DateRangeControlsProps) {
  return (
    <section
      aria-labelledby="datas-heading"
      className="mx-auto mt-6 max-w-4xl rounded-xl2 bg-white p-5 shadow-sm dark:bg-stone-800"
    >
      <h2 id="datas-heading" className="font-heading text-lg font-semibold text-stone-800 dark:text-stone-100">
        Datas do plano
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
            Data de início
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDateValue}
            onChange={(e) => onChangeStartDate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-800 focus:border-brand-500 dark:border-stone-600 dark:bg-stone-700 dark:text-stone-100"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-stone-700 dark:text-stone-300">
            Data de término (calculada)
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDateValue}
            disabled
            className="mt-1 w-full rounded-lg border border-stone-200 bg-stone-100 px-3 py-2 text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400"
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
        Preencha a data em que pretende começar. Marque cada grupo de capítulos conforme for lendo — você pode
        seguir a ordem dos livros ou pelas categorias por assunto. Lendo um grupo por dia, você termina a Bíblia em
        1 ano.
      </p>
      <ul className="mt-2 space-y-1 text-sm text-stone-600 dark:text-stone-400">
        <li>🟥 Visão histórica geral dos tratos de Deus com os israelitas.</li>
        <li>🔵 Visão cronológica geral do desenvolvimento da congregação cristã.</li>
      </ul>
    </section>
  );
}

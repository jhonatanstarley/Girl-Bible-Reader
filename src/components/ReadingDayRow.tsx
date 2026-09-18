import { formatShortDatePtBR } from "../lib/dates";

interface ReadingDayRowProps {
  index: number;
  text: string;
  date: Date | null;
  completed: boolean;
  isToday: boolean;
  isOverdue: boolean;
  onToggle: (index: number) => void;
}

export function ReadingDayRow({ index, text, date, completed, isToday, isOverdue, onToggle }: ReadingDayRowProps) {
  return (
    <li
      id={isToday ? "dia-de-hoje" : undefined}
      className={`rounded-lg ${isToday ? "ring-2 ring-brand-500" : ""}`}
    >
      <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-stone-50 dark:hover:bg-stone-700/50">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(index)}
          className="h-5 w-5 flex-shrink-0 accent-brand-600"
        />
        <span className="flex flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm sm:text-base">
          {date && (
            <span
              className={`font-medium ${isOverdue ? "text-red-600 dark:text-red-400" : "text-stone-500 dark:text-stone-400"}`}
            >
              {formatShortDatePtBR(date)}
            </span>
          )}
          <span className={completed ? "text-stone-400 line-through dark:text-stone-500" : "text-stone-800 dark:text-stone-100"}>
            {text}
          </span>
          {isToday && (
            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold uppercase text-white">
              Hoje
            </span>
          )}
        </span>
      </label>
    </li>
  );
}

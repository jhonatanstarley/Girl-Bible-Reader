import { useMemo, useRef } from "react";
import { ReadingDayRow } from "./ReadingDayRow";

interface DayWithDate {
  index: number;
  category: string;
  text: string;
  date: Date | null;
}

interface ReadingPlanSectionProps {
  daysWithDates: DayWithDate[];
  completed: Set<number>;
  todayIndex: number;
  onToggle: (index: number) => void;
}

interface CategoryGroup {
  category: string;
  days: DayWithDate[];
}

function groupByCategory(days: DayWithDate[]): CategoryGroup[] {
  const groups: CategoryGroup[] = [];
  for (const day of days) {
    const last = groups[groups.length - 1];
    if (last && last.category === day.category) {
      last.days.push(day);
    } else {
      groups.push({ category: day.category, days: [day] });
    }
  }
  return groups;
}

export function ReadingPlanSection({ daysWithDates, completed, todayIndex, onToggle }: ReadingPlanSectionProps) {
  const groups = useMemo(() => groupByCategory(daysWithDates), [daysWithDates]);
  const detailsRefs = useRef<Record<string, HTMLDetailsElement | null>>({});

  function goToToday() {
    if (todayIndex < 0) return;
    const group = groups.find((g) => g.days.some((d) => d.index === todayIndex));
    if (!group) return;
    const el = detailsRefs.current[group.category];
    if (el) el.open = true;
    document.getElementById("dia-de-hoje")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section aria-labelledby="plano-heading" className="mx-auto mt-6 max-w-4xl pb-32">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 id="plano-heading" className="font-heading text-lg font-semibold text-stone-800 dark:text-stone-100">
          Plano de leitura
        </h2>
        {todayIndex >= 0 && (
          <button
            type="button"
            onClick={goToToday}
            className="rounded-lg border border-brand-300 px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-50 dark:border-brand-700 dark:text-brand-300 dark:hover:bg-brand-900/30"
          >
            Ir para hoje
          </button>
        )}
      </div>

      <div className="space-y-3">
        {groups.map((group) => {
          const doneInGroup = group.days.filter((d) => completed.has(d.index)).length;
          const hasToday = group.days.some((d) => d.index === todayIndex);
          return (
            <details
              key={group.category}
              ref={(el) => {
                detailsRefs.current[group.category] = el;
              }}
              open={hasToday}
              className="overflow-hidden rounded-xl2 bg-white shadow-sm dark:bg-stone-800"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3">
                <span className="font-heading font-semibold text-stone-800 dark:text-stone-100">{group.category}</span>
                <span className="flex-shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-300">
                  {doneInGroup}/{group.days.length}
                </span>
              </summary>
              <ul className="space-y-0.5 border-t border-stone-100 px-2 py-2 dark:border-stone-700">
                {group.days.map((day) => (
                  <ReadingDayRow
                    key={day.index}
                    index={day.index}
                    text={day.text}
                    date={day.date}
                    completed={completed.has(day.index)}
                    isToday={day.index === todayIndex}
                    isOverdue={Boolean(day.date && day.date.getTime() < Date.now() && !completed.has(day.index))}
                    onToggle={onToggle}
                  />
                ))}
              </ul>
            </details>
          );
        })}
      </div>
    </section>
  );
}

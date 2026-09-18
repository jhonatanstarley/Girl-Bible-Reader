import { useCallback, useMemo, useState } from "react";
import { readingPlanData } from "../data/readingPlan";
import { storage } from "../lib/storage";
import { addDays, parseDateInput, toDateInputValue, todayAtMidnight } from "../lib/dates";

export interface ReadingDay {
  index: number;
  category: string;
  text: string;
}

/** Achata o plano por categoria em uma lista sequencial de dias (índice = dia). */
function flattenPlan(): ReadingDay[] {
  const days: ReadingDay[] = [];
  let index = 0;
  for (const [category, entries] of Object.entries(readingPlanData)) {
    for (const text of entries) {
      days.push({ index, category, text });
      index++;
    }
  }
  return days;
}

const allDays = flattenPlan();
const totalDays = allDays.length;

function loadCompletedFromStorage(): Set<number> {
  const set = new Set<number>();
  for (let i = 0; i < totalDays; i++) {
    if (storage.isDayCompleted(i)) set.add(i);
  }
  return set;
}

export function useReadingProgress() {
  const [startDateValue, setStartDateValue] = useState<string>(() => storage.getStartDate() ?? "");
  const [completed, setCompleted] = useState<Set<number>>(() => loadCompletedFromStorage());
  const [username, setUsernameState] = useState<string>(() => storage.getUsername() ?? "");

  const startDate = useMemo(
    () => (startDateValue ? parseDateInput(startDateValue) : null),
    [startDateValue]
  );

  const endDateValue = useMemo(() => {
    if (!startDate) return "";
    return toDateInputValue(addDays(startDate, totalDays - 1));
  }, [startDate]);

  const daysWithDates = useMemo(() => {
    if (!startDate) return allDays.map((d) => ({ ...d, date: null as Date | null }));
    return allDays.map((d) => ({ ...d, date: addDays(startDate, d.index) }));
  }, [startDate]);

  const stats = useMemo(() => {
    const today = todayAtMidnight();
    let overdue = 0;
    let todayIndex = -1;

    if (startDate) {
      for (const day of daysWithDates) {
        if (!day.date) continue;
        const isPast = day.date.getTime() < today.getTime();
        const isCompleted = completed.has(day.index);
        if (isPast && !isCompleted) overdue++;
        if (day.date.getTime() === today.getTime()) todayIndex = day.index;
      }
    }

    const completedCount = completed.size;
    const progressPercent = totalDays > 0 ? Math.floor((completedCount / totalDays) * 100) : 0;
    const endDate = endDateValue ? parseDateInput(endDateValue) : null;
    const daysRemaining = endDate ? Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / 86_400_000)) : 0;
    const isOnTrack = Boolean(startDate) && overdue === 0;

    return { completedCount, overdue, progressPercent, daysRemaining, todayIndex, isOnTrack };
  }, [completed, daysWithDates, endDateValue, startDate]);

  const setStartDate = useCallback((value: string) => {
    setStartDateValue(value);
    storage.setStartDate(value);
  }, []);

  const toggleDay = useCallback((index: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      const willBeCompleted = !next.has(index);
      if (willBeCompleted) next.add(index);
      else next.delete(index);
      storage.setDayCompleted(index, willBeCompleted);
      return next;
    });
  }, []);

  const setUsername = useCallback((name: string) => {
    setUsernameState(name);
    storage.setUsername(name);
  }, []);

  /** Recarrega tudo do localStorage — usado depois de importar um backup. */
  const reloadFromStorage = useCallback(() => {
    setStartDateValue(storage.getStartDate() ?? "");
    setUsernameState(storage.getUsername() ?? "");
    setCompleted(loadCompletedFromStorage());
  }, []);

  return {
    totalDays,
    daysWithDates,
    startDateValue,
    endDateValue,
    username,
    completed,
    stats,
    setStartDate,
    toggleDay,
    setUsername,
    reloadFromStorage
  };
}

export type UseReadingProgress = ReturnType<typeof useReadingProgress>;

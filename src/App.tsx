import { useRef } from "react";
import { AppHeader } from "./components/AppHeader";
import { ProgressSummary } from "./components/ProgressSummary";
import { DailyTextCard } from "./components/DailyTextCard";
import { DateRangeControls } from "./components/DateRangeControls";
import { ReadingPlanSection } from "./components/ReadingPlanSection";
import { ProgressBackupCard } from "./components/ProgressBackupCard";
import { FloatingActions } from "./components/FloatingActions";
import { HelpDialog } from "./components/HelpDialog";
import { AppFooter } from "./components/AppFooter";
import { useReadingProgress } from "./hooks/useReadingProgress";
import { useTheme } from "./hooks/useTheme";
import { useFontScale } from "./hooks/useFontScale";

export default function App() {
  const {
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
  } = useReadingProgress();

  const { preference: themePreference, setPreference: setThemePreference } = useTheme();
  const { label: fontScaleLabel, cycleScale } = useFontScale();

  const helpDialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="min-h-screen bg-stone-100 pb-8 dark:bg-stone-900">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-brand-700 focus:shadow-floating"
      >
        Ir para o conteúdo
      </a>

      <AppHeader
        username={username}
        onChangeUsername={setUsername}
        themePreference={themePreference}
        onChangeTheme={setThemePreference}
        fontScaleLabel={fontScaleLabel}
        onCycleFontScale={cycleScale}
      />

      <br />
      <br />

      <main id="conteudo" className="px-4">
        <ProgressSummary
          progressPercent={stats.progressPercent}
          completedCount={stats.completedCount}
          totalDays={totalDays}
          daysRemaining={stats.daysRemaining}
          overdue={stats.overdue}
          isOnTrack={stats.isOnTrack}
          hasStartDate={Boolean(startDateValue)}
        />

        <DailyTextCard />

        <DateRangeControls
          startDateValue={startDateValue}
          endDateValue={endDateValue}
          onChangeStartDate={setStartDate}
        />

        <ProgressBackupCard username={username} onImported={reloadFromStorage} />

        <ReadingPlanSection
          daysWithDates={daysWithDates}
          completed={completed}
          todayIndex={stats.todayIndex}
          onToggle={toggleDay}
        />
      </main>

      <AppFooter />

      <FloatingActions helpDialogRef={helpDialogRef} />
      <HelpDialog ref={helpDialogRef} />
    </div>
  );
}

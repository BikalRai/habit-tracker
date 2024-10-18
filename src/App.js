import { useEffect, useState } from "react";
import AddHabit from "./components/AddHabit";
import Habits from "./components/Habits";
import Streak from "./components/Streak";
import CurrentDate from "./components/CurrentDate";
import HeaderLogo from "./components/HeaderLogo";
import Footer from "./components/Footer";

function App() {
  const [habits, setHabits] = useState([]);
  const [streak, setStreak] = useState(0);
  const [currentDay, setCurrentDay] = useState("");
  const [lastStreakDate, setLastStreakDate] = useState(null);
  const [hasCompletedToday, setHasCompletedToday] = useState(false);

  const date = new Date();
  const today = date.toDateString();
  const dateFormat = { weekday: "short" };
  const day = date.toLocaleString("en-US", dateFormat);

  const handleSetHabits = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const handleRemoveHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const handleHabitCompleteForDay = (id, day) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completedDays: {
                ...habit.completedDays,
                [day]: !habit.completedDays[day],
              },
            }
          : habit
      )
    );
  };

  const habitsCompletedCount = habits.filter(
    (habit) => habit.completedDays[day]
  ).length;

  const allCompleted =
    habits.length > 0 && habits.length === habitsCompletedCount;

  useEffect(() => {
    if (currentDay !== day) {
      setCurrentDay(day);
      setHasCompletedToday(false);

      // Reset streak if a day was missed
      if (
        lastStreakDate &&
        new Date(lastStreakDate).getDate() !== new Date(today).getDate() - 1
      ) {
        setStreak(0);
      }
    }
    if (allCompleted && !hasCompletedToday) {
      setHasCompletedToday(true);

      // Only increment streak if it's a new day
      if (today !== lastStreakDate) {
        setStreak((prev) => prev + 1);
        setLastStreakDate(today);
      }
    }
  }, [allCompleted, day, currentDay, hasCompletedToday, lastStreakDate]);

  return (
    <div className='App'>
      <HeaderLogo />
      <CurrentDate today={today} />
      <AddHabit onAddHabit={handleSetHabits} />
      <Habits
        habits={habits}
        onRemoveHabit={handleRemoveHabit}
        day={day}
        onDoneHabit={handleHabitCompleteForDay}
      />
      <Streak streak={streak} />
      {habits.length > 0 && (
        <Footer
          habits={habits}
          allCompleted={allCompleted}
          habitsCompletedCount={habitsCompletedCount}
        />
      )}
    </div>
  );
}

export default App;

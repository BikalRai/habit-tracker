import Habit from "./Habit";

const Habits = ({ habits, onRemoveHabit, onDoneHabit, day }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onRemoveHabit={onRemoveHabit}
          day={day}
          onDoneHabit={onDoneHabit}
        />
      ))}
    </ul>
  );
};

export default Habits;

import Button from "./Button";

const Habit = ({ habit, onRemoveHabit, onDoneHabit, day }) => {
  const handleDoneHabit = (id) => {
    onDoneHabit(habit.id, day);
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={habit.completedDays[day]}
        disabled={habit.completedDays[day]}
        onChange={() => handleDoneHabit(habit.id, day)}
      />
      <span className={habit.completedDays[day] ? "done" : ""}>
        {habit.habitName}
      </span>
      <Button onClick={() => onRemoveHabit(habit.id)}>x</Button>
    </li>
  );
};

export default Habit;

import React, { useState } from "react";
import Button from "./Button";

const AddHabit = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleHabitName = ({ target: { value } }) => {
    setHabitName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newHabit = {
      id,
      habitName,
      completedDays: {
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
      },
    };

    onAddHabit(newHabit);
    setHabitName("");
  };

  return (
    <>
      <h3>Add a Habit</h3>
      <form className='add-habit'>
        <label>Habit name: </label>
        <input
          type='text'
          value={habitName}
          onChange={handleHabitName}
          placeholder='Add a habit'
        />

        <Button onClick={handleSubmit}>Add Habit</Button>
      </form>
    </>
  );
};

export default AddHabit;

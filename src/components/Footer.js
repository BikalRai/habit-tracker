import React from "react";

const Footer = ({ habits, allCompleted, habitsCompletedCount }) => {
  return (
    <div>
      {allCompleted
        ? `Congratulations!! you have completed all your habits for the day!! Yahoo!!`
        : `You have a total of ${habits.length} habits, and you have completed
          ${habitsCompletedCount} (${
            (habitsCompletedCount / habits.length) * 100
          }
          %) of your habits`}
    </div>
  );
};

export default Footer;

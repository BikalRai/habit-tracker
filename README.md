# Habit Tracker

## Description
Habit Tracker is a React-based web application designed to help users build and maintain positive habits. It allows users to create, track, and visualize their daily habits, providing a streak counter to motivate consistent behavior. The stlying has not been implemented, and feel free to adjust the styling and make your own preferable layout.

## Features
- Add custom habits
- Mark habits as complete for each day
- Remove habits
- Track daily completion streak
- View current date and day

## Prerequisites
- Node.js (version 12.0 or higher)
- npm (version 6.0 or higher)

## Technologies Used
- React
- [Any CSS framework, if used]
- [Any other significant libraries]

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/habit-tracker.git
   ```
2. Navigate to the project directory:
   ```
   cd habit-tracker
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## Usage
1. Add a new habit using the "Add Habit" form
2. Mark habits as complete by clicking on them
3. Remove habits by clicking the delete button
4. View your current streak at the bottom of the page
5. The footer shows a summary of your progress for the day

## Components
- `App`: Main component that manages state and renders child components
- `AddHabit`: Form for adding new habits
- `Habits`: Displays the list of habits
- `Streak`: Shows the current streak
- `CurrentDate`: Displays the current date
- `HeaderLogo`: Renders the app's logo
- `Footer`: Shows a summary of completed habits

## State Management
The application uses React's useState and useEffect hooks for state management. Key state variables include:
- `habits`: Array of habit objects
- `streak`: Current streak count
- `lastCompletionDate`: Date when all habits were last completed

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

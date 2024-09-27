// src/components/RecurrenceOptions.js

"use client"; // This line makes the component a client component

import { useRecurrenceStore } from '../store/recurrenceStore';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Select Recurrence:</h2>
      <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions; // Ensure you have this line for default export

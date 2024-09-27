"use client"; // This line makes the component a client component

import { useRecurrenceStore } from '../store/recurrenceStore'; // Import your Zustand store
import { generateRecurringDates } from '../utils/generateRecurringDates'; // Ensure you have this utility function

const CalendarPreview = () => {
  const { startDate, recurrence } = useRecurrenceStore();
  const recurringDates = generateRecurringDates(startDate, recurrence);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recurring Dates</h2>
      <ul>
        {recurringDates.map((date, index) => (
          <li key={index}>{date.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview ;

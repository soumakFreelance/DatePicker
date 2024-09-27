"use client"; // This line makes the component a client component

import { useRecurrenceStore } from '../store/recurrenceStore'; // Your Zustand store
import DatePicker from 'react-datepicker'; // Assuming you're using this library
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrenceStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Select Date Range</h2>
      <div className="flex space-x-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          placeholderText='StartDate'
          startDate={startDate}
          endDate={endDate}
          className="border rounded p-2"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          placeholderText='EndDate'
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="border rounded p-2"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;


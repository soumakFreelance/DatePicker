import RecurrenceOptions from '../components/RecurrenceOptions';
import DateRangePicker from '../components/DateRangePicker';
import CalendarPreview from '../components/CalendarPreview';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <RecurrenceOptions />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}

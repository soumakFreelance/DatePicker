import { create } from 'zustand';

export const useRecurrenceStore = create((set) => ({
  recurrence: 'daily',
  startDate: null,
  endDate: null,
  setRecurrence: (recurrence) => set({ recurrence }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));

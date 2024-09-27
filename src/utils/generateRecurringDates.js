export const generateRecurringDates = (startDate, recurrence) => {
    const dates = [];
    const date = new Date(startDate);
  
    for (let i = 0; i < 10; i++) { 
      dates.push(new Date(date));
  
      switch (recurrence) {
        case 'daily':
          date.setDate(date.getDate() + 1);
          break;
        case 'weekly':
          date.setDate(date.getDate() + 7);
          break;
        case 'monthly':
          date.setMonth(date.getMonth() + 1);
          break;
        case 'yearly':
          date.setFullYear(date.getFullYear() + 1);
          break;
        default:
          break;
      }
    }
  
    return dates;
  };
  
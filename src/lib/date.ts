export function addToTime(
  baseTime: string | number | Date,
  addCount: number,
  { unit = 'MINUTES' }: { unit: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS' },
): Date {
  const currentDate = baseTime instanceof Date ? baseTime : new Date(baseTime);
  const currentDateTime = currentDate?.getTime();
  return new Date(
    {
      HOURS: () => addCount * 60 * 60 * 1000 + currentDateTime,
      MINUTES: () => addCount * 60 * 1000 + currentDateTime,
      SECONDS: () => addCount * 1000 + currentDateTime,
    }[unit](),
  );
}

function formatDate(date) {
  const pad = (num) => num.toString().padStart(2, '0');
  return (
    date.getUTCFullYear() +
    '-' +
    pad(date.getUTCMonth() + 1) +
    '-' +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    ':' +
    pad(date.getUTCMinutes()) +
    ':' +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

// Today's date
const today = new Date();
export const formattedToday = formatDate(today);

// Date 7 days ago
const last7Days = new Date();
last7Days.setDate(today.getDate() - 7);
export const formattedLast7Days = formatDate(last7Days);

// Date 30 days ago
const last30Days = new Date();
last30Days.setDate(today.getDate() - 30);
export const formattedLast30Days = formatDate(last30Days);

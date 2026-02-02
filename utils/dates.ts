// utils/date.ts

export function formatDate(date: Date | string): string {
  const d = new Date(date);

  return d.toLocaleDateString("en-KE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

export function daysBetween(start: Date, end: Date): number {
  const diff = end.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function parseDate(str: string): Date {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, (m as number) - 1, d as number);
}

export function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function daysBetween(fromStr: string, toStr: string): number {
  const ms = parseDate(toStr).getTime() - parseDate(fromStr).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

export function formatDisplayDate(str: string): string {
  const d = parseDate(str);
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

/** Prefix an internal path with the configured base (works on user and project Pages sites). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date, style: 'long' | 'year' = 'long'): string {
  return style === 'year'
    ? String(date.getUTCFullYear())
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}

export function readingTime(text = ''): number {
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 220));
}

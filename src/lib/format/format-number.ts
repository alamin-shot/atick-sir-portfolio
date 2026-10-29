const formatter = new Intl.NumberFormat("en-US");

// 1200 → "1,200". Fixed locale so server and client render the same text.
export function formatNumber(value: number) {
  return formatter.format(value);
}

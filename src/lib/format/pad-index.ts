// 1 → "01", for chapter and phase labels.
export function padIndex(value: number) {
  return String(value).padStart(2, "0");
}

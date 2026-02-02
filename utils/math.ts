// utils/math.ts

export function roundToTwo(value: number): number {
  return Math.round(value * 100) / 100;
}

export function percentage(value: number, percent: number): number {
  return (value * percent) / 100;
}

export function safeDivide(a: number, b: number): number {
  if (b === 0) return 0;
  return a / b;
}

export interface RentalYieldDataPoint {
  zone: string;
  yield: number; // %
}

export const rentalYieldByZone: { [zone: string]: number } = {
  "CBD": 6.5,
  "Westlands": 6.7,
  "Kilimani": 6.8,
  "Karen": 5.8,
  "Runda": 5.7,
  "Muthaiga": 5.6,
  "Kitisuru": 5.9,
  "Gigiri": 6.0,
  "Lavington": 6.2,
  "Kyuna": 6.1,
  "Langata": 6.5,
  "South C": 6.6,
  "Buruburu": 7.0,
  "Donholm": 7.1,
  "Embakasi": 7.2,
  "Imara Daima": 7.0,
  "Umoja": 7.0,
  "Syokimau": 6.8,
  "Roysambu": 7.2,
  "Kasarani": 7.1,
  "Ngong Road": 6.9,
  "Thika Road Belt": 6.8,
  "Kibera": 8.0,
  "Korogocho": 7.9,
  "Dandora": 7.8,
  "Kayole": 7.7,
  "Kawangware": 7.6,
  "Mukuru kwa Njenga": 8.0,
};

export function getRentalYield(zone: string): number {
  return rentalYieldByZone[zone] ?? 6.5; // default 6.5%
}

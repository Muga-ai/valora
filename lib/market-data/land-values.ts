export interface LandValueDataPoint {
  zone: string;
  valuePerSqM: number; // KES
}

export const landValueByZone: { [zone: string]: number } = {
  "CBD": 150000,
  "Westlands": 120000,
  "Kilimani": 110000,
  "Karen": 100000,
  "Runda": 95000,
  "Muthaiga": 90000,
  "Kitisuru": 92000,
  "Gigiri": 97000,
  "Lavington": 105000,
  "Kyuna": 98000,
  "Langata": 85000,
  "South C": 82000,
  "Buruburu": 65000,
  "Donholm": 63000,
  "Embakasi": 60000,
  "Imara Daima": 62000,
  "Umoja": 61000,
  "Syokimau": 50000,
  "Roysambu": 45000,
  "Kasarani": 47000,
  "Ngong Road": 55000,
  "Thika Road Belt": 52000,
  "Kibera": 20000,
  "Korogocho": 18000,
  "Dandora": 22000,
  "Kayole": 25000,
  "Kawangware": 24000,
  "Mukuru kwa Njenga": 15000,
};

export function getLandValue(zone: string): number {
  return landValueByZone[zone] ?? 50000; // default fallback
}

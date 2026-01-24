export interface CapRateDataPoint {
  zone: string;
  capRate: number;
}

export const capRateByZone: { [zone: string]: number } = {
  "CBD": 7,
  "Westlands": 6.8,
  "Kilimani": 7.2,
  "Karen": 6.5,
  "Runda": 6.4,
  "Muthaiga": 6.3,
  "Kitisuru": 6.6,
  "Gigiri": 6.7,
  "Lavington": 6.8,
  "Kyuna": 6.9,
  "Langata": 7.1,
  "South C": 7.0,
  "Buruburu": 7.5,
  "Donholm": 7.4,
  "Embakasi": 7.6,
  "Imara Daima": 7.5,
  "Umoja": 7.5,
  "Syokimau": 7.3,
  "Roysambu": 7.6,
  "Kasarani": 7.6,
  "Ngong Road": 7.2,
  "Thika Road Belt": 7.3,
  "Kibera": 8.5,
  "Korogocho": 8.4,
  "Dandora": 8.3,
  "Kayole": 8.2,
  "Kawangware": 8.2,
  "Mukuru kwa Njenga": 8.5,
};

export function getCapRate(zone: string): number {
  return capRateByZone[zone] ?? 7;
}


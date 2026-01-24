export interface NairobiZone {
  name: string;
  category: "highEnd" | "upperMiddle" | "middle" | "emerging" | "informal";
}

// Core Nairobi & Suburbs
export const nairobiZones: NairobiZone[] = [
  // Central & Core
  { name: "CBD", category: "upperMiddle" },
  { name: "Upper Hill", category: "upperMiddle" },
  { name: "Starehe", category: "upperMiddle" },

  // High‑End / Prestige Estates
  { name: "Karen", category: "highEnd" },
  { name: "Runda", category: "highEnd" },
  { name: "Muthaiga", category: "highEnd" },
  { name: "Kitisuru", category: "highEnd" },
  { name: "Gigiri", category: "highEnd" },
  { name: "Lavington", category: "highEnd" },
  { name: "Kyuna", category: "highEnd" },

  // Upper Middle
  { name: "Westlands", category: "upperMiddle" },
  { name: "Kilimani", category: "upperMiddle" },
  { name: "Kileleshwa", category: "upperMiddle" },
  { name: "Riverside", category: "upperMiddle" },
  { name: "Parklands/Highridge", category: "upperMiddle" },
  { name: "Lang’ata", category: "upperMiddle" },
  { name: "South C", category: "upperMiddle" },

  // Middle Income & Established Estates
  { name: "Buruburu", category: "middle" },
  { name: "Donholm", category: "middle" },
  { name: "Embakasi", category: "middle" },
  { name: "Imara Daima", category: "middle" },
  { name: "South B", category: "middle" },
  { name: "Umoja", category: "middle" },
  { name: "Crown Estate", category: "middle" },
  { name: "Ngong Road", category: "middle" },
  { name: "Roysambu", category: "middle" },
  { name: "Kasarani", category: "middle" },
  { name: "Madaraka Estate", category: "middle" },
  { name: "Makongeni", category: "middle" },
  { name: "Mwiki", category: "middle" },

  // Emerging & Growth Areas
  { name: "Syokimau", category: "emerging" },
  { name: "Ruaka", category: "emerging" },
  { name: "Ngara", category: "emerging" },
  { name: "Dagoretti", category: "emerging" },
  { name: "Riruta", category: "emerging" },
  { name: "Uthiru", category: "emerging" },

  // Informal / High‑Density
  { name: "Kibera", category: "informal" },
  { name: "Korogocho", category: "informal" },
  { name: "Dandora", category: "informal" },
  { name: "Kayole", category: "informal" },
  { name: "Kawangware", category: "informal" },
  { name: "Mukuru kwa Njenga", category: "informal" },

  // Peripheral & Satellite (functionally part of metro)
  { name: "Ngong", category: "emerging" },
  { name: "Ongata Rongai", category: "emerging" },
  { name: "Thika Road Belt", category: "emerging" },
];

export function getNairobiZones(): NairobiZone[] {
  return nairobiZones;
}

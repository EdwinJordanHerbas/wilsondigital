export type Preset = "moderno" | "tradicional" | "minimal";
export const preset: Preset = "tradicional";

export const themeByPreset = {
  moderno:     { heading: "Poppins",     primary: "#00BFA6", radius: "1rem",    hero: "video" },
  tradicional: { heading: "Merriweather",primary: "#8B2E2E", radius: "0.5rem",  hero: "photo" },
  minimal:     { heading: "Oswald",      primary: "#1F8AFA", radius: "0.25rem", hero: "photo" },
} as const;

export const sectionsByPreset: Record<Preset, string[]> = {
  moderno:     ["Hero","Highlights","Carta","Galeria","Reservas","Testimonios","Mapa"],
  tradicional: ["Hero","Historia","Carta","MenuDelDia","Reservas","Testimonios","Mapa"],
  minimal:     ["Hero","CartaCompacta","DeliveryButtons","Horarios","Mapa"],
};

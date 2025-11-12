import Hero from "@/sections/hero";
import Promotions from "@/sections/promotions";
import { preset, sectionsByPreset } from "@/config/preset";
import { getHero, getActivePromotions } from "@/app/sanity/fetch";

export default async function Home() {
  // 1️⃣ Leemos las secciones activas desde el preset
  const sections = sectionsByPreset[preset];

  // 2️⃣ Pedimos datos del Hero y de las Promociones en paralelo
  const [heroData, promotionsData] = await Promise.all([
    getHero().catch(() => null),
    getActivePromotions().catch(() => []),
  ]);

  // 3️⃣ Render dinámico según las secciones activas
  return (
    <main>
      {sections.includes("Hero") && <Hero data={heroData ?? undefined} />}

      {sections.includes("Promotions") && (
        <Promotions items={promotionsData ?? []} />
      )}

      {/* Aquí podrás añadir más secciones según lo que definas en config/preset.ts */}
    </main>
  );
}

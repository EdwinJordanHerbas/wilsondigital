import Hero from "@/sections/hero";
import { preset, sectionsByPreset } from "@/config/preset";
import { getHero } from '@/app/sanity/fetch';

export default async function Home() {
  const sections = sectionsByPreset[preset];
  const heroData = await getHero().catch(() => null);

  return (
    <main>
      {sections.includes("Hero") && <Hero data={heroData ?? undefined} />}
      {/* otras secciones */}
    </main>
  );
}

"use client";
import Image from "next/image";
import { brand } from "@/config/brand";
import { preset, themeByPreset } from "@/config/preset";

export type HeroData = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  bgColor?: string;
  imageUrl?: string; // URL absoluta de Sanity (cdn.sanity.io)
};

export default function Hero({ data }: { data?: HeroData }) {
  const t = themeByPreset[preset];

  const title    = data?.title    ?? brand.name;
  const subtitle = data?.subtitle ?? "Cocina con mimo. Reserva ya.";
  const ctaText  = data?.ctaText  ?? "Reservar";
  const ctaHref  = data?.ctaHref  ?? "/reservas";
  const bg       = data?.bgColor  ?? "transparent";
  const imageUrl = data?.imageUrl;

  return (
    <section
      className="py-20 text-center flex flex-col items-center"
      style={{ background: bg }}
    >
      {/* LOGO */}
      <div className="mb-6">
        <Image
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={160}
          height={60}
          priority
        />
      </div>

      {/* TÍTULO */}
      <h1 className="text-5xl font-bold" style={{ fontFamily: t.heading }}>
        {title}
      </h1>

      {/* SUBTÍTULO */}
      <p className="mt-3 text-lg">{subtitle}</p>

      {/* BOTÓN */}
      <a
        className="inline-block mt-6 px-6 py-3 rounded-lg text-white"
        style={{ background: t.primary, borderRadius: t.radius }}
        href={ctaHref}
      >
        {ctaText}
      </a>

      {/* Imagen opcional desde Sanity (Next/Image) */}
      {imageUrl && (
        <div className="mt-10 relative w-full max-w-5xl h-[380px] mx-auto">
          <Image
            src={imageUrl}
            alt={title || "Hero image"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
        </div>
      )}
    </section>
  );
}

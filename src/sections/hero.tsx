"use client";
import Image from "next/image";
import { brand } from "@/config/brand";
import { preset, themeByPreset } from "@/config/preset";

export type HeroData = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  bgColor?: string;   // color desde Sanity (opcional)
  imageUrl?: string;  // URL absoluta (cdn.sanity.io)
};

export default function Hero({ data }: { data?: HeroData }) {
  const t = themeByPreset[preset];

  const title    = data?.title    ?? brand.name;
  const subtitle = data?.subtitle ?? "Cocina con mimo. Reserva ya.";
  const ctaText  = data?.ctaText  ?? "Reservar";
  const ctaHref  = data?.ctaHref  ?? "/reservas";
  const bg       = data?.bgColor  ?? ""; // si no hay color, usamos gradiente
  const imageUrl = data?.imageUrl;

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={bg ? { background: bg } : {}}
    >
      {/* Gradiente decorativo cuando no hay color desde Sanity */}
      {!bg && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/80 to-white"
        />
      )}

      <div className="container-page relative">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={150}
            height={56}
            priority
          />
        </div>

        {/* Texto */}
        <div className="mx-auto max-w-prose text-center">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-[1.1]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            {title}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-700">
            {subtitle}
          </p>

          <div className="mt-8">
            <a
              href={ctaHref}
              className="btn-primary"
              style={{ borderRadius: t.radius }}
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* Imagen opcional */}
        {imageUrl && (
          <div className="mt-12 md:mt-16 relative mx-auto h-[320px] w-full max-w-5xl">
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
      </div>
    </section>
  );
}

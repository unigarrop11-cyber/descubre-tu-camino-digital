import React from "react";
import { ArrowRight } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── componente ──────────────── */
export default function HeroSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FDF8F4] text-[#3D2C2A]",
        "px-4 py-8 md:px-16 md:py-12 lg:py-16",
        "flex flex-col items-center justify-center"
      )}
    >
      {/* ── luz natural desde izquierda ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
        {/* ── columna texto ── */}
        <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          {/* headline */}
          <h1
            className={cn(
              "font-['Playfair_Display'] font-bold leading-[1.15] tracking-tight",
              "text-[2.25rem] md:text-[3rem] lg:text-[3rem]",
              "text-[#3D2C2A]"
            )}
          >
            No necesitas tenerlo todo resuelto{" "}
            <span className="text-[#E8B4B8]">para dar tu primer paso.</span>
          </h1>

          {/* subheadline */}
          <p
            className={cn(
              "font-['Inter'] text-[1.125rem] leading-relaxed",
              "text-[#3D2C2A]/80 max-w-[65ch]"
            )}
          >
            Descubre diferentes caminos digitales, reconoce cuáles conectan
            contigo y elige uno para comenzar a explorarlo, a tu propio ritmo.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 lg:items-start">
          <a
            href="https://pay.hotmart.com/S107592823S?off=5dewupr6"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "h-12 min-h-[44px] px-8 rounded-full",
              "bg-[#E8B4B8] text-[#FFFBF7] font-['Inter'] font-semibold",
              "text-sm md:text-base tracking-wider",
              "shadow-sm hover:shadow-md hover:brightness-105",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#E8B4B8] focus-visible:ring-offset-2",
              "focus-visible:ring-offset-[#FDF8F4]"
            )}
          >
            QUIERO DAR MI PRIMER PASO
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

            {/* microtexto */}
            <p
              className={cn(
                "font-['Inter'] text-[0.875rem]",
                "text-[#3D2C2A]/60"
              )}
            >
              Accede hoy por $12 · Precio regular $17
            </p>
          </div>
        </div>

        {/* ── mockup real del producto ── */}
        <div
          className={cn(
            "relative flex-1 w-full max-w-lg",
            "flex items-center justify-center"
          )}
        >
          <div
            className={cn(
              "relative w-full aspect-square rounded-2xl",
              "bg-[#FFFBF7] shadow-lg",
              "flex items-center justify-center overflow-hidden",
              "border border-[#E8B4B8]/20"
            )}
          >
            <img
              src="https://fzfncffjekempswnjilr.supabase.co/storage/v1/object/public/cosmos-code-sites/_assets/nGEgK5Qg61NCD9mRq48PtlgVctm1/734eab9c-ac80-4287-9150-6b831be136df/238fbe6a432bbad1db14e32e.png"
              alt="Descubre tu Camino Digital — 4 recursos para un nuevo comienzo"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
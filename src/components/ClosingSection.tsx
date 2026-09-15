import React from "react";
import { ArrowRight } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── componente ──────────────── */
export default function ClosingSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FDF8F4] text-[#3D2C2A]",
        "px-6 py-16 md:px-16 md:py-24"
      )}
    >
      <div className="mx-auto max-w-2xl">
        {/* Headline */}
        <h2
          className="mb-8 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          No necesitas tener todo resuelto{" "}
          <span style={{ color: "#E8B4B8" }}>para comenzar</span>
        </h2>

        {/* Cuerpo */}
        <div
          className="space-y-5 text-[1rem] leading-relaxed md:text-[1.0625rem]"
          style={{ color: "#3D2C2A/85", fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            Si quieres explorar el mundo digital pero todavía no sabes qué
            camino podría encajar contigo, Descubre tu Camino Digital puede
            ayudarte a empezar con mayor dirección.
          </p>
          <p>
            Primero conocerás diferentes posibilidades. Después podrás
            compararlas, reconocer cuáles conectan más contigo y elegir una para
            comenzar a explorarla, paso a paso.
          </p>
          <p>
            No se trata de decidir hoy a qué te dedicarás para siempre. Se trata
            de dejar de sentir que tienes que encontrar todas las respuestas
            antes de dar el primer paso.
          </p>
          <p>
            Puedes comenzar explorando. Puedes aprender mientras avanzas. Y
            puedes descubrir tu camino mientras lo construyes.
          </p>
          <p className="font-medium">
            Si sientes que ha llegado el momento de dejar de mirar tantas
            opciones desde afuera y empezar a descubrir cuáles podrían tener
            sentido para ti, este puede ser tu primer paso.
          </p>
        </div>

        {/* ── Recordatorio de precio ── */}
        <div
          className={cn(
            "relative mx-auto mt-10 max-w-sm rounded-2xl px-6 py-6 text-center",
            "bg-[#FFFBF7] border border-[#E8B4B8]/20 shadow-sm"
          )}
        >
          <p
            className="text-[1.125rem] font-semibold md:text-[1.25rem]"
            style={{ color: "#3D2C2A", fontFamily: "'Inter', sans-serif" }}
          >
            Accede hoy por{" "}
            <span style={{ color: "#E8B4B8" }}>$12</span>
          </p>
          <p
            className="mt-1 text-[0.875rem] md:text-[0.9375rem]"
            style={{ color: "#3D2C2A/55" }}
          >
            <span className="line-through">$17</span> — Precio regular
          </p>
        </div>

        {/* ── CTA final ── */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
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
          </button>

          <p
            className="text-[0.8125rem] md:text-[0.875rem]"
            style={{ color: "#3D2C2A/55", fontFamily: "'Inter', sans-serif" }}
          >
            Acceder a Descubre tu Camino Digital
          </p>
        </div>
      </div>

      {/* Eucalyptus branch decorativa — bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 select-none opacity-40 md:bottom-6 md:right-8"
      >
        <svg
          width="64"
          height="80"
          viewBox="0 0 64 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-[#E8B4B8]"
        >
          <path
            d="M52 78C48 62 38 48 28 42C18 36 10 34 6 36"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="14" cy="30" rx="4" ry="6" fill="currentColor" opacity="0.5" transform="rotate(-20 14 30)" />
          <ellipse cx="24" cy="34" rx="4" ry="6" fill="currentColor" opacity="0.5" transform="rotate(-10 24 34)" />
          <ellipse cx="34" cy="40" rx="3.5" ry="5.5" fill="currentColor" opacity="0.5" transform="rotate(5 34 40)" />
          <ellipse cx="42" cy="50" rx="3" ry="5" fill="currentColor" opacity="0.5" transform="rotate(15 42 50)" />
          <ellipse cx="48" cy="62" rx="2.5" ry="4" fill="currentColor" opacity="0.5" transform="rotate(25 48 62)" />
          <ellipse cx="10" cy="28" rx="2.5" ry="4" fill="currentColor" opacity="0.3" transform="rotate(-30 10 28)" />
          <ellipse cx="20" cy="32" rx="2.5" ry="4" fill="currentColor" opacity="0.3" transform="rotate(-15 20 32)" />
          <ellipse cx="30" cy="38" rx="2" ry="3.5" fill="currentColor" opacity="0.3" transform="rotate(0 30 38)" />
          <ellipse cx="38" cy="46" rx="2" ry="3.5" fill="currentColor" opacity="0.3" transform="rotate(10 38 46)" />
          <ellipse cx="44" cy="56" rx="1.5" ry="3" fill="currentColor" opacity="0.3" transform="rotate(20 44 56)" />
        </svg>
      </div>
    </section>
  );
}
import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── componente ──────────────── */
export default function PricingSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FFFBF7] text-[#3D2C2A]",
        "px-6 py-16 md:px-16 md:py-24"
      )}
    >
      <div className="mx-auto max-w-3xl">
        {/* Headline */}
        <h2
          className="mb-6 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Tu primer paso no tiene que ser{" "}
          <span style={{ color: "#E8B4B8" }}>una gran inversión</span>
        </h2>

        {/* Cuerpo */}
        <p
          className="mx-auto mb-10 max-w-2xl text-center text-[1rem] leading-relaxed md:text-[1.0625rem]"
          style={{ color: "#3D2C2A/80", fontFamily: "'Inter', sans-serif" }}
        >
          El precio accesible responde a la función de este producto: ayudarte a
          obtener orientación antes de realizar inversiones mayores en formación,
          herramientas o desarrollo profesional. Puedes empezar con un pequeño
          paso. Lo importante es que ese paso tenga dirección.
        </p>

        {/* ── Bloque de precio destacado ── */}
        <div
          className={cn(
            "relative mx-auto max-w-md rounded-2xl px-6 py-8 text-center md:px-8 md:py-10",
            "bg-[#FDF8F4] border border-[#E8B4B8]/20 shadow-sm"
          )}
        >
          {/* Precio de lanzamiento */}
          <p
            className="text-[2rem] font-bold leading-tight md:text-[2.5rem]"
            style={{ color: "#3D2C2A", fontFamily: "'Inter', sans-serif" }}
          >
            $12 USD
          </p>
          <p
            className="mt-1 text-[0.9375rem] font-medium md:text-[1rem]"
            style={{ color: "#3D2C2A/60" }}
          >
            Precio de lanzamiento
          </p>

          {/* Precio regular tachado */}
          <p
            className="mt-3 text-[0.875rem] md:text-[0.9375rem]"
            style={{ color: "#3D2C2A/50" }}
          >
            <span className="line-through">$17 USD</span>{" "}
            <span style={{ color: "#E8B4B8" }}>— Precio regular</span>
          </p>

          {/* CTA */}
          <button
            type="button"
            className={cn(
              "mt-6 inline-flex items-center justify-center gap-2",
              "h-12 min-h-[44px] w-full max-w-xs rounded-full",
              "bg-[#E8B4B8] text-[#FFFBF7] font-['Inter'] font-semibold",
              "text-sm md:text-base tracking-wider",
              "shadow-sm hover:shadow-md hover:brightness-105",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#E8B4B8] focus-visible:ring-offset-2",
              "focus-visible:ring-offset-[#FFFBF7]"
            )}
          >
            QUIERO DAR MI PRIMER PASO
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* ── Bloque de garantía ── */}
        <div
          className={cn(
            "mx-auto mt-10 flex max-w-md items-start gap-3 rounded-xl px-5 py-4",
            "bg-[#FDF8F4] border border-[#E8B4B8]/10"
          )}
        >
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-[#E8B4B8]"
            aria-hidden="true"
          />
          <p
            className="text-[0.8125rem] leading-relaxed md:text-[0.875rem]"
            style={{ color: "#3D2C2A/65", fontFamily: "'Inter', sans-serif" }}
          >
            Tienes 7 días de garantía. Si deseas solicitar un reembolso dentro
            de ese período, podrás hacerlo a través de Hotmart, de acuerdo con
            las condiciones aplicables de la plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
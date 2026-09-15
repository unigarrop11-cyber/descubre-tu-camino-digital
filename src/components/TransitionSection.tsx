import React from "react";
import { ArrowRight } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── datos ──────────────── */
const barriers = [
  {
    barrier: "Demasiadas opciones",
    arrow: "Comparar",
    tool: "Mapa de Caminos Digitales",
  },
  {
    barrier: "Miedo a elegir",
    arrow: "Orientarte",
    tool: "Mi Brújula Digital",
  },
  {
    barrier: "No saber cómo comenzar",
    arrow: "Empezar",
    tool: "Mis Primeros 30 Días",
  },
];

/* ──────────────── componente ──────────────── */
export default function TransitionSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FFFBF7] text-[#3D2C2A]",
        "px-6 py-12 md:px-16 md:py-16"
      )}
    >
      <div className="mx-auto max-w-3xl">
        {/* Headline */}
        <h2
          className="mb-8 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Porque conocer las posibilidades{" "}
          <span style={{ color: "#E8B4B8" }}>no es suficiente</span>
        </h2>

        {/* Flujo visual de 3 líneas */}
        <div className="mx-auto max-w-xl space-y-4 md:space-y-5">
          {barriers.map((item, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center gap-2 rounded-xl px-5 py-3 md:flex-row md:gap-3 md:py-3",
                "bg-[#FDF8F4] border border-[#E8B4B8]/15"
              )}
            >
              {/* Barrera */}
              <span
                className="text-[0.9375rem] font-medium leading-snug md:text-[1rem] text-center md:text-left"
                style={{ color: "#3D2C2A/70" }}
              >
                {item.barrier}
              </span>

              {/* Flecha */}
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 text-[#E8B4B8] md:block"
                aria-hidden="true"
              />
              <span
                className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#E8B4B8] md:hidden"
                aria-hidden="true"
              >
                →
              </span>

              {/* Función */}
              <span
                className="text-[0.9375rem] font-semibold leading-snug md:text-[1rem] text-center md:text-left"
                style={{ color: "#3D2C2A" }}
              >
                {item.arrow}
              </span>

              {/* Flecha */}
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 text-[#E8B4B8] md:block"
                aria-hidden="true"
              />
              <span
                className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#E8B4B8] md:hidden"
                aria-hidden="true"
              >
                →
              </span>

              {/* Herramienta */}
              <span
                className="text-[0.9375rem] font-semibold leading-snug md:text-[1rem] text-center md:text-left"
                style={{ color: "#E8B4B8" }}
              >
                {item.tool}
              </span>
            </div>
          ))}
        </div>

        {/* Frase de cierre */}
        <p
          className="mx-auto mt-8 max-w-lg text-center text-[1.0625rem] font-medium leading-relaxed md:text-[1.125rem]"
          style={{ color: "#3D2C2A/80", fontFamily: "'Inter', sans-serif" }}
        >
          Tres herramientas que te ayudan a{" "}
          <span style={{ color: "#E8B4B8" }}>
            comparar, orientarte y comenzar.
          </span>
        </p>
      </div>
    </section>
  );
}
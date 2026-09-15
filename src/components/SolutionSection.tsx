import React from "react";
import { BookOpen, Map, Compass, Calendar } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── datos de las piezas ──────────────── */
const steps = [
  {
    number: 1,
    icon: BookOpen,
    label: "DESCUBRIR",
    title: "Descubre tu Camino Digital",
    description:
      "Una guía sencilla que te explica el mundo digital, siete caminos principales y cómo la Inteligencia Artificial puede ser tu aliada, sin necesidad de ser experta en tecnología.",
  },
  {
    number: 2,
    icon: Map,
    label: "COMPARAR",
    title: "Mapa de Caminos Digitales",
    description:
      "Una herramienta práctica para comparar caminos según qué harías, qué habilidades usarías, qué tendrías que aprender y qué tanto te interesa cada uno.",
  },
  {
    number: 3,
    icon: Compass,
    label: "ORIENTARSE",
    title: "Mi Brújula Digital",
    description:
      "Un ejercicio de autodescubrimiento que conecta tus intereses, habilidades y tiempo disponible con las posibilidades que descubriste, para ayudarte a identificar cuál explorar primero.",
  },
  {
    number: 4,
    icon: Calendar,
    label: "COMENZAR",
    title: "Mis Primeros 30 Días",
    description:
      "Un plan simple para investigar el camino que elegiste, comenzar a desarrollar una primera habilidad y poner en práctica lo que vas aprendiendo.",
  },
];

/* ──────────────── componente ──────────────── */
export default function SolutionSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FDF8F4] text-[#3D2C2A]",
        "px-6 py-12 md:px-16 md:py-16"
      )}
    >
      <div className="mx-auto max-w-4xl">
        {/* Headline */}
        <h2
          className="mb-4 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Un recorrido pensado para acompañarte,{" "}
          <span style={{ color: "#E8B4B8" }}>paso a paso</span>
        </h2>

        {/* Introducción */}
        <p
          className="mx-auto mb-10 max-w-2xl text-center text-[1rem] leading-relaxed md:text-[1.0625rem]"
          style={{ color: "#3D2C2A/80", fontFamily: "'Inter', sans-serif" }}
        >
          Descubre tu Camino Digital no es un curso ni una fórmula. Es una guía
          práctica con tres herramientas que te acompañan en un recorrido de 4
          etapas.
        </p>

        {/* Tarjetas */}
        <div className="mx-auto grid max-w-3xl gap-4 md:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={cn(
                  "relative flex items-start gap-4 rounded-2xl p-5 md:gap-5 md:p-6",
                  "bg-[#FFFBF7] shadow-sm",
                  "border border-[#E8B4B8]/15"
                )}
              >
                {/* Número + ícono */}
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    "bg-[#E8B4B8]/15 text-[#E8B4B8]"
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  {/* Label */}
                  <span
                    className="mb-1 inline-block text-[0.6875rem] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: "#E8B4B8" }}
                  >
                    {step.label}
                  </span>

                  {/* Título */}
                  <h3
                    className="mb-2 text-[1rem] font-semibold leading-snug md:text-[1.125rem]"
                    style={{ color: "#3D2C2A", fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p
                    className="text-[0.875rem] leading-relaxed md:text-[0.9375rem]"
                    style={{ color: "#3D2C2A/80" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
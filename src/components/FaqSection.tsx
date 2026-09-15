import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── datos FAQ ──────────────── */
const faqs = [
  {
    q: "¿No puedo encontrar esto gratis en Internet?",
    a: "Puedes encontrar información suelta, sí. Pero aquí no encontrarás solo información: encontrarás un recorrido organizado para comparar, orientarte y dar tu primer paso sin perderte en el camino.",
  },
  {
    q: "¿Soy nueva en el mundo digital y no me siento muy segura con la tecnología, puedo empezar igual?",
    a: "Sí. Esta guía está pensada para acompañarte desde una etapa inicial. No necesitas conocimientos técnicos avanzados para comenzar a explorar las posibilidades.",
  },
  {
    q: "¿Esto me va a ayudar a generar ingresos?",
    a: "Descubre tu Camino Digital no promete ingresos ni empleo. Su objetivo es ayudarte a comprender las posibilidades, reconocer cuáles conectan contigo y elegir un camino para comenzar a explorarlo. Ese es el primer paso antes de pensar en ingresos.",
  },
  {
    q: "¿Y si elijo mal?",
    a: "No estás eligiendo una profesión definitiva. Estás eligiendo un camino para comenzar a explorar. Mi Brújula Digital te acompaña en esa primera decisión, y siempre puedes seguir descubriendo mientras avanzas.",
  },
];

/* ──────────────── componente ──────────────── */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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
          className="mb-10 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Antes de comenzar,{" "}
          <span style={{ color: "#E8B4B8" }}>
            resolvamos algunas dudas
          </span>
        </h2>

        {/* Lista de acordeón */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl border overflow-hidden transition-all duration-200",
                  "bg-[#FFFBF7] border-[#E8B4B8]/15"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-5 py-4 text-left md:px-6 md:py-5",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#E8B4B8] focus-visible:ring-offset-2",
                    "focus-visible:ring-offset-[#FFFBF7]"
                  )}
                >
                  <span
                    className="text-[0.9375rem] font-medium leading-snug md:text-[1rem]"
                    style={{ color: "#3D2C2A", fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-[#E8B4B8] transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Respuesta */}
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-5 pb-4 md:px-6 md:pb-5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <p
                        className="text-[0.875rem] leading-relaxed md:text-[0.9375rem]"
                        style={{ color: "#3D2C2A/75" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
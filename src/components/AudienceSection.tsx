import React from "react";
import { Check, X } from "lucide-react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── componente ──────────────── */
export default function AudienceSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FDF8F4] text-[#3D2C2A]",
        "px-6 py-16 md:px-16 md:py-24"
      )}
    >
      <div className="mx-auto max-w-4xl">
        {/* Headline */}
        <h2
          className="mb-12 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          ¿Es este{" "}
          <span style={{ color: "#E8B4B8" }}>tu primer paso?</span>
        </h2>

        {/* Dos columnas */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {/* ── Columna: Es para ti si... ── */}
          <div
            className={cn(
              "rounded-2xl px-6 py-7 md:px-8 md:py-9",
              "bg-[#FFFBF7] border border-[#E8B4B8]/20"
            )}
          >
            <h3
              className="mb-5 text-[1.125rem] font-semibold md:text-[1.25rem]"
              style={{
                color: "#3D2C2A",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Es para ti si…
            </h3>

            <ul className="space-y-3">
              {[
                "Sientes que quieres algo diferente, pero no sabes por dónde empezar.",
                "Eres nueva en el mundo digital o todavía tienes poca experiencia explorándolo.",
                "Sientes que necesitas tenerlo todo claro antes de decidir, y eso te ha frenado.",
                "Quieres explorar sin comprometerte de inmediato con una decisión definitiva.",
                "Prefieres avanzar a tu propio ritmo, con dirección.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B4B8]"
                    aria-hidden="true"
                  />
                  <span
                    className="text-[0.9375rem] leading-relaxed md:text-[1rem]"
                    style={{ color: "#3D2C2A/85" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Columna: No es para ti si... ── */}
          <div
            className={cn(
              "rounded-2xl px-6 py-7 md:px-8 md:py-9",
              "bg-[#FFFBF7] border border-[#E8B4B8]/20"
            )}
          >
            <h3
              className="mb-5 text-[1.125rem] font-semibold md:text-[1.25rem]"
              style={{
                color: "#3D2C2A",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              No es para ti si…
            </h3>

            <ul className="space-y-3">
              {[
                "Buscas un método para generar ingresos de forma inmediata.",
                "Ya tienes claridad total sobre tu camino digital y solo necesitas ejecutar.",
                "Buscas una certificación o formación profesional avanzada.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#3D2C2A]/40"
                    aria-hidden="true"
                  />
                  <span
                    className="text-[0.9375rem] leading-relaxed md:text-[1rem]"
                    style={{ color: "#3D2C2A/60" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
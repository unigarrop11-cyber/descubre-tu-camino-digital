import React from "react";

/* ──────────────── helpers inline ──────────────── */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ──────────────── componente ──────────────── */
export default function TransformationSection() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "bg-[#FDF8F4] text-[#3D2C2A]",
        "px-6 py-12 md:px-16 md:py-16"
      )}
    >
      <div className="mx-auto max-w-3xl">
        {/* Headline */}
        <h2
          className="mb-10 text-center text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2.25rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          De la confusión{" "}
          <span style={{ color: "#E8B4B8" }}>a la acción</span>
        </h2>

        {/* Recorrido visual de 4 pasos */}
        <div className="relative mx-auto max-w-2xl space-y-6 md:space-y-8">
          {/* ── Paso 1: Confusión ── */}
          <div className="flex items-start gap-4 md:gap-6">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                "bg-[#E8B4B8]/20 text-[#3D2C2A] font-semibold text-sm"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              1
            </div>
            <div className="flex-1">
              <h3
                className="mb-1 text-[1rem] font-semibold md:text-[1.125rem]"
                style={{ color: "#E8B4B8", fontFamily: "'Inter', sans-serif" }}
              >
                Confusión
              </h3>
              <p
                className="text-[0.9375rem] leading-relaxed md:text-[1rem]"
                style={{ color: "#3D2C2A/85" }}
              >
                Sabes que quieres algo diferente, pero no sabes por dónde
                empezar.
              </p>
            </div>
          </div>

          {/* ── conector ── */}
          <div
            aria-hidden="true"
            className="ml-5 h-4 w-px"
            style={{ backgroundColor: "#E8B4B8/30" }}
          />

          {/* ── Paso 2: Claridad ── */}
          <div className="flex items-start gap-4 md:gap-6">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                "bg-[#E8B4B8]/20 text-[#3D2C2A] font-semibold text-sm"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              2
            </div>
            <div className="flex-1">
              <h3
                className="mb-1 text-[1rem] font-semibold md:text-[1.125rem]"
                style={{ color: "#E8B4B8", fontFamily: "'Inter', sans-serif" }}
              >
                Claridad
              </h3>
              <p
                className="text-[0.9375rem] leading-relaxed md:text-[1rem]"
                style={{ color: "#3D2C2A/85" }}
              >
                Descubres qué posibilidades existen y cómo se relacionan con tus
                habilidades e intereses.
              </p>
            </div>
          </div>

          {/* ── conector ── */}
          <div
            aria-hidden="true"
            className="ml-5 h-4 w-px"
            style={{ backgroundColor: "#E8B4B8/30" }}
          />

          {/* ── Paso 3: Elección ── */}
          <div className="flex items-start gap-4 md:gap-6">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                "bg-[#E8B4B8]/20 text-[#3D2C2A] font-semibold text-sm"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              3
            </div>
            <div className="flex-1">
              <h3
                className="mb-1 text-[1rem] font-semibold md:text-[1.125rem]"
                style={{ color: "#E8B4B8", fontFamily: "'Inter', sans-serif" }}
              >
                Elección
              </h3>
              <p
                className="text-[0.9375rem] leading-relaxed md:text-[1rem]"
                style={{ color: "#3D2C2A/85" }}
              >
                Comparas tus opciones y reconoces cuál conecta más contigo.
              </p>
            </div>
          </div>

          {/* ── conector ── */}
          <div
            aria-hidden="true"
            className="ml-5 h-4 w-px"
            style={{ backgroundColor: "#E8B4B8/30" }}
          />

          {/* ── Paso 4: Acción ── */}
          <div className="flex items-start gap-4 md:gap-6">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                "bg-[#E8B4B8] text-[#FFFBF7] font-semibold text-sm"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              4
            </div>
            <div className="flex-1">
              <h3
                className="mb-1 text-[1rem] font-semibold md:text-[1.125rem]"
                style={{ color: "#E8B4B8", fontFamily: "'Inter', sans-serif" }}
              >
                Acción
              </h3>
              <p
                className="text-[0.9375rem] leading-relaxed md:text-[1rem]"
                style={{ color: "#3D2C2A/85" }}
              >
                Comienzas a explorar ese camino, paso a paso, a tu propio
                ritmo.
              </p>
            </div>
          </div>
        </div>

        {/* Frase de cierre */}
        <div
          className="relative mx-auto mt-10 max-w-xl rounded-2xl px-6 py-5 text-center md:mt-12 md:px-10 md:py-6"
          style={{ backgroundColor: "#FFFBF7" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ border: "1px solid rgba(232, 180, 184, 0.25)" }}
          />
          <p
            className="relative text-[1.0625rem] font-medium leading-relaxed md:text-[1.125rem]"
            style={{ color: "#3D2C2A" }}
          >
            No se trata de tener todas las respuestas hoy.{" "}
            <span style={{ color: "#E8B4B8" }}>
              Se trata de dar el primer paso con dirección.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
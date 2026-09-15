import React from "react";

const eucalyptusBranch = (
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
);

export default function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:px-16 md:py-24"
      style={{ backgroundColor: "#FDF8F4" }}
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
          Sabes que quieres algo diferente.{" "}
          <span style={{ color: "#E8B4B8" }}>Pero no sabes por dónde empezar.</span>
        </h2>

        {/* Cuerpo principal */}
        <div
          className="space-y-5 text-[1.0625rem] leading-[1.75] md:text-[1.125rem]"
          style={{
            color: "#3D2C2A",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          <p>
            Escuchas términos como Community Manager, Asistencia Virtual,
            Freelance, Marketing de Afiliados o Inteligencia Artificial… y en
            lugar de sentir claridad, sientes más confusión.
          </p>

          {/* Frase destacada — mayor protagonismo visual */}
          <div
            className="relative my-8 rounded-2xl px-5 py-6 text-center md:px-8 md:py-8"
            style={{ backgroundColor: "#FFFBF7" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                border: "1px solid rgba(232, 180, 184, 0.25)",
              }}
            />
            <p
              className="relative text-[1.25rem] font-semibold leading-relaxed md:text-[1.375rem]"
              style={{ color: "#3D2C2A" }}
            >
              No es que te falte motivación.{" "}
              <span style={{ color: "#E8B4B8" }}>Es que te falta orientación.</span>
            </p>
          </div>

          <p>
            Quizás has guardado publicaciones, visto videos y escuchado consejos
            distintos, pero sigues sin avanzar porque sientes que necesitas
            tenerlo todo claro antes de elegir.
          </p>

          {/* Preguntas de reflexión — sutilmente diferenciadas */}
          <div
            className="my-6 space-y-3 rounded-xl px-5 py-5"
            style={{ backgroundColor: "rgba(232, 180, 184, 0.08)" }}
          >
            <p className="text-[1rem] italic leading-relaxed md:text-[1.0625rem]" style={{ color: "#3D2C2A" }}>
              ¿Será que yo podría hacer algo de esto? ¿Tendré alguna habilidad que
              sirva? ¿Y si empiezo algo y descubro que no era para mí?
            </p>
          </div>

          {/* Cierre */}
          <p className="pt-2 text-center text-[1.125rem] font-medium leading-relaxed md:text-[1.25rem]">
            Tal vez no empiezas desde cero.{" "}
            <span style={{ color: "#E8B4B8" }}>
              Tal vez ya tienes algo desde donde comenzar.
            </span>
          </p>
        </div>
      </div>

      {/* Eucalyptus branch — bottom right */}
      <div className="pointer-events-none absolute bottom-4 right-4 select-none opacity-60 md:bottom-6 md:right-8">
        {eucalyptusBranch}
      </div>
    </section>
  );
}
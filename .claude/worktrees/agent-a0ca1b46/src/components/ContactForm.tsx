"use client";

import { type FormEvent, useRef, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Formulario enviado correctamente. Nos pondremos en contacto pronto.");
      formRef.current?.reset();
    }, 600);
  }

  return (
    <section
      id="form-contact"
      className="w-full"
      style={{ backgroundColor: "#32373c" }}
    >
      <div className="mx-auto max-w-[800px] px-6 py-15 md:py-[60px]">
        <h2 className="mb-10 text-center text-[28px] font-bold leading-snug text-white">
          {"\u00A1"}Solicita tu evaluaci{"\u00F3"}n de espacio para maximizarlo,
          con tiempos de entrega {"\u00E1"}giles y confiables!
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3.5 text-[15px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-white/60"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3.5 text-[15px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-white/60"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Tel\u00E9fono"
            className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3.5 text-[15px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-white/60"
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={4}
            className="min-h-[120px] w-full resize-y rounded-lg border border-white/30 bg-white/10 px-4 py-3.5 text-[15px] text-white placeholder:text-white/60 outline-none transition-colors focus:border-white/60"
          />

          <input
            type="file"
            name="adjuntos"
            multiple
            className="w-full text-[15px] text-white/60 file:mr-3 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full cursor-pointer rounded-lg py-4 text-base font-bold text-white transition-all duration-200 ease-in-out hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            style={{ backgroundColor: "#0693e3" }}
          >
            {isSubmitting ? "Enviando..." : "Enviar Formulario"}
          </button>
        </form>
      </div>
    </section>
  );
}

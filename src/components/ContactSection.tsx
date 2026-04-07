"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, email, telefono, mensaje } = formData;
    const whatsappMsg = `Hola, soy ${nombre}. Email: ${email}, Tel: ${telefono}. ${mensaje}`;
    window.open(
      `https://wa.me/56932566924?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-brand-dark py-16 md:py-24" id="contacto">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          ¡Solicita tu evaluación de espacio para maximizarlo, con tiempos de
          entrega ágiles y confiables!
        </h2>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              required
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
              className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div>
            <textarea
              placeholder="Mensaje"
              rows={5}
              required
              value={formData.mensaje}
              onChange={(e) =>
                setFormData({ ...formData, mensaje: e.target.value })
              }
              className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/25"
            >
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

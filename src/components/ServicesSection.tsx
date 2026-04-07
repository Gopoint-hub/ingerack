import { Settings, Factory, Wrench } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Settings,
    title: "Optimización de Bodegas",
    description:
      "Aprovecha cada metro cúbico con las soluciones rentables que te proponemos.",
  },
  {
    icon: Factory,
    title: "Fabricación de Racks",
    description:
      "Diseñamos y fabricamos estructuras según las características de tu ubicación geográfica y tu giro de negocio.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Prevenimos y corregimos tus estructuras para la seguridad y durabilidad. Sugerimos un chequeo anual.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-brand-dark py-16 md:py-24" id="servicios">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Nuestros servicios
        </h2>
        <div className="mt-4 text-center">
          <Link
            href="#contacto"
            className="text-brand-blue transition-colors hover:text-brand-blue/80"
          >
            Solicita nuestros servicios aquí
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-brand-blue/30 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                <s.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Package, Truck, Building2 } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Package,
    title: "Proveedores",
    description:
      "Almacena más productos en menos espacio con nuestros rack bodega.",
  },
  {
    icon: Truck,
    title: "Operadores\nlogísticos",
    description:
      "Optimiza el flujo de carga y descarga con racks diseñados para máxima eficiencia.",
  },
  {
    icon: Building2,
    title: "Dueños de\nbodegas",
    description:
      "Aumenta la rentabilidad de tu espacio sin necesidad de expandir tu infraestructura.",
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-brand-dark md:text-4xl">
          ¿Para quiénes son nuestras soluciones?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-brand-mid-gray">
          Durante estos 15 años, hemos aprendido que cada tipo de cliente tiene
          necesidades específicas. Aunque todos comparten la búsqueda de
          optimizar sus recursos y aumentar su rentabilidad.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-blue/90"
          >
            Aquí dínos lo que necesitas
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg hover:border-brand-blue/20"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <s.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-dark whitespace-pre-line">
                {s.title}
              </h3>
              <p className="mt-3 text-brand-mid-gray">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

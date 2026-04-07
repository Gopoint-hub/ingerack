import Image from "next/image";
import Link from "next/link";

export function ClientsSection() {
  return (
    <section className="bg-brand-light-gray py-16 md:py-24" id="quienes-somos">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-brand-dark md:text-4xl">
          Clientes que confían en nuestro equipo
        </h2>

        {/* Client Logos Grid */}
        <div className="mt-12 grid grid-cols-4 items-center gap-6 md:grid-cols-8">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={`/images/clients/client-${i + 1}.webp`}
                alt={`Cliente ${i + 1}`}
                width={100}
                height={100}
                className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Testimonial text */}
        <div className="mt-12 mx-auto max-w-3xl text-center">
          <p className="text-lg text-brand-mid-gray">
            Según la retroalimentación de nuestros clientes habituales, lo que
            les permite confiar plenamente en nuestras sugerencias son:
          </p>
          <ul className="mt-6 space-y-2 text-left inline-block">
            <li className="flex items-start gap-2 text-brand-dark">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
              Nuestros tiempos de entrega.
            </li>
            <li className="flex items-start gap-2 text-brand-dark">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
              Nuestra habilidad para adaptarnos como fabricantes de rack bodega.
            </li>
            <li className="flex items-start gap-2 text-brand-dark">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-blue" />
              La profesionalidad con la que llevamos a cabo cada proyecto.
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-lg"
            >
              Tus racks listos desde 3 semanas, cotiza aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

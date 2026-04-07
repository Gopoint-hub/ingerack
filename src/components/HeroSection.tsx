import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-brand-dark pt-16">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/products/rack-drive-in-front.webp"
          alt="Rack industrial en bodega"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Ingeniería en racks para bodegas
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Diseñamos racks para bodegas para proveedores, operadores logísticos
            y propietarios de centros de almacenamiento.
          </p>
          <Link
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/25"
          >
            Tus racks listos desde 3 semanas, cotiza aquí
          </Link>
        </div>
      </div>
    </section>
  );
}

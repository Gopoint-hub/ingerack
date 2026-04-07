"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    title: "Optimizaci\u00f3n de Bodegas",
    description:
      "Aprovecha cada metro c\u00fabico con las soluciones rentables que te proponemos.",
    href: "/optimizacion-de-bodegas/",
  },
  {
    title: "Fabricaci\u00f3n de Racks",
    description:
      "Dise\u00f1amos y fabricamos estructuras seg\u00fan las caracter\u00edsticas de tu ubicaci\u00f3n geogr\u00e1fica y tu giro de negocio.",
    href: "/rack-industrial/",
  },
  {
    title: "Mantenimiento",
    description:
      "Prevenimos y corregimos tus estructuras para la seguridad y durabilidad. Sugerimos un chequeo anual.",
    href: "/mantenimiento-de-racks/",
  },
];

const galleryImages = [
  { src: "/images/products/rack-selectivo.webp", alt: "Rack selectivo" },
  {
    src: "/images/products/rack-selectivo-frontal.webp",
    alt: "Rack selectivo frontal",
  },
  {
    src: "/images/products/almacenes-picking.webp",
    alt: "Almacenes picking",
  },
  { src: "/images/products/rack-drive-in.webp", alt: "Rack drive-in" },
  {
    src: "/images/products/rack-drive-in-front.webp",
    alt: "Rack drive-in frontal",
  },
  {
    src: "/images/products/rack-drive-in-front-1.webp",
    alt: "Rack drive-in frontal alternativo",
  },
];

export function ServicesSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = Math.max(0, galleryImages.length - 3);

  const scrollPrev = useCallback(() => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  return (
    <section className="bg-[#f5f5f5] py-[60px]">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Heading */}
        <h2 className="mb-10 text-center text-[32px] font-bold leading-tight text-black">
          Nuestros servicios
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={cn(
                "group block rounded-xl bg-white p-8 shadow-sm",
                "transition-all duration-200 ease-in-out",
                "hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              <h3 className="mb-3 text-[20px] font-bold leading-snug text-[#32373c]">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="relative mt-12">
          {/* Desktop: carousel with nav buttons */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${scrollIndex * (100 / 3 + 1.333)}%)`,
                }}
              >
                {galleryImages.map((image) => (
                  <div
                    key={image.src}
                    className="w-[calc(33.333%-11px)] shrink-0"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            {scrollIndex > 0 && (
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Anterior"
                className={cn(
                  "absolute top-1/2 left-2 -translate-y-1/2",
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "bg-white/90 shadow-md backdrop-blur-sm",
                  "transition-colors hover:bg-white"
                )}
              >
                <ChevronLeft className="h-5 w-5 text-[#32373c]" />
              </button>
            )}
            {scrollIndex < maxIndex && (
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Siguiente"
                className={cn(
                  "absolute top-1/2 right-2 -translate-y-1/2",
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "bg-white/90 shadow-md backdrop-blur-sm",
                  "transition-colors hover:bg-white"
                )}
              >
                <ChevronRight className="h-5 w-5 text-[#32373c]" />
              </button>
            )}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:hidden">
            {galleryImages.map((image) => (
              <div key={image.src} className="w-[280px] shrink-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const trustFactors = [
  "Nuestros tiempos de entrega.",
  "Nuestra habilidad para adaptarnos como fabricantes de rack bodega.",
  "La profesionalidad con la que llevamos a cabo cada proyecto.",
];

const clientLogos = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/clients/client-${i + 1}.webp`,
  alt: `Cliente ${i + 1}`,
}));

export function ClientLogos() {
  return (
    <section className="bg-[#f5f5f5] py-[60px]">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-[32px] font-bold leading-tight text-black">
          Clientes que confían en nuestro equipo
        </h2>

        <ul className="mx-auto mt-6 mb-10 flex max-w-[700px] flex-col items-center gap-1 text-center text-base text-[#666]">
          {trustFactors.map((factor) => (
            <li key={factor} className="flex items-start gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#666]" />
              {factor}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={75}
                className="max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

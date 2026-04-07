import Image from "next/image";

export function AlliancesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-brand-dark md:text-4xl">
          Alianzas estratégicas
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`/images/clients/client-alliance-${i}.png`}
              alt={`Alianza estratégica ${i}`}
              width={150}
              height={80}
              className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

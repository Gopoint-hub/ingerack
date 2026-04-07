import Image from "next/image";

export function ProjectsSection() {
  return (
    <section className="bg-brand-light-gray py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-brand-dark md:text-4xl">
          Proyectos realizados
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={`/images/projects/proyecto-${i + 1}.webp`}
                alt={`Proyecto ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 transition-colors group-hover:bg-brand-dark/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

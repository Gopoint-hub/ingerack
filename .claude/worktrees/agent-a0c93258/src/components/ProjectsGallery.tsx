import Image from "next/image";

const projects = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/images/projects/proyecto-${i + 1}.webp`,
  alt: `Proyecto ${i + 1}`,
}));

export function ProjectsGallery() {
  return (
    <section className="bg-white py-15">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-[32px] font-bold text-black">
          Proyectos realizados
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={400}
                height={300}
                className="aspect-4/3 h-auto w-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

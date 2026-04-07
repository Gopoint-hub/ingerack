import Image from "next/image";

const propositions = [
  "Te entregamos tus racks industriales desde 3 semanas.",
  "Tenemos un equipo para el desarme, transporte y montaje de racks.",
  "Ofrecemos optimización de costos por escala.",
  "Garantía mínima de 2 años.",
  "Te asesoramos en la optimización de tu bodega.",
  "Como fabricantes, nos adaptamos a tus iniciativas.",
  "Nuestros racks cumplen con las normas antisísmicas.",
  "Respaldados por el Instituto Chileno del Acero.",
  "Hemos instalado más de 500.000 ubicaciones de palets.",
];

export function ValuePropositions() {
  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-4 md:grid-cols-2 lg:grid-cols-3">
        {propositions.map((text) => (
          <div key={text} className="flex items-start gap-3 p-3">
            <Image
              src="/images/icon-check.svg"
              alt=""
              width={20}
              height={20}
              className="mt-0.5 shrink-0"
            />
            <p className="text-[15px] font-normal leading-snug text-[#32373c]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

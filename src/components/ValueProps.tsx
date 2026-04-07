import Image from "next/image";

const props = [
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

export function ValueProps() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {props.map((text, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg p-4">
              <Image
                src="/images/icon-check.svg"
                alt=""
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 flex-shrink-0"
              />
              <p className="text-base font-medium text-brand-dark">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

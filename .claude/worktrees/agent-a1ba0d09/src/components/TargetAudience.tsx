const audiences = [
  {
    title: "Proveedores",
    description:
      "Almacena más productos en menos espacio con nuestros rack bodega.",
  },
  {
    title: "Operadores logísticos",
    description:
      "Optimiza el flujo de carga y descarga con racks diseñados para máxima eficiencia.",
  },
  {
    title: "Dueños de bodegas",
    description:
      "Aumenta la rentabilidad de tu espacio sin necesidad de expandir tu infraestructura.",
  },
] as const;

export function TargetAudience() {
  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-10 text-center text-[32px] font-bold leading-tight text-black">
          ¿Para quiénes son nuestras soluciones?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-[#e0e0e0] bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <h3 className="mb-3 text-[20px] font-bold text-[#32373c]">
                {audience.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#666]">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

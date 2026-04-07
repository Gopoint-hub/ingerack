import Link from "next/link";

const products = [
  {
    title: "Altillo Metálico",
    description:
      "Duplica o triplica tu capacidad de almacenamiento en altura.",
    href: "/productos/altillos-metalicos/",
  },
  {
    title: "Rack Selectivo",
    description:
      "Almacenar productos de diferentes tamaños a buen precio.",
    href: "/productos/rack-selectivo/",
  },
  {
    title: "Rack Drive In",
    description: "Aprovecha al máximo la profundidad de tu bodega.",
    href: "/productos/rack-drive-in/",
  },
  {
    title: "Rack Dinámico",
    description:
      "Agiliza la rotación de tu inventario con almacenamiento FIFO.",
    href: "/productos/rack-dinamico/",
  },
  {
    title: "Mini Rack",
    description: "Solución modular para cargas más livianas.",
    href: "/productos/mini-rack/",
  },
  {
    title: "Ángulo Ranurado",
    description: "Almacenamiento flexible y económico.",
    href: "/productos/angulos-ranurados/",
  },
  {
    title: "Rack Recojo Manual",
    description:
      "Ideal para selección y manipulación rápida de productos.",
    href: "/productos/rack-bodega/",
  },
  {
    title: "Cantilever",
    description: "Perfecto para productos largos o voluminosos.",
    href: "/productos/estantes-cantilever/",
  },
] as const;

export function ProductsSection() {
  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-[32px] font-bold leading-tight text-black">
          Nuestros productos en racks para bodegas
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group rounded-xl border border-[#e5e5e5] bg-white p-6 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[#0693e3] hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#32373c]">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-[#666]">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

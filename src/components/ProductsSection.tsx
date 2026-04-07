import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Altillo Metálico",
    description: "Duplica o triplica tu capacidad de almacenamiento en altura.",
    image: "/images/products/almacenes-picking.webp",
  },
  {
    title: "Rack Selectivo",
    description: "Almacenar productos de diferentes tamaños a buen precio.",
    image: "/images/products/rack-selectivo.webp",
  },
  {
    title: "Rack Drive In",
    description: "Aprovecha al máximo la profundidad de tu bodega.",
    image: "/images/products/rack-drive-in.webp",
  },
  {
    title: "Rack Dinámico",
    description:
      "Agiliza la rotación de tu inventario con almacenamiento FIFO.",
    image: "/images/products/rack-dinamico-fifo.jpg",
  },
  {
    title: "Mini Rack",
    description: "Solución modular para cargas más livianas.",
    image: "/images/products/rack-selectivo-frontal.webp",
  },
  {
    title: "Ángulo Ranurado",
    description: "Almacenamiento flexible y económico.",
    image: "/images/products/angulo-ranurado.webp",
  },
  {
    title: "Rack Recojo Manual",
    description:
      "Ideal para selección y manipulación rápida de productos.",
    image: "/images/products/rack-drive-in-front-1.webp",
  },
  {
    title: "Cantilever",
    description: "Perfecto para productos largos o voluminosos.",
    image: "/images/products/rack-drive-in-front.webp",
  },
];

export function ProductsSection() {
  return (
    <section className="bg-white py-16 md:py-24" id="productos">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-brand-dark md:text-4xl">
          Nuestros productos en racks para bodegas
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-dark">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-mid-gray">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-blue/90 hover:shadow-lg"
          >
            Maximiza el espacio de tu bodega aquí
          </Link>
        </div>
      </div>
    </section>
  );
}

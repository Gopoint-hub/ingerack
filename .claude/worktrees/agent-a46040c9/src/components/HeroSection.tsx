import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
          {/* Text column */}
          <div className="flex flex-1 flex-col items-start md:max-w-[60%]">
            {/* Chilean flag + heading area */}
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/flag-chile.svg"
                width={36}
                height={24}
                alt="Bandera de Chile"
              />
            </div>

            <h1 className="mb-6 text-[32px] font-bold leading-tight text-black md:text-[42px]">
              Ingeniería en racks para bodegas
            </h1>

            <p className="mb-8 max-w-[600px] text-lg leading-relaxed text-[#666666]">
              Diseñamos racks para bodegas para proveedores, operadores
              logísticos y propietarios de centros de almacenamiento.
            </p>

            <a
              href="#form-contact"
              className="inline-block rounded-lg bg-[#32373c] px-8 py-4 text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Tus racks listos desde 3 semanas, cotiza aquí
            </a>
          </div>

          {/* Guarantee badge column */}
          <div className="flex flex-shrink-0 items-center justify-center md:max-w-[40%]">
            <Image
              src="/images/ingerack-garantia.webp"
              width={392}
              height={239}
              alt="Garantía Ingerack"
              className="h-auto w-full max-w-[392px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#32373c]">
      <div className="mx-auto max-w-[1200px] px-6 py-10 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/ingerack-ico.webp"
            alt="Ingerack"
            width={110}
            height={195}
            className="h-[60px] w-auto"
          />
        </div>

        {/* Contact info */}
        <div className="space-y-1 text-sm text-white/70">
          <p>
            <a
              href="mailto:contacto@ingerack.cl"
              className="text-[#0693e3] hover:underline"
            >
              contacto@ingerack.cl
            </a>
          </p>
          <p>Juan de la Fuente 234 B6, Lampa, Santiago.</p>
          <p>
            <a
              href="tel:+56932566924"
              className="text-white hover:underline"
            >
              +56 9 3256 6924
            </a>
          </p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white/20" />

        {/* Copyright & attribution */}
        <div className="space-y-1 text-[13px] text-white/70">
          <p>Ingerack &reg; 2025 &ndash; Todos los derechos reservados.</p>
          <p>
            Otra web desarrollada por{" "}
            <span className="text-white/90">Agencia SEO Gopoint Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Ingerack"
              width={160}
              height={53}
              className="h-10 w-auto"
            />
            <div className="mt-4 flex items-center gap-2">
              <Image
                src="/images/ingerack-garantia.webp"
                alt="Garantía Ingerack"
                width={60}
                height={36}
                className="h-9 w-auto"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="h-4 w-4 flex-shrink-0 text-brand-blue" />
              <Link
                href="mailto:contacto@ingerack.cl"
                className="transition-colors hover:text-white"
              >
                contacto@ingerack.cl
              </Link>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="h-4 w-4 flex-shrink-0 text-brand-blue" />
              <span>Juan de la Fuente 234 B6, Lampa, Santiago.</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="h-4 w-4 flex-shrink-0 text-brand-blue" />
              <Link
                href="tel:+56932566924"
                className="transition-colors hover:text-white"
              >
                +56 9 3256 6924
              </Link>
            </div>
          </div>

          {/* Chile flag */}
          <div className="flex items-start justify-end">
            <Image
              src="/images/flag-chile.svg"
              alt="Bandera de Chile"
              width={60}
              height={40}
              className="h-10 w-auto rounded"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            Ingerack &reg; 2025 &ndash; Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

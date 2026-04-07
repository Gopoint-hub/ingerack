"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos/" },
  {
    label: "Servicios",
    href: "/servicios-para-racks-industriales/",
    children: [
      { label: "Optimización de bodegas", href: "/optimizacion-de-bodegas/" },
      { label: "Rack Industrial", href: "/rack-industrial/" },
      { label: "Mantenimiento de Racks", href: "/mantenimiento-de-racks/" },
    ],
  },
  {
    label: "Productos",
    href: "/nuestros-productos/",
    children: [
      { label: "Altillos Metálicos", href: "/productos/altillos-metalicos/" },
      {
        label: "Estantes de Ángulos Ranurados",
        href: "/productos/angulos-ranurados/",
      },
      { label: "Cantilever", href: "/productos/estantes-cantilever/" },
      { label: "Mini Rack", href: "/productos/mini-rack-industrial/" },
      {
        label: "Rack Multinivel o Rack Picking Manual",
        href: "/productos/rack-bodega/",
      },
      { label: "Rack Dinámico", href: "/productos/rack-dinamico/" },
      { label: "Rack Drive In", href: "/productos/rack-drive-in/" },
      { label: "Rack Flow", href: "/productos/rack-flow/" },
      { label: "Rack Selectivo", href: "/productos/rack-selectivo/" },
      {
        label: "Rack para Carga Pesada",
        href: "/productos/rack-para-carga-pesada/",
      },
    ],
  },
  { label: "Contacto", href: "/contacto-rack-de-almacenamiento/" },
  { label: "Blog", href: "/blog-estanteria-industrial/" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-[15px] font-medium text-[#32373c] transition-colors hover:text-[#0693e3]"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[260px] pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="rounded-md bg-white py-2 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-[14px] text-[#32373c] transition-colors hover:bg-gray-50 hover:text-[#0693e3]"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-gray-100 px-6 py-3 text-[15px] font-medium text-[#32373c] transition-colors hover:text-[#0693e3]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-3 text-[15px] font-medium text-[#32373c] transition-colors hover:text-[#0693e3]"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Link
          href={item.href}
          onClick={onNavigate}
          className="block bg-gray-50 px-8 py-2.5 text-[14px] text-[#32373c] transition-colors hover:text-[#0693e3]"
        >
          Ver todo
        </Link>
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onNavigate}
            className="block bg-gray-50 px-8 py-2.5 text-[14px] text-[#32373c] transition-colors hover:text-[#0693e3]"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled && "shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Ingerack"
            width={657}
            height={219}
            className="h-auto w-[150px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-[#32373c] transition-colors hover:text-[#0693e3]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex items-center justify-center md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-[#32373c]" />
          ) : (
            <Menu className="h-6 w-6 text-[#32373c]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="border-t border-gray-100 bg-white pb-4">
          {navItems.map((item) => (
            <MobileAccordion
              key={item.href}
              item={item}
              onNavigate={closeMobile}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

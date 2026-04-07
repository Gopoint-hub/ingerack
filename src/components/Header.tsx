"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Optimización de bodegas", href: "#servicios" },
  { label: "Rack Industrial", href: "#productos" },
  { label: "Mantenimiento de Racks", href: "#servicios" },
];

const products = [
  { label: "Altillos Metálicos", href: "#productos" },
  { label: "Estantes de Ángulos Ranurados", href: "#productos" },
  { label: "Cantilever", href: "#productos" },
  { label: "Mini Rack", href: "#productos" },
  { label: "Rack Multinivel o Rack Picking Manual", href: "#productos" },
  { label: "Rack Dinámico", href: "#productos" },
  { label: "Rack Drive In", href: "#productos" },
  { label: "Rack Flow", href: "#productos" },
  { label: "Rack Selectivo", href: "#productos" },
  { label: "Rack para Carga Pesada o Twinlode Racking", href: "#productos" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Ingerack"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-brand-blue"
          >
            Home
          </Link>
          <Link
            href="#quienes-somos"
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-brand-blue"
          >
            Quiénes somos
          </Link>

          {/* Servicios Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-colors hover:text-brand-blue">
              Servicios
              <ChevronDown className="h-3 w-3" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full min-w-[220px] rounded-md bg-brand-dark/95 py-2 shadow-xl backdrop-blur-sm">
                {services.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-brand-blue/20 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Productos Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-colors hover:text-brand-blue">
              Productos
              <ChevronDown className="h-3 w-3" />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full min-w-[320px] rounded-md bg-brand-dark/95 py-2 shadow-xl backdrop-blur-sm">
                {products.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-brand-blue/20 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#contacto"
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-brand-blue"
          >
            Contacto
          </Link>
          <Link
            href="#blog"
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-brand-blue"
          >
            Blog
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-brand-dark/95 px-4 py-4 lg:hidden">
          <Link href="/" className="block py-2 text-sm text-white" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="#quienes-somos" className="block py-2 text-sm text-white" onClick={() => setMobileOpen(false)}>
            Quiénes somos
          </Link>
          <div>
            <button
              className="flex w-full items-center justify-between py-2 text-sm text-white"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Servicios <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4">
                {services.map((item) => (
                  <Link key={item.label} href={item.href} className="block py-1.5 text-sm text-white/70" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              className="flex w-full items-center justify-between py-2 text-sm text-white"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Productos <ChevronDown className={`h-3 w-3 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="pl-4">
                {products.map((item) => (
                  <Link key={item.label} href={item.href} className="block py-1.5 text-sm text-white/70" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="#contacto" className="block py-2 text-sm text-white" onClick={() => setMobileOpen(false)}>
            Contacto
          </Link>
          <Link href="#blog" className="block py-2 text-sm text-white" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
}

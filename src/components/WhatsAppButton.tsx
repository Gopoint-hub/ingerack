"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56932566924?text=Hola!%20Necesito%20más%20información."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [busqueda, setBusqueda] = useState("");

  const numeroWhatsapp = "57"; // <-- pon tu número con código de país, sin el +
  const linkWhatsapp = `https://wa.me/${573216558967}?text=${encodeURIComponent(
    "Hola, tengo una pregunta sobre sus productos"
  )}`;

  function buscar(e) {
    e.preventDefault();
    if (busqueda.trim() !== "") {
      router.push(`/catalogo?buscar=${encodeURIComponent(busqueda)}`);
    }
  }

  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-6 py-4 bg-surface border-b border-[#222] flex-wrap">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo de la tienda"
          width={120}
          height={60}
        />
      </Link>

      <form onSubmit={buscar} className="flex-1 max-w-sm min-w-[200px]">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full bg-bg border border-[#333] text-[#F5F5F0] placeholder-muted rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-amber transition-colors"
          />
        </div>
      </form>

      <div className="flex items-center gap-6 font-body">
        <Link
          href="/"
          className={`transition-colors ${
            pathname === "/"
              ? "text-amber font-semibold"
              : "text-[#F5F5F0] hover:text-amber-light"
          }`}
        >
          Inicio
        </Link>
        <Link
          href="/catalogo"
          className={`transition-colors ${
            pathname === "/catalogo"
              ? "text-amber font-semibold"
              : "text-[#F5F5F0] hover:text-amber-light"
          }`}
        >
          Catálogo
        </Link>
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
        >
          Escríbenos
        </a>
      </div>
    </header>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import beneficios from "@/data/beneficios";

export default function ProductModal({ product, onClose }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const tieneVariasImagenes = product.images.length > 1;

  const numeroWhatsapp = "57"; // <-- pon tu número con código de país, sin el +
  const mensaje = `Hola, estoy interesado en: ${product.name}`;
  const linkWhatsapp = `https://wa.me/${573216558967}?text=${encodeURIComponent(mensaje)}`;

  function imagenAnterior(e) {
    e.stopPropagation();
    setIndiceActual((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  }

  function imagenSiguiente(e) {
    e.stopPropagation();
    setIndiceActual((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl max-w-md w-full p-6 relative max-h-[85vh] overflow-y-auto border border-[#222]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-muted hover:text-[#F5F5F0] z-10"
        >
          &times;
        </button>

        <div className="relative w-full h-56 rounded-lg overflow-hidden bg-bg">
          <Image
            src={product.images[indiceActual]}
            alt={product.name}
            fill
            className="object-contain"
          />

          {tieneVariasImagenes && (
            <>
              <button
                onClick={imagenAnterior}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber hover:text-bg text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                &lsaquo;
              </button>
              <button
                onClick={imagenSiguiente}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-amber hover:text-bg text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                &rsaquo;
              </button>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {product.images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === indiceActual ? "bg-amber" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold mt-4 text-[#F5F5F0]">{product.name}</h2>
        <p className="text-xl text-amber font-bold mt-1">{product.price}</p>
       <p className="text-muted mt-3">{product.description}</p>

<ul className="mt-4 space-y-2">
  {beneficios.map((b, i) => (
    <li key={i} className="flex items-center gap-2 text-[#F5F5F0] text-sm">
      <svg
        className="w-4 h-4 text-amber flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>{b.emoji} {b.texto}</span>
    </li>
  ))}
</ul>
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
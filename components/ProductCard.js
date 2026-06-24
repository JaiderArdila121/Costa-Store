"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductCard({ product, onClick }) {
  const [imagenActual, setImagenActual] = useState(0);
  const tieneVariasImagenes = product.images.length > 1;

  useEffect(() => {
    if (!tieneVariasImagenes) return;

    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % product.images.length);
    }, 2500);

    return () => clearInterval(intervalo);
  }, [tieneVariasImagenes, product.images.length]);

  return (
    <div
      onClick={() => onClick(product)}
      className="cursor-pointer rounded-xl p-4 hover:shadow-lg hover:shadow-amber/10 transition-shadow bg-surface border border-[#222]"
    >
      <div className="relative w-full h-48 overflow-hidden rounded-lg bg-bg">
        {product.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === imagenActual ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {tieneVariasImagenes && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {product.images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === imagenActual ? "bg-amber" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <h3 className="mt-3 font-semibold text-lg text-[#F5F5F0]">{product.name}</h3>
      <p className="text-amber font-bold">{product.price}</p>
    </div>
  );
}
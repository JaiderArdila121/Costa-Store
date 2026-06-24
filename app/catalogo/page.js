"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";
import Particles from "@/components/Particles";

function CatalogoContenido() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const terminoBusqueda = searchParams.get("buscar");
    if (terminoBusqueda) {
      setBusqueda(terminoBusqueda);
    }
  }, [searchParams]);

  const categorias = ["Todos", ...new Set(products.map((p) => p.category))];

  const productosFiltrados = products.filter((p) => {
    const coincideCategoria =
      categoriaActiva === "Todos" || p.category === categoriaActiva;
    const coincideBusqueda = p.name
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#F5F5F0]">Catálogo</h1>

        <div className="relative mb-8 max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
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
            className="w-full bg-surface border border-[#333] text-[#F5F5F0] placeholder-muted rounded-full py-3 pl-12 pr-4 outline-none focus:border-amber transition-colors"
          />
        </div>

        <div className="flex gap-3 mb-8 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-full border ${
                categoriaActiva === cat
                  ? "bg-amber text-bg border-amber"
                  : "bg-transparent text-[#F5F5F0] border-[#333]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productosFiltrados.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default function Catalogo() {
  return (
    <main className="bg-bg min-h-screen relative">
      <Header />
      <div className="absolute inset-0 top-0">
        <Particles count={50} />
      </div>

      <Suspense fallback={<div className="text-center text-muted py-20">Cargando...</div>}>
        <CatalogoContenido />
      </Suspense>
    </main>
  );
}
"use client";

import { useState } from "react";

export default function PreguntarProducto() {
  const [producto, setProducto] = useState("");

  const numeroWhatsapp = "573001234567"; // <-- pon tu número aquí

  function enviarConsulta() {
    if (producto.trim() === "") return;
    const mensaje = `Hola! Estoy buscando el siguiente producto y no lo encontré en su catálogo:\n\n"${producto}"\n\n¿Lo tienen disponible?`;
    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(link, "_blank");
    setProducto("");
  }

  return (
    <section className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="bg-surface border border-[#222] rounded-2xl p-8">

        <div className="flex justify-center mb-4">
          <span className="text-4xl">🔍</span>
        </div>

        <h2 className="font-display text-2xl text-[#F5F5F0] mb-2">
          ¿No encontraste lo que buscas?
        </h2>
        <p className="text-muted mb-6 font-body">
          Escríbenos el producto que tienes en mente y te ayudamos a conseguirlo.
        </p>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarConsulta()}
            placeholder="Ej: Camiseta Argentina talla L, audífonos Sony..."
            className="w-full bg-bg border border-[#333] text-[#F5F5F0] placeholder-muted rounded-xl py-3 px-4 outline-none focus:border-amber transition-colors font-body"
          />
          <button
            onClick={enviarConsulta}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-body font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <span>Preguntar por WhatsApp</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.428a.75.75 0 00.916.916l5.583-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.693 9.693 0 01-4.944-1.355l-.355-.21-3.666.968.984-3.595-.23-.37A9.693 9.693 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
          </button>
        </div>

        <p className="text-muted text-xs mt-4 font-body">
          Al hacer clic se abrirá WhatsApp con tu consulta lista para enviar
        </p>
      </div>
    </section>
  );
}
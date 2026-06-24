import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Header />

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={160}
          height={80}
          className="mb-8"
        />

        <h1 className="font-display text-shimmer text-[clamp(2.2rem,7vw,4.5rem)] uppercase leading-tight">
          Bienvenido a Costa Store
        </h1>

        <p className="text-muted font-body max-w-xl mt-6 mb-10 text-lg">
          Encuentra los mejores productos al mejor precio. Explora nuestro catálogo y haz tu pedido directo por WhatsApp.
        </p>

        <Link
          href="/catalogo"
          className="bg-amber text-bg font-body font-bold px-8 py-4 rounded-xl hover:bg-amber-light transition-colors"
        >
          Ver catálogo
        </Link>
      </section>
    </main>
  );
} 
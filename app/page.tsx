import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-5">
      <h1 className="text-7xl font-bold text-center uppercase">
        Components Glassmorphism
      </h1>

      <Link href={"/docs"}>Docs</Link>
    </main>
  );
}

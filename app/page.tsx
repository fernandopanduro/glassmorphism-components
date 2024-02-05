import Button from "@/components/glassmorphism/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background w-full">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Components Glassmorphism
        </h1>
        <span
          className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
          data-br=":rmu:"
          data-brr="1"
          style={{
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: "inherit",
            maxWidth: "570px",
          }}>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </span>
        <Link href={"/docs"}>Get Started</Link>
        <Link href={"github"} className="flex gap-2">
          <FaGithub size={24} />
          Github
        </Link>
      </section>
    </main>
  );
}

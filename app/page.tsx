import Button from "@/components/glassmorphism/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import bg from "@/public/cube.jpg";

export default function Home() {
  return (
    <main
      className="relative flex min-h-screen flex-col bg-no-repeat bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${bg.src})` }}>
      <section className="mx-auto flex max-w-[980px] h-screen flex-col items-center justify-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Components{" "}
          <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#fff,45%,#c7d2fe,55%,#fff)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Glassmorphism
          </span>
        </h1>
        <span
          className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl text-pretty"
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
        <div className="flex items-center gap-4">
          <Link href={"/docs"}>
            <Button>Get Started</Button>
          </Link>
          <Link
            target="__blanck"
            href={"https://github.com/fernandopanduro/glassmorphism-components"}
            className="flex gap-1">
            <FaGithub size={24} />
            Github
          </Link>
        </div>
      </section>
    </main>
  );
}

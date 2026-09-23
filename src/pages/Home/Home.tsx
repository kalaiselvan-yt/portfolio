import { SheetIndex } from "./components/SheetIndex";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { TitleBlock } from "./components/TitleBlock";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <SheetIndex />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <TitleBlock />
    </div>
  );
}

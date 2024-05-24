import Contact from '@/components/contact/contact';
import { Hero } from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Technologies from '@/components/technologies/technologies';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}

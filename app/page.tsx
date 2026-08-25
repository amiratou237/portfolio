import { About } from "@/src/components/About";
import { Contact } from "@/src/components/Contact";
import { Experience } from "@/src/components/Experience";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Projects } from "@/src/components/Projects";
import { Skills } from "@/src/components/Skills";

const Home = (): React.ReactElement => (
  <>
    <Header />
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);
export default Home;

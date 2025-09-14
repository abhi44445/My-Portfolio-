import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Experience />
      <ProjectsGrid />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;

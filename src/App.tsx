import './index.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { TrainingOverview } from './components/TrainingOverview';
import { TrainingAreas } from './components/TrainingAreas';
import { DetailedTraining } from './components/DetailedTraining';
import { InstagramGrid } from './components/InstagramGrid';
import { Philosophy } from './components/Philosophy';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <TrainingOverview />
        <TrainingAreas />
        <DetailedTraining />
        <section id="videos">
          <InstagramGrid />
        </section>
        <section id="philosophy">
          <Philosophy />
        </section>
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
    </>
  );
}

export default App;
import './index.css';
import { Hero } from './components/Hero';
import { TrainingAreas } from './components/TrainingAreas';
import { InstagramGrid } from './components/InstagramGrid';
import { Philosophy } from './components/Philosophy';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <>
      <div className="grain-overlay" />
      <main>
        <Hero />
        <TrainingAreas />
        <InstagramGrid />
        <Philosophy />
        <FinalCTA />
      </main>
    </>
  );
}

export default App;

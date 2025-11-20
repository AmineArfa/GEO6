import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { LogoCarousel } from './components/sections/LogoCarousel';
import { AIVisibility } from './components/sections/AIVisibility';
import { AnimatedBackground } from './components/layout/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <LogoCarousel />
        <AIVisibility />
      </div>
    </div>
  );
}

export default App;

import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { LogoCarousel } from './components/sections/LogoCarousel';
import { AnimatedBackground } from './components/layout/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <LogoCarousel />
      </div>
    </div>
  );
}

export default App;

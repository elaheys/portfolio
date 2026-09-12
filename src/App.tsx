import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';

/**
 * Page composition. Each section owns its own animations; to add a new
 * section, build a component, drop it in here, and add a matching entry
 * to `navLinks` in src/data/content.ts.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-ground font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        {/* <WhatIDo /> */}
        <Portfolio />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

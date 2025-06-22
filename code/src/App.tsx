import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Documentation } from './components/Documentation';
import { DownloadSDK } from './components/DownloadSDK';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Documentation />
      <DownloadSDK />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
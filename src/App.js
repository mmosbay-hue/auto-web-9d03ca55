import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FaqPage from './components/FaqPage';

export default function App() {
  return (
    <div className="bg-slate-950 overflow-x-hidden">
      <Header />
      <main>
        <FaqPage />
      </main>
      <Footer />
    </div>
  );
}

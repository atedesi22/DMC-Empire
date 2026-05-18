// src/App.jsx
import React, { useState } from 'react';
import Home from './pages/Home';
// Importe tes futures pages au fur et à mesure :
// import Catalog from './pages/Catalog';
// import Cart from './pages/Cart';

function App() {
  // Système de navigation interne simple (idéal pour une PWA ultra-rapide)
  const [currentPage, setCurrentPage] = useState('home');

  // Fonction pour simuler le rendu des routes
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onViewCatalog={() => setCurrentPage('catalog')} />;
      // case 'catalog':
      //   return <Catalog onNavigate={(page) => setCurrentPage(page)} />;
      // case 'cart':
      //   return <Cart onNavigate={(page) => setCurrentPage(page)} />;
      default:
        return <Home onViewCatalog={() => setCurrentPage('catalog')} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-dmc-dark selection:bg-dmc-gold selection:text-dmc-dark">
      {/* Barre de navigation fixe premium */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dmc-dark/80 backdrop-blur-md border-b border-dmc-gold/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Nom de marque */}
          <div 
            className="font-serif text-xl tracking-[0.2em] text-dmc-gold cursor-pointer select-none font-bold"
            onClick={() => setCurrentPage('home')}
          >
            DMC EMPIRE
          </div>

          {/* Liens de navigation */}
          <div className="flex items-center gap-8 text-xs uppercase tracking-widest font-sans">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`transition-colors hover:text-dmc-gold ${currentPage === 'home' ? 'text-dmc-gold font-semibold' : 'text-dmc-cream/70'}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => setCurrentPage('catalog')}
              className={`transition-colors hover:text-dmc-gold ${currentPage === 'catalog' ? 'text-dmc-gold font-semibold' : 'text-dmc-cream/70'}`}
            >
              Catalogue
            </button>
          </div>

          {/* Bouton Panier flottant / Indicateur */}
          <button 
            onClick={() => setCurrentPage('cart')}
            className="relative p-2 text-dmc-cream hover:text-dmc-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Badge de notification (Exemple statique à lier à ton CartContext plus tard) */}
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-dmc-gold to-dmc-goldLight text-dmc-dark font-sans text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Zone d'affichage dynamique de la page active */}
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
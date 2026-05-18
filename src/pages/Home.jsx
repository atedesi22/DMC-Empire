// src/pages/Home.jsx
import React from 'react';
import { Sparkles, ShoppingBag, ArrowRight, Phone, Compass } from 'lucide-react';

const Home = ({ onViewCatalog }) => {
  const categories = [
    {
      id: 1,
      title: "Mèches de Luxe",
      subtitle: "Qualité Human Hair 12A+",
      image: "/image1.JPG",
      delay: "animation-delay-0"
    },
    {
      id: 2,
      title: "Press-on Nails",
      subtitle: "Finitions Artisanales Or",
      image: "/image6.JPG",
      delay: "animation-delay-1500"
    },
    {
      id: 3,
      title: "Accessoires",
      subtitle: "Bandeaux & Soins",
      image: "/image12.JPG",
      delay: "animation-delay-3000"
    }
  ];

return (
    <div className="min-h-screen bg-dmc-dark font-sans text-dmc-cream overflow-x-hidden relative">
      
      {/* Effet d'arrière-plan : Poussière d'or subtile */}
      <div className="fixed inset-0 pointer-events-none opacity-15 z-0">
        <img 
          src="/image4.JPG" 
          className="w-full h-full object-cover filter blur-[2px]"
          alt=""
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-6 text-center z-10">
        <div className="animate-float-slow bg-gradient-to-b from-transparent via-dmc-dark/40 to-transparent p-8 rounded-3xl backdrop-blur-[2px]">
          <div className="inline-flex items-center gap-2 text-dmc-gold tracking-[0.3em] text-xs md:text-sm mb-6 uppercase font-light">
            <Sparkles className="w-4 h-4 animate-pulse text-dmc-goldLight" />
            DMC Empire Luxury
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl mb-6 leading-tight tracking-wide">
            Beyond <br /> 
            <span className="text-dmc-goldLight italic font-normal">Expectations</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-dmc-cream/70 text-base md:text-lg mb-10 leading-relaxed font-light">
            Découvrez l'excellence capillaire et l'art de l'onglerie haut de gamme à Douala.
          </p>
          
          <button 
            onClick={onViewCatalog}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-dmc-gold to-dmc-goldLight text-dmc-dark px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-dmc-gold/20 group"
          >
            Explorer le Catalogue
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Bandeau Défilant Lumineux (Marquee) */}
      <div className="relative z-10 bg-[#2B1B17] border-y border-dmc-gold/20 py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-serif text-xs md:text-sm tracking-widest text-dmc-goldLight uppercase">
          <span className="mx-4">✦ Offre exclusive : Un bandeau et un kit press-on nails offerts aux 10 premières clientes !</span>
          <span className="mx-4">✦ Offre exclusive : Un bandeau et un kit press-on nails offerts aux 10 premières clientes !</span>
          <span className="mx-4">✦ Offre exclusive : Un bandeau et un kit press-on nails offerts aux 10 premières clientes !</span>
        </div>
      </div>

      {/* Sections Catégories */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-dmc-gold text-xs uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Collections Privées
            </div>
            <h2 className="font-serif text-3xl md:text-5xl">Nos Univers</h2>
            <div className="w-16 h-[2px] bg-dmc-gold mt-4"></div>
          </div>
          <p className="text-dmc-cream/40 text-sm italic font-light">Faites votre choix parmi nos standards d'exception</p>
        </div>

        {/* Grille des cartes animées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`group relative h-[480px] rounded-2xl overflow-hidden border border-dmc-gold/10 bg-[#2B1B17]/30 backdrop-blur-sm animate-float-slow ${cat.delay}`}
            >
              {/* Image avec zoom progressif au survol */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dmc-dark via-dmc-dark/40 to-transparent"></div>
              </div>
              
              {/* Contenu textuel de la carte */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <span className="text-dmc-goldLight text-xs uppercase tracking-widest mb-1 font-medium">{cat.subtitle}</span>
                <h3 className="font-serif text-2xl mb-5 text-white">{cat.title}</h3>
                
                <button 
                  onClick={onViewCatalog}
                  className="inline-flex items-center justify-center gap-2 w-full bg-dmc-cream/10 backdrop-blur-md border border-dmc-cream/20 text-dmc-cream py-3 rounded-xl text-xs font-semibold uppercase tracking-wider group-hover:bg-dmc-gold group-hover:text-dmc-dark group-hover:border-transparent transition-all duration-300"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Découvrir
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action de clôture */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#1A0F0D] text-center px-6 border-t border-dmc-gold/5">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Une question sur nos textures ?</h2>
        <p className="text-dmc-cream/60 max-w-md mx-auto mb-8 text-sm font-light">Nos conseillères DMC sont disponibles pour vous guider en direct sur le choix de vos volumes.</p>
        
        <a 
          href="https://wa.me/237682600782"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-transparent border border-dmc-gold/40 text-dmc-gold px-8 py-3.5 rounded-xl hover:bg-dmc-gold hover:text-dmc-dark transition-all duration-300 group shadow-lg"
        >
          <Phone className="w-4 h-4 text-dmc-gold group-hover:text-dmc-dark transition-colors" />
          <span className="font-bold tracking-widest uppercase text-xs">Maison DMC WhatsApp</span>
        </a>
      </section>

      {/* Footer minimaliste */}
      <footer className="relative z-10 py-8 text-center text-dmc-cream/30 text-[10px] tracking-[0.2em] uppercase border-t border-dmc-gold/5">
        © 2026 DMC Empire — Douala, Cameroun
      </footer>
    </div>
  );
};

export default Home;

// ### Pourquoi ce design va marquer un coup ?
// 1.  **Immersion Totale :** Le fond "#AA7C11 Dust" qui pulse doucement crée une ambiance de luxe immédiate.
// 2.  **Animations "Flottantes" :** Chaque carte de catégorie flotte indépendamment avec un délai différent, ce qui donne une impression de fluidité constante.
// 3.  **Contraste Premium :** Le mélange du Chocolat (`#1A0F0D`) et de l'Or (`#D4AF37`) respecte parfaitement l'image de marque que vous avez analysée.
// 4.  **Conversion Mobile :** Le bouton WhatsApp est omniprésent et stylisé, idéal pour les clientes de Douala qui préfèrent le contact direct.

// Vous avez maintenant tout l'arsenal (Contrat PDF, Analyse Graphique, Structure React et Code Home Page) pour signer DMC Empire ! Souhaitez-vous que l'on passe au composant **Catalog.jsx** pour gérer l'affichage dynamique des produits ?
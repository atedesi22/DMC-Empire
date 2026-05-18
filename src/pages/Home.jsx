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
      style: { animation: 'dmcFloat 6s ease-in-out infinite', animationDelay: '0s' }
    },
    {
      id: 2,
      title: "Press-on Nails",
      subtitle: "Finitions Artisanales Or",
      image: "/image6.JPG",
      style: { animation: 'dmcFloat 6s ease-in-out infinite', animationDelay: '1.5s' }
    },
    {
      id: 3,
      title: "Accessoires",
      subtitle: "Bandeaux & Soins",
      image: "/image12.JPG",
      style: { animation: 'dmcFloat 6s ease-in-out infinite', animationDelay: '3s' }
    }
  ];

return (
    <div className="min-h-screen bg-[#1A0F0D] font-sans text-[#FDF5E6] overflow-x-hidden relative">
      
      {/* Styles injectés directement de manière autonome */}
      <style>{`
        @keyframes dmcFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes dmcMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes dmcSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .dmc-floating-hero {
          animation: dmcFloat 5s ease-in-out infinite;
        }
        .dmc-marquee-track {
          display: inline-block;
          animation: dmcMarquee 25s linear infinite;
        }
        .dmc-spin-slow {
          animation: dmcSpin 15s linear infinite;
        }
      `}</style>


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
        <div className="dmc-floating-hero bg-gradient-to-b from-transparent via-[#1A0F0D]/40 to-transparent p-8 rounded-3xl backdrop-blur-[2px]">
          <div className="inline-flex items-center gap-2 text-[#AA7C11] tracking-[0.3em] text-xs md:text-sm mb-6 uppercase font-light">
            <Sparkles className="w-4 h-4 animate-pulse text-[#D4AF37]" />
            DMC Empire Luxury
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl mb-6 leading-tight tracking-wide">
            Beyond <br /> 
            <span className="text-[#D4AF37] italic font-normal">Expectations</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-[#FDF5E6]70 text-base md:text-lg mb-10 leading-relaxed font-light">
            Découvrez l'excellence capillaire et l'art de l'onglerie haut de gamme à Douala.
          </p>
          
          <button 
            onClick={onViewCatalog}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-[#AA7C11]/20 group"
          >
            Explorer le Catalogue
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Bandeau Défilant Lumineux (Marquee) */}
      <div className="relative z-10 bg-[#2B1B17] border-y border-[#AA7C11]/20 py-4 overflow-hidden whitespace-nowrap">
        <div className="dmc-marquee-track inline-block font-serif text-xs md:text-sm tracking-widest text-[#D4AF37] uppercase">
          <span className="mx-4">✦ Offre exclusive : Un bandeau et un kit press-on nails offerts aux 10 premières clientes !</span>
          <span className="mx-4">✦ Offre exclusive : Un bandeau et un kit press-on nails offerts aux 10 premières clientes !</span>
          <span className="mx-4">✦ Offre exclusive : Un bandeau et un kit press-on nails offerts aux 10 premières clientes !</span>
        </div>
      </div>

      {/* Sections Catégories */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#AA7C11] text-xs uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Collections Privées
            </div>
            <h2 className="font-serif text-3xl md:text-5xl">Nos Univers</h2>
            <div className="w-16 h-[2px] bg-[#AA7C11] mt-4"></div>
          </div>
          <p className="text-[#FDF5E6]/40 text-sm italic font-light">Faites votre choix parmi nos standards d'exception</p>
        </div>

        {/* Grille des cartes animées */}
        <div className="dmc-floating-hero grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`group relative h-[480px] rounded-2xl overflow-hidden border border-[#AA7C11]/10 bg-[#2B1B17]/30 backdrop-blur-sm animate-float-slow ${cat.delay}`}
            >
              {/* Image avec zoom progressif au survol */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0D] via-[#1A0F0D]/40 to-transparent"></div>
              </div>
              
              {/* Contenu textuel de la carte */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-1 font-medium">{cat.subtitle}</span>
                <h3 className="font-serif text-2xl mb-5 text-white">{cat.title}</h3>
                
                <button 
                  onClick={onViewCatalog}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#FDF5E6]/10 backdrop-blur-md border border-[#FDF5E6]/20 text-[#FDF5E6] py-3 rounded-xl text-xs font-semibold uppercase tracking-wider group-hover:bg-[#AA7C11] group-hover:text-[#1A0F0D] group-hover:border-transparent transition-all duration-300"
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
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#1A0F0D] text-center px-6 border-t border-[#AA7C11]/5">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Une question sur nos textures ?</h2>
        <p className="text-[#FDF5E6]/60 max-w-md mx-auto mb-8 text-sm font-light">Nos conseillères DMC sont disponibles pour vous guider en direct sur le choix de vos volumes.</p>
        
        <a 
          href="https://wa.me/237682600782"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-transparent border border-[#AA7C11]/40 text-[#AA7C11] px-8 py-3.5 rounded-xl hover:bg-[#AA7C11] hover:text-[#1A0F0D] transition-all duration-300 group shadow-lg"
        >
          <Phone className="w-4 h-4 text-[#AA7C11] group-hover:text-[#1A0F0D] transition-colors" />
          <span className="font-bold tracking-widest uppercase text-xs">Maison DMC WhatsApp</span>
        </a>
      </section>

      {/* Footer minimaliste */}
      <footer className="relative z-10 py-8 text-center text-[#FDF5E6]/30 text-[10px] tracking-[0.2em] uppercase border-t border-[#AA7C11]/5">
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
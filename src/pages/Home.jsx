// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Mèches de Luxe",
      subtitle: "Qualité Human Hair 12A+",
      image: "http://googleusercontent.com/image_collection/image_retrieval/11866448686478002523",
      delay: "0s"
    },
    {
      id: 2,
      title: "Press-on Nails",
      subtitle: "Finitions Artisanales Or",
      image: "http://googleusercontent.com/image_collection/image_retrieval/16520235796984465159",
      delay: "1.5s"
    },
    {
      id: 3,
      title: "Accessoires",
      subtitle: "Bandeaux & Soins",
      image: "http://googleusercontent.com/image_collection/image_retrieval/7376145929290134495",
      delay: "3s"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A0F0D] font-sans text-[#FDF5E6] overflow-x-hidden">
      
      {/* Background #AA7C11 Dust Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <img 
          src="http://googleusercontent.com/image_collection/image_retrieval/18212466824687600529" 
          className="w-full h-full object-cover animate-pulse"
          alt=""
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-float-slow transition-transform">
           <h2 className="text-[#AA7C11] tracking-[0.3em] text-sm md:text-lg mb-4 uppercase font-light">
             DMC Empire Luxury
           </h2>
           <h1 className="font-serif text-5xl md:text-8xl mb-6 leading-tight">
             Beyond <br /> 
             <span className="text-[#AA7C11] italic">Expectations</span>
           </h1>
           <p className="max-w-xl mx-auto text-[#FDF5E6]/70 text-lg mb-10 leading-relaxed font-light">
             Découvrez l'excellence capillaire et l'art de l'onglerie haut de gamme à Douala.
           </p>
           <button className="bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[#AA7C11]/20">
             Explorer le Catalogue
           </button>
        </div>
      </section>

      {/* Promotion Bar */}
      <div className="bg-[#AA7C11]/10 border-y border-[#AA7C11]/30 py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] inline-block px-4">
          <span className="mx-8 font-serif text-[#AA7C11]">OFFRE EXCLUSIVE : UN BANDEAU ET UN KIT PRESS-ON NAILS OFFERTS AUX 10 PREMIÈRES CLIENTES !</span>
          <span className="mx-8 font-serif text-[#AA7C11]">OFFRE EXCLUSIVE : UN BANDEAU ET UN KIT PRESS-ON NAILS OFFERTS AUX 10 PREMIÈRES CLIENTES !</span>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl mb-4">Nos Univers</h2>
            <div className="w-20 h-1 bg-[#AA7C11]"></div>
          </div>
          <p className="text-#FDF5E6/50 italic">Faites glisser pour explorer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-[500px] rounded-3xl overflow-hidden border border-#AA7C11/20 animate-float-slow"
              style={{ animationDelay: cat.delay }}
            >
              {/* Image with overlay */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-#1A0F0D via-#1A0F0D/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-#AA7C11 text-xs uppercase tracking-widest mb-2 block">{cat.subtitle}</span>
                <h3 className="font-serif text-2xl mb-4">{cat.title}</h3>
                <button className="bg-#FDF5E6/10 backdrop-blur-md border border-#FDF5E6/20 text-#FDF5E6 px-6 py-2 rounded-xl text-sm group-hover:bg-#AA7C11 group-hover:text-#1A0F0D transition-all">
                  Voir la collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Footer Call to Action */}
      <section className="py-24 bg-[#2b1b17]/50 text-center px-6">
        <h2 className="font-serif text-4xl mb-8">Besoin d'un conseil ?</h2>
        <a 
          href="https://wa.me/237682600782"
          className="inline-flex items-center gap-4 text-#AA7C11 border border-#AA7C11/50 px-8 py-4 rounded-2xl hover:bg-#AA7C11 hover:text-#1A0F0D transition-all"
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
          <span className="font-bold tracking-widest uppercase text-sm">Discuter avec la Maison DMC</span>
        </a>
      </section>

      <footer className="py-10 text-center text-#FDF5E6/30 text-xs tracking-widest uppercase">
        © 2026 DMC Empire — Douala, Cameroun
      </footer>

      {/* Marquee Keyframes (A ajouter dans votre index.css) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
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
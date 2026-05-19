// src/pages/Catalog.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronRight, Filter, Star, CheckCircle2 } from 'lucide-react';

const Catalog = ({onProductClick}) => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Données factices du catalogue DMC Empire
  const products = [
    {
      id: 'm1',
      name: "Perruque Lace Frontal - Silk",
      category: "Mèches",
      price: 85000,
      image: "/image3.JPG",
      gallery: [
      "/image2.JPG", // Profil
      "/image4.JPG", // Arrière
      "/image5.JPG", // Texture
      "/image6.JPG"  // Porté
    ],
      variants: ["12 pouces", "14 pouces", "16 pouces"],
      description: "Cheveux humains 12A+, texture soyeuse."
    },
    {
      id: 'n1',
      name: "Kit Press-On Nails - Royal Gold",
      category: "Nails",
      price: 15000,
      image: "/image8.JPG",
      gallery: [
      "/image9.JPG", // Profil
      "/image10.JPG", // Arrière
      "/image11.JPG", // Texture
      "/image12.JPG"  // Porté
    ],
      variants: ["S", "M", "L"],
      description: "Design artisanal avec finitions or 24k."
    },
    {
      id: 'a1',
      name: "Bandeau Rouge - DMC Empire",
      category: "Accessoires",
      price: 25000,
      image: "/image13.JPG",
      gallery: [
      "/image14.JPG", // Profil
      "/image15.JPG", // Arrière
      "/image16.JPG", // Texture
      "/image17.JPG"  // Porté
    ],
      variants: ["S", "M", "L"],
      description: "Design unique avec finitions or 24k."
    }
    // Ajoute d'autres produits ici...
  ];

  const categories = ['Tous', 'Mèches', 'Nails', 'Accessoires'];
  const filteredProducts = activeCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#1A0F0D] text-[#FDF5E6] pb-32">
      {/* Effet d'arrière-plan : Poussière d'or subtile */}
      <div className="fixed inset-0 pointer-events-none opacity-15 z-0">
        <img 
          src="/image4.JPG" 
          className="w-full h-full object-cover filter blur-[2px]"
          alt=""
        />
      </div>
      {/* Header du Catalogue */}
      <header className="pt-24 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#AA7C11] rounded-full blur-[120px]"></div>
        </div>
        
        <h2 className="font-serif text-xs uppercase tracking-[0.4em] text-[#AA7C11] mb-3">La Collection Privée</h2>
        <h1 className="font-serif text-4xl md:text-6xl mb-8">Catalogue <span className="italic text-[#D4AF37]">Empire</span></h1>
        
        {/* Filtres de catégories */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all border ${
                activeCategory === cat 
                ? 'bg-[#AA7C11] border-transparent text-[#1A0F0D] font-bold shadow-lg shadow-[#AA7C11]/20' 
                : 'border-[#AA7C11]/30 text-[#FDF5E6]/60 hover:border-[#AA7C11]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grille de Produits */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} onProductClick={onProductClick} />
        ))}
      </section>

      {/* Bannière de réassurance */}
      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <div className="bg-[#2B1B17] border border-[#AA7C11]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2 text-[#D4AF37]">Qualité Certifiée DMC</h3>
            <p className="text-[#FDF5E6]/60 text-sm">Chaque pièce est rigoureusement contrôlée avant expédition à Douala.</p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="text-[#AA7C11] w-8 h-8" />
              <span className="text-[10px] uppercase tracking-tighter">100% Humain</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="text-[#AA7C11] w-8 h-8" />
              <span className="text-[10px] uppercase tracking-tighter">Premium</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Composant Carte Produit interne pour plus de propreté
const ProductCard = ({ product, onAdd, onProductClick }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <div
        
     className="group bg-[#2B1B17]/40 border border-[#AA7C11]/10 rounded-2xl overflow-hidden hover:border-[#AA7C11]/40 transition-all duration-500 shadow-xl">
      {/* Image Container */}
      <div
        onClick={() => onProductClick(product)}
      className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#1A0F0D]/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#AA7C11]/30">
          <span className="text-[#D4AF37] font-bold text-sm">{product.price.toLocaleString()} XAF</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-white group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
        </div>
        <p className="text-[#FDF5E6]/50 text-xs mb-6 line-clamp-2 italic font-light tracking-wide">
          {product.description}
        </p>

        {/* Sélecteur de Variantes (Pouces / Tailles) */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#AA7C11] mb-2 block font-bold">Options disponibles :</span>
          <div className="flex gap-2">
            {product.variants.map(v => (
              <button
                key={v}
                onClick={() => setSelectedVariant(v)}
                className={`text-[10px] px-3 py-1.5 rounded-lg transition-all border ${
                  selectedVariant === v 
                  ? 'bg-[#FDF5E6] border-transparent text-[#1A0F0D] font-bold' 
                  : 'border-[#AA7C11]/20 text-[#FDF5E6]/40 hover:border-[#AA7C11]/50'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton d'action */}
        <button 
          onClick={() => onAdd(product, selectedVariant)}
          className="w-full bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg"
        >
          <ShoppingBag className="w-4 h-4" />
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
};

export default Catalog;
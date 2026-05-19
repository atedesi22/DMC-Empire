// src/pages/ProductPreview.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowLeft, Star, ShieldCheck, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductPreview = ({ product, onBack }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  // Galerie d'images (01 principale + 04 additionnelles)
  // Note : Dans un vrai projet, ces images viendraient de la base de données de chaque produit
  const gallery = [
    product.image,
    ...product.gallery // On suppose que product.gallery contient les 4 autres images
  ];

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="min-h-screen bg-[#1A0F0D] text-[#FDF5E6] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bouton Retour */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#AA7C11] hover:text-[#D4AF37] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Retour au Catalogue</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* GAUCHE : GALERIE PHOTO */}
          <div className="space-y-6">
            <div className="relative group aspect-[4/5] rounded-3xl overflow-hidden border border-[#AA7C11]/20 bg-[#2B1B17]">
              {/* Image Principale avec Animation */}
              <img 
                key={selectedImage}
                src={gallery[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-in-out]"
              />
              
              {/* Flèches de navigation sur l'image (Mobile friendly) */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[#1A0F0D]/40 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-[#AA7C11] transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[#1A0F0D]/40 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-[#AA7C11] transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slider de Miniatures (Thumbnails) */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-20 h-24 md:w-24 md:h-32 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Angle ${index}`} />
                </button>
              ))}
            </div>
          </div>

          {/* DROITE : INFOS PRODUIT */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[#AA7C11] mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Exclusivité DMC</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">{product.name}</h1>
              <div className="text-3xl font-serif text-[#D4AF37] mb-6">
                {product.price.toLocaleString()} XAF
              </div>
              <p className="text-[#FDF5E6]/60 leading-relaxed text-sm md:text-base font-light">
                {product.description} Une pièce d'exception conçue pour sublimer votre beauté naturelle avec le standard de qualité DMC Empire.
              </p>
            </div>

            {/* SÉLECTEUR DE VARIANTE */}
            <div className="mb-10">
              <span className="block text-xs uppercase tracking-widest text-[#AA7C11] mb-4 font-bold">Choisir votre option :</span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-3 rounded-xl text-xs font-bold transition-all border ${
                      selectedVariant === v 
                      ? 'bg-[#FDF5E6] border-transparent text-[#1A0F0D]' 
                      : 'border-[#AA7C11]/30 text-[#FDF5E6]/60 hover:border-[#AA7C11]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTION : AJOUT AU PANIER */}
            <div className="space-y-4 mb-12">
              <button 
                onClick={() => addToCart(product, selectedVariant)}
                className="w-full bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#AA7C11]/20 transition-all active:scale-[0.98]"
              >
                <ShoppingBag className="w-5 h-5" />
                Ajouter au panier
              </button>
            </div>

            {/* AVANTAGES DMC */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-[#AA7C11]/10">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#AA7C11]/10 rounded-full"><ShieldCheck className="w-5 h-5 text-[#D4AF37]" /></div>
                <div className="text-[10px] uppercase tracking-wider font-bold">Qualité <br/> Certifiée</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#AA7C11]/10 rounded-full"><Truck className="w-5 h-5 text-[#D4AF37]" /></div>
                <div className="text-[10px] uppercase tracking-wider font-bold">Livraison <br/> Douala</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProductPreview;


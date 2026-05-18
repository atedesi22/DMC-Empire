// src/components/MobileNavbar.jsx
import React from 'react';
import { Home, Compass, ShoppingBag, Phone } from 'lucide-react';

const MobileNavbar = ({ currentPage, onNavigate, cartCount = 0 }) => {
  
  const navItems = [
    {
      id: 'home',
      label: 'Accueil',
      icon: Home
    },
    {
      id: 'catalog',
      label: 'Catalogue',
      icon: Compass
    },
    {
      id: 'cart',
      label: 'Panier',
      icon: ShoppingBag,
      badge: true
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Phone
    }
  ];

  return (
    <>
      {/* Balise style pour l'effet de micro-rebond au clic */}
      <style>{`
        .dmc-nav-active {
          color: #D4AF37 !important;
          transform: translateY(-4px);
        }
        .dmc-nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Conteneur visible UNIQUEMENT sur mobile (hidden md:flex) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A0F0D]/90 backdrop-blur-lg border-t border-[#AA7C11]/20 pb-safe shadow-[0_-10px_30px_rgba(26,15,13,0.5)]">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`dmc-nav-item flex flex-col items-center justify-center w-16 h-full relative text-[#FDF5E6]/60 ${
                  isActive ? 'dmc-nav-active' : 'hover:text-[#FDF5E6]'
                }`}
              >
                {/* Icône Pro Lucide */}
                <div className="relative p-1">
                  <IconComponent 
                    className="w-5 h-5" 
                    strokeWidth={isActive ? 2.5 : 1.8} 
                  />
                  
                  {/* Badge dynamique pour le Panier */}
                  {item.badge && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] text-[9px] font-black h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center border border-[#1A0F0D] animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </div>

                {/* Libellé de l'onglet */}
                <span className={`text-[10px] tracking-wider mt-1 font-sans ${
                  isActive ? 'font-bold text-[#D4AF37]' : 'font-light'
                }`}>
                  {item.label}
                </span>

                {/* Petite barre lumineuse sous l'icône active */}
                {isActive && (
                  <div className="absolute bottom-1 w-5 h-[2px] bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageSquare } from 'lucide-react';

const Cart = ({ onNavigate }) => {
  const { cart, addToCart, removeFromCart, deleteItem, clearCart, totalPrice, totalItems } = useCart();

  // Numéro de téléphone de DMC Empire (Format international sans le +)
  const WHATSAPP_NUMBER = "237682600782";

  // Fonction magique pour formater le message et rediriger
  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `✨ *NOUVELLE COMMANDE - DMC EMPIRE* ✨\n\n`;
    message += `Bonjour la Maison DMC, je souhaite commander les articles suivants :\n`;
    message += `_____________________________\n\n`;

    cart.forEach((item) => {
      const variantText = item.selectedVariant ? ` (${item.selectedVariant})` : '';
      const subTotal = item.price * item.quantity;
      message += `🛍️ *${item.name}*${variantText}\n`;
      message += `   👉 Qte : ${item.quantity} x ${item.price.toLocaleString()} XAF\n`;
      message += `   💵 Sous-total : *${subTotal.toLocaleString()} XAF*\n`;
      message += `_____________________________\n\n`;
    });

    message += `📊 *RÉCAPITULATIF DE LA COMMANDE* :\n`;
    message += `• Nombre d'articles : ${totalItems}\n`;
    message += `• *TOTAL À PAYER : ${totalPrice.toLocaleString()} XAF*\n\n`;
    message += `📍 _Lieu de livraison : Douala_\n`;
    message += `⚡ _Commande générée via la Mini-App DMC_`;

    // Encodage propre du texte pour les URL web et mobiles
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Optionnel : On vide le panier après redirection pour éviter les doublons
    // clearCart();

    // Redirection instantanée vers WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="p-6 bg-[#2B1B17] rounded-full border border-[#AA7C11]/20 mb-6 animate-pulse">
          <ShoppingBag className="w-12 h-12 text-[#D4AF37]" />
        </div>
        <h2 className="font-serif text-2xl mb-3">Votre panier est vide</h2>
        <p className="text-[#FDF5E6]/60 max-w-sm mb-8 text-sm font-light">
          Parcourez notre collection privée pour y ajouter vos mèches de luxe et kits de nails.
        </p>
        <button
          onClick={() => onNavigate('catalog')}
          className="bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
        >
          Découvrir le Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0F0D] text-[#FDF5E6] pt-12 pb-32 px-6">
      
      {/* Effet d'arrière-plan : Poussière d'or subtile */}
      <div className="fixed inset-0 pointer-events-none opacity-15 z-0">
        <img 
          src="/image4.JPG" 
          className="w-full h-full object-cover filter blur-[2px]"
          alt=""
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        
        {/* Titre */}
        <div className="flex items-center justify-between mb-10 border-b border-[#AA7C11]/10 pb-6">
          <div>
            <h1 className="font-serif text-3xl">Votre Sélection</h1>
            <p className="text-xs text-[#D4AF37] tracking-widest uppercase mt-1">DMC Empire Sac</p>
          </div>
          <button 
            onClick={clearCart}
            className="text-xs text-[#FDF5E6]/40 hover:text-red-400 flex items-center gap-1 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Tout vider
          </button>
        </div>

        {/* Liste des Produits du Panier */}
        <div className="space-y-4 mb-10">
          {cart.map((item) => (
            <div 
              key={item.cartId}
              className="flex items-center gap-4 bg-[#2B1B17]/40 border border-[#AA7C11]/10 p-4 rounded-xl"
            >
              {/* Image Produit */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg border border-[#AA7C11]/20"
              />

              {/* Détails Produit */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base text-white truncate">{item.name}</h3>
                {item.selectedVariant && (
                  <span className="inline-block text-[10px] bg-[#AA7C11]/10 text-[#D4AF37] px-2 py-0.5 rounded mt-1 border border-[#AA7C11]/20">
                    Option : {item.selectedVariant}
                  </span>
                )}
                <div className="text-sm font-bold text-[#D4AF37] mt-2">
                  {(item.price * item.quantity).toLocaleString()} XAF
                </div>
              </div>

              {/* Actions Quantité */}
              <div className="flex flex-col items-end gap-3">
                <button 
                  onClick={() => deleteItem(item.cartId)}
                  className="text-[#FDF5E6]/30 hover:text-red-400 p-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-1.5 bg-[#1A0F0D] border border-[#AA7C11]/20 rounded-lg p-1">
                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="p-1 hover:text-[#D4AF37] transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                  <button 
                    onClick={() => addToCart(item, item.selectedVariant)}
                    className="p-1 hover:text-[#D4AF37] transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note informative sur l'offre */}
        <div className="bg-[#AA7C11]/10 border border-[#AA7C11]/30 rounded-xl p-4 mb-8 text-xs text-[#D4AF37] flex items-center gap-3">
          <span className="text-base">✨</span>
          <p>Félicitations ! Votre commande est éligible à l'offre de lancement : <strong>1 bandeau & 1 kit press-on nails offerts</strong>.</p>
        </div>

        {/* Facture / Récapitulatif Final */}
        <div className="bg-[#2B1B17] border border-[#AA7C11]/20 rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between text-sm text-[#FDF5E6]/60 mb-3">
            <span>Sous-total ({totalItems} articles)</span>
            <span>{totalPrice.toLocaleString()} XAF</span>
          </div>
          <div className="flex justify-between text-sm text-[#FDF5E6]/60 mb-4 pb-4 border-b border-[#AA7C11]/10">
            <span>Livraison (Douala)</span>
            <span className="text-xs uppercase tracking-wider text-[#AA7C11] font-bold">À spécifier</span>
          </div>
          
          <div className="flex justify-between items-end mb-8">
            <span className="font-serif text-lg">Montant total</span>
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">{totalPrice.toLocaleString()} XAF</span>
          </div>

          {/* Bouton d'action WhatsApp Principal */}
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:opacity-95 active:scale-[0.99] transition-all shadow-xl shadow-[#AA7C11]/10"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Envoyer la commande sur WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
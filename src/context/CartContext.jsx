// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Création du contexte du panier
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Chargement du panier initial depuis le localStorage du téléphone/PC
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('dmc_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sauvegarde automatique du panier dans le stockage local dès qu'il change
  useEffect(() => {
    localStorage.setItem('dmc_cart', JSON.stringify(cart));
  }, [cart]);

  // 1. Ajouter un produit au panier (gère les déclinaisons/variantes comme la taille ou les pouces)
  const addToCart = (product, selectedVariant = null) => {
    setCart((prevCart) => {
      // On crée un identifiant unique basé sur l'ID du produit et sa variante (ex: Mèche-22pouces)
      const variantId = selectedVariant ? `${product.id}-${selectedVariant}` : product.id;
      
      const existingItem = prevCart.find(item => item.cartId === variantId);

      if (existingItem) {
        // Si le produit avec cette variante exacte existe déjà, on augmente sa quantité
        return prevCart.map(item =>
          item.cartId === variantId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Sinon, on l'ajoute comme un nouvel élément dans le panier
      return [...prevCart, { 
        ...product, 
        cartId: variantId, 
        selectedVariant, 
        quantity: 1 
      }];
    });
  };

  // 2. Retirer ou diminuer la quantité d'un produit
  const removeFromCart = (cartId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.cartId === cartId);
      
      if (existingItem && existingItem.quantity > 1) {
        // Si la quantité est supérieure à 1, on décrémente
        return prevCart.map(item =>
          item.cartId === cartId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      // Si la quantité tombe à 0, on supprime carrément l'élément
      return prevCart.filter(item => item.cartId !== cartId);
    });
  };

  // 3. Supprimer complètement une ligne du panier d'un seul coup
  const deleteItem = (cartId) => {
    setCart((prevCart) => prevCart.filter(item => item.cartId !== cartId));
  };

  // 4. Vider entièrement le panier (utile après la commande)
  const clearCart = () => {
    setCart([]);
  };

  // 5. Calculs dynamiques pour l'affichage
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      deleteItem,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé pour utiliser le panier rapidement dans n'importe quel fichier
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
};
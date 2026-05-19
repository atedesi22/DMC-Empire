// src/pages/Contact.jsx
import React, { useState } from 'react';
import { MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: 'Demande de renseignements',
    message: ''
  });

  // Numéro de téléphone de DMC Empire (Format international sans le +)
  const WHATSAPP_NUMBER = "237682600782";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      alert("S'il vous plaît, remplissez votre nom et votre message.");
      return;
    }

    // Structuration du message pour WhatsApp
    let text = `✉️ *NOUVEAU MESSAGE - MAISON DMC* ✉️\n\n`;
    text += `👤 *Nom de la cliente :* ${formData.name}\n`;
    text += `📌 *Sujet :* ${formData.subject}\n\n`;
    text += `💬 *Message :*\n"${formData.message}"\n\n`;
    text += `⚡ _Envoyé depuis la plateforme DMC Empire_`;

    // Encodage et redirection
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
      
      
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16 pt-12">
          <h2 className="font-serif text-xs uppercase tracking-[0.4em] text-[#AA7C11] mb-3">Service Clientèle</h2>
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Contactez la <span className="italic text-[#D4AF37]">Maison</span></h1>
          <p className="text-[#FDF5E6]/60 max-w-md mx-auto text-sm font-light">
            Une question sur nos textures de mèches, nos tailles de nails ou une commande sur-mesure ? Nos équipes vous répondent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* GAUCHE : FORMULAIRE DE CONTACT */}
          <div className="bg-[#2B1B17]/40 border border-[#AA7C11]/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
            <h3 className="font-serif text-xl mb-6 text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
              Écrire à un conseiller
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Champ Nom */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#AA7C11] mb-2 font-bold">Votre Nom complet</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Syntia Ndemba" 
                  className="w-full bg-[#1A0F0D] border border-[#AA7C11]/20 rounded-xl px-4 py-3.5 text-sm text-[#FDF5E6] placeholder-[#FDF5E6]/20 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                />
              </div>

              {/* Champ Sujet */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#AA7C11] mb-2 font-bold">Sujet de votre message</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1A0F0D] border border-[#AA7C11]/20 rounded-xl px-4 py-3.5 text-sm text-[#FDF5E6] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                >
                  <option value="Demande de renseignements">Demande de renseignements</option>
                  <option value="Suivi de commande">Suivi de commande</option>
                  <option value="Partenariat / Collaboration">Partenariat / Collaboration</option>
                  <option value="Autre demande">Autre demande</option>
                </select>
              </div>

              {/* Champ Message */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#AA7C11] mb-2 font-bold">Votre Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Dites-nous tout..." 
                  className="w-full bg-[#1A0F0D] border border-[#AA7C11]/20 rounded-xl px-4 py-3.5 text-sm text-[#FDF5E6] placeholder-[#FDF5E6]/20 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Bouton d'envoi vers WhatsApp */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] text-[#1A0F0D] py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-[#AA7C11]/10"
              >
                <Send className="w-3.5 h-3.5" />
                Ouvrir la discussion WhatsApp
              </button>
            </form>
          </div>

          {/* DROITE : INFORMATIONS COMPLÉMENTAIRES */}
          <div className="space-y-8 lg:pt-6">
            
            {/* Carte Infos Directes */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-[#D4AF37]">DMC Empire Luxury</h3>
              <p className="text-sm text-[#FDF5E6]/60 font-light leading-relaxed">
                Notre salon de gestion et notre showroom centralisent les plus beaux standards de capillaires et d'onglerie fine d'Afrique Centrale.
              </p>
            </div>

            {/* Liste des canaux d'infos */}
            <div className="space-y-4 border-t border-[#AA7C11]/10 pt-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2B1B17] rounded-xl border border-[#AA7C11]/20 text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-0.5">Contact Direct</h4>
                  <p className="text-sm text-[#FDF5E6]/60">+237 682 600 782</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2B1B17] rounded-xl border border-[#AA7C11]/20 text-[#D4AF37]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-0.5">Showroom Show</h4>
                  <p className="text-sm text-[#FDF5E6]/60">Douala, Cameroun</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2B1B17] rounded-xl border border-[#AA7C11]/20 text-[#D4AF37]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-0.5">Disponibilité Conciergerie</h4>
                  <p className="text-sm text-[#FDF5E6]/60">Lundi — Samedi : 09h00 - 19h00</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
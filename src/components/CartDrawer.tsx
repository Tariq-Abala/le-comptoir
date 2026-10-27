"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MenuItem, RESTAURANT_INFO } from "@/data/restaurant";

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [clientName, setClientName] = useState("");
  const [pickupTime, setPickupTime] = useState("13:00");
  const [clientNotes, setClientNotes] = useState("");

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let text = `*Bonjour Le Comptoir Bistro Casablanca !*\n\n`;
    text += `Je souhaite passer une commande à emporter pour retrait au restaurant :\n\n`;
    items.forEach((item, index) => {
      text += `• ${item.quantity}x ${item.dish.name} (${item.dish.price * item.quantity} MAD)\n`;
    });
    text += `\n*Total Net à régler :* ${totalAmount} MAD TTC\n`;
    if (clientName) {
      text += `*Nom du client :* ${clientName}\n`;
    }
    if (pickupTime) {
      text += `*Heure souhaitée de retrait :* ${pickupTime}\n`;
    }
    if (clientNotes) {
      text += `*Remarques / Allergies :* ${clientNotes}\n`;
    }
    text += `\nMerci de me confirmer la préparation en cuisine.`;
    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#DFD7C7] animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EAE5D9] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C06041]/10 text-[#C06041] flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-[#1C1917]">
                Votre Commande
              </h2>
              <p className="text-[11px] text-[#78716C]">
                {totalItemsCount} article{totalItemsCount > 1 ? "s" : ""} sélectionné{totalItemsCount > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-black hover:bg-stone-100 rounded-xl transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#DFD7C7]/40 flex items-center justify-center text-[#78716C]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <p className="font-serif font-bold text-base text-[#1C1917]">
                  Votre panier est actuellement vide
                </p>
                <p className="text-xs text-[#78716C] mt-1 max-w-xs">
                  Parcourez notre carte des saisons et ajoutez vos entrées, plats ou desserts préférés pour commande à emporter.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.dish.id}
                  className="p-3.5 rounded-2xl bg-white border border-[#EAE5D9] shadow-2xs flex items-center gap-3.5"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                    <Image
                      src={item.dish.image}
                      alt={item.dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-xs text-[#1C1917] truncate">
                      {item.dish.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C06041] mt-0.5">
                      {item.dish.price} MAD
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#DFD7C7] rounded-lg bg-[#FAF9F5] p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, -1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-stone-200 rounded text-stone-700"
                          aria-label="Diminuer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#1C1917]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-stone-200 rounded text-stone-700"
                          aria-label="Augmenter"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#78716C] font-mono">
                        = {(item.dish.price * item.quantity).toLocaleString()} MAD
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.dish.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 transition-colors"
                    aria-label="Supprimer du panier"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Order fields */}
              <div className="pt-4 border-t border-[#EAE5D9] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block">
                  Informations de Retrait :
                </span>
                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Votre Nom ou Prénom :
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Karim Benslimane"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Heure souhaitée de retrait :
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041]"
                  >
                    <option value="12:30">Déjeuner — 12h30</option>
                    <option value="13:00">Déjeuner — 13h00</option>
                    <option value="13:30">Déjeuner — 13h30</option>
                    <option value="14:00">Déjeuner — 14h00</option>
                    <option value="19:45">Dîner — 19h45</option>
                    <option value="20:15">Dîner — 20h15</option>
                    <option value="20:45">Dîner — 20h45</option>
                    <option value="21:15">Dîner — 21h15</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Instructions particulières (allergies, cuisson...) :
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Sans oignons, sauce à part..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations & WhatsApp Button */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#EAE5D9] bg-white space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#78716C]">
                <span>Sous-total plats :</span>
                <span>{totalAmount.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between text-[#78716C]">
                <span>Emballage éco-responsable :</span>
                <span className="text-[#5A6B47] font-medium">Offert</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1C1917] pt-2 border-t border-[#EAE5D9]">
                <span>Total Net TTC :</span>
                <span className="text-[#C06041] font-serif text-base">
                  {totalAmount.toLocaleString()} MAD
                </span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Transmettre la commande sur WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>

            <div className="text-[10px] text-center text-[#78716C] leading-snug">
              Simulation interactive : ouvre directement WhatsApp avec le détail prérempli de votre commande sans passer par un serveur intermédiaire.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

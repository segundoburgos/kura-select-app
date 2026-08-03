"use client";

import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import StoryCarousel from "@/components/StoryCarousel";
import ProfileCard from "@/components/ProfileCard";
import AuthModal from "@/components/AuthModal";
import { useState } from "react";

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const stories = [
    { id: '1', name: 'Yumi', avatarSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', icon: '✨', isLive: true },
    { id: '2', name: 'Valeria', avatarSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', icon: '👩🏽' }
  ];

  const categories = [
    {
      title: "ESCORT Golden",
      id: "golden",
      profiles: [
        { id: 'yumi', name: 'Yumi', videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-black-dress-41551-large.mp4', isLive: true, nationalityFlag: '🇨🇱', isTop: true, hasChat: true, status: 'disponible' as const },
        { id: 'valeria', name: 'Valeria M.', videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-black-dress-41551-large.mp4', nationalityFlag: '🇨🇴', isTop: true, hasChat: true, status: 'disponible' as const },
        { id: 'camila', name: 'Camila', videoSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', nationalityFlag: '🇻🇪', isTop: true, hasChat: true, status: 'fulltime' as const },
        { id: 'sofia', name: 'Sofia', videoSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', nationalityFlag: '🇦🇷', isTop: false, hasChat: false, status: 'nodisponible' as const },
      ]
    },
    {
      title: "ESCORT Vip",
      id: "vip",
      profiles: [
        { id: 'dani', name: 'Dani', videoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80', nationalityFlag: '🇨🇱', isTop: true, hasChat: true, status: 'disponible' as const },
        { id: 'laura', name: 'Laura', videoSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', nationalityFlag: '🇨🇴', isTop: false, hasChat: true, status: 'fulltime' as const },
      ]
    },
    {
      title: "SECTOR Masajes",
      id: "masajes",
      profiles: [
        { id: 'spa', name: 'Angels Spa', videoSrc: 'https://images.unsplash.com/photo-1600334129128-685054110230?auto=format&fit=crop&w=600&q=80', nationalityFlag: '🇨🇱', isTop: true, hasChat: false, status: 'disponible' as const },
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* NOTIFICACIÓN WEB PUSH FLOTANTE SIMULADA */}
      <div className="fixed top-24 sm:top-16 right-4 left-4 sm:left-auto sm:max-w-sm z-50 bg-brand-card border-2 border-brand-border rounded-2xl p-3 shadow-2xl flex items-center gap-3 transition-all duration-500 animate-bounce">
          <div className="relative flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" className="w-10 h-10 rounded-full object-cover" alt="Avatar" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-brand-emerald rounded-full border-2 border-brand-carbon"></span>
          </div>
          <div className="flex-1 text-xs">
              <span className="font-black text-white block">👩🏻 Yumi se acaba de conectar</span>
              <span className="text-[10px] text-slate-400">Las Condes • Disponible ahora</span>
          </div>
          <button className="px-2.5 py-1.5 bg-brand-emerald text-white font-extrabold text-[10px] rounded-lg">Ver</button>
      </div>

      <section className="block pb-24">
        
        {/* Banner Promo */}
        <div className="px-4 max-w-7xl mx-auto mt-6 mb-4">
            <div className="bg-gradient-to-r from-amber-950/40 via-brand-card to-brand-carbon border border-brand-gold/60 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3 shadow-lg hover:shadow-brand-gold/10 transition-shadow">
                <div className="space-y-1 text-center sm:text-left">
                    <span className="bg-brand-gold text-slate-950 font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase inline-block mb-1">🎁 PROMO CREADORAS</span>
                    <h2 className="text-sm font-black text-white">¡Regístrate Hoy y Obtén <span className="text-brand-gold">20 DÍAS GRATIS</span> en Canal Destacada!</h2>
                    <p className="text-[11px] text-slate-400">Recibe tus primeros clientes por WhatsApp sin pagar nada.</p>
                </div>
                <button className="w-full sm:w-auto px-4 py-2.5 bg-brand-emerald hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all">🚀 Probar 20 Días Gratis</button>
            </div>
        </div>

        <StoryCarousel stories={stories} />
        <FilterBar />

        {/* Categorías */}
        {categories.map((cat) => (
          <div key={cat.id} className="px-4 max-w-7xl mx-auto mt-10">
            {/* Cabecera de Categoría */}
            <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  {cat.title.split(' ')[0]} <span className="text-brand-gold font-normal italic" style={{ fontFamily: 'serif' }}>{cat.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                
                {/* Leyenda de Estados */}
                <div className="flex justify-center gap-4 mt-3 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                   <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-md"></span> Disponible</div>
                   <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-md"></span> Fulltime</div>
                   <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-md"></span> No Disponible</div>
                </div>
            </div>

            {/* Grid de Perfiles (Diseño ajustado a las proporciones de las imágenes) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4">
              {cat.profiles.map(profile => (
                <ProfileCard key={profile.id} {...profile} />
              ))}
            </div>
          </div>
        ))}
      </section>
      
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

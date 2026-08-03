"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProfileTabs from "@/components/ProfileTabs";
import TimelinePost from "@/components/TimelinePost";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("muro");

  const posts = [
    {
      id: "1",
      authorName: "Yumi",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      timeAgo: "Hace 2 horas",
      content: "¡Hola chicos! Hoy estaré disponible en Las Condes a partir de las 20:00hrs. \n¡Tengo un conjunto nuevo que quiero mostrarles! 😉✨",
      mediaUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      mediaType: "image" as const,
      likes: 124,
      comments: 18,
    },
    {
      id: "2",
      authorName: "Yumi",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      timeAgo: "Ayer",
      content: "¿Listos para el fin de semana? Yo ya estoy calentando motores 🔥🥂",
      likes: 342,
      comments: 45,
    }
  ];

  const reviews = [
    { id: 1, user: "Cliente_Feliz", rating: "👍", comment: "Excelente atención, Yumi es súper simpática y la pasamos increíble. Muy recomendada." },
    { id: 2, user: "Anonimo_Stgo", rating: "👍", comment: "Las fotos 100% reales. El lugar está impecable y huele muy bien." },
    { id: 3, user: "VipMember", rating: "👎", comment: "Se demoró un poco en abrir la puerta, pero luego compensó el tiempo." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-brand-carbon min-h-screen pb-24">
        {/* Cover Photo */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b163a] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative -mt-20">
          {/* Profile Info Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-6">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" className="w-32 h-32 rounded-full border-4 border-[#1b163a] object-cover shadow-2xl" alt="Yumi Profile" />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#1b163a] shadow-md" title="Disponible"></div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                Yumi <span className="text-brand-gold text-lg">✓</span>
                <span className="text-lg bg-black/40 rounded-full px-2 py-0.5 backdrop-blur-sm border border-white/10 ml-2">🇨🇱</span>
              </h1>
              <p className="text-sm text-slate-300 font-bold mt-1">21 Años • Las Condes, Santiago</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                <span className="bg-[#29224f] border border-[#3b326b] px-3 py-1 rounded-full text-xs text-brand-gold font-bold">12 Recomendaciones 👍</span>
                <span className="bg-[#29224f] border border-[#3b326b] px-3 py-1 rounded-full text-xs text-white font-bold">VIP Elite Primero 🌟</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-6 py-3 bg-brand-emerald hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                Agendar Cita
              </button>
              <button className="flex-1 sm:flex-none px-6 py-3 bg-[#3b326b] hover:bg-[#4b427b] text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Mensaje Privado
              </button>
            </div>
          </div>

          <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* TAB CONTENTS */}
          <div className="py-4">
            
            {activeTab === "muro" && (
              <div className="space-y-4 max-w-2xl">
                {/* Nuevo Post Input */}
                <div className="bg-[#1b163a] border border-[#3b326b] rounded-xl p-4 flex gap-3 items-center cursor-pointer hover:bg-white/5 transition-colors">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" className="w-10 h-10 rounded-full" alt="Yumi" />
                  <div className="flex-1 bg-brand-carbon rounded-full px-4 py-2.5 text-sm text-slate-400">¿Qué estás pensando, Yumi?</div>
                  <button className="text-slate-400 hover:text-brand-gold"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></button>
                </div>
                
                {posts.map(post => <TimelinePost key={post.id} {...post} />)}
              </div>
            )}

            {activeTab === "info" && (
              <div className="bg-[#1b163a] border border-[#3b326b] rounded-xl p-6 text-slate-300">
                <h3 className="text-white font-bold text-xl mb-4">Sobre mí</h3>
                <p className="mb-6 leading-relaxed">¡Hola! Soy Yumi, una chica apasionada y detallista. Me encanta crear momentos inolvidables y que te relajes al máximo. Mi departamento es discreto y acondicionado especialmente para tus sentidos.</p>
                
                <h3 className="text-white font-bold text-xl mb-4">Detalles</h3>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  <li><strong>Estatura:</strong> 1.65m</li>
                  <li><strong>Medidas:</strong> 90-60-95</li>
                  <li><strong>Ojos:</strong> Miel</li>
                  <li><strong>Depilación:</strong> Completa</li>
                  <li><strong>Atiende a:</strong> Hombres, Mujeres, Parejas</li>
                  <li><strong>Lugar:</strong> Depto propio (Las Condes)</li>
                </ul>
              </div>
            )}

            {activeTab === "resenas" && (
              <div className="max-w-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-bold text-xl">Reseñas de Clientes</h3>
                  <button className="px-4 py-2 bg-[#3b326b] hover:bg-[#4b427b] text-white font-bold text-sm rounded-lg">Dejar una Reseña</button>
                </div>
                
                <div className="space-y-4">
                  {reviews.map(rev => (
                    <div key={rev.id} className="bg-[#1b163a] border border-[#3b326b] rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-brand-carbon flex items-center justify-center text-xs font-bold text-slate-400">{rev.user[0]}</div>
                        <div>
                          <p className="text-sm font-bold text-white">{rev.user}</p>
                          <p className="text-xs text-slate-400">Verificado</p>
                        </div>
                        <div className="ml-auto text-2xl">{rev.rating}</div>
                      </div>
                      <p className="text-slate-300 text-sm">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "chat" && (
              <div className="bg-[#1b163a] border border-[#3b326b] rounded-xl overflow-hidden max-w-2xl flex flex-col h-[500px]">
                <div className="p-4 border-b border-[#3b326b] bg-[#29224f] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" className="w-10 h-10 rounded-full" alt="Yumi" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#29224f]"></div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Yumi (VIP)</p>
                      <p className="text-xs text-green-400">En línea ahora</p>
                    </div>
                  </div>
                  <button className="text-brand-gold text-xs font-bold">Desbloquear Galería Secreta 🔓</button>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto bg-brand-carbon/30 flex flex-col gap-4">
                  <div className="text-center text-xs text-slate-500 my-2">Hoy</div>
                  <div className="self-start max-w-[80%] bg-[#3b326b] text-white p-3 rounded-2xl rounded-tl-sm text-sm">
                    ¡Hola! Gracias por suscribirte a mi chat VIP. Aquí subo cositas más privadas y podemos hablar directo. ¿De dónde eres? 😘
                  </div>
                </div>

                <div className="p-3 border-t border-[#3b326b] bg-[#29224f] flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-brand-gold"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg></button>
                  <input type="text" placeholder="Escribe un mensaje..." className="flex-1 bg-brand-carbon text-white text-sm rounded-full px-4 outline-none border border-[#3b326b] focus:border-brand-gold" />
                  <button className="p-2 bg-brand-gold text-slate-900 rounded-full hover:bg-yellow-400"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

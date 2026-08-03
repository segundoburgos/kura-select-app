"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ColaboradoraDashboard() {
  const [isVipActive, setIsVipActive] = useState(true);

  return (
    <>
      <Navbar />
      <section className="pb-16 max-w-5xl mx-auto px-4 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-border pb-4 gap-4">
            <h2 className="font-black text-base text-white">Panel de Gestión - Creadora</h2>
        </div>

        <div className="space-y-5">
            <div className="bg-brand-card border-2 border-brand-gold/60 p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-center sm:text-left space-y-1">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Membresía VIP ($1.000 / 3 días)</span>
                    <b className={`text-base flex items-center gap-2 justify-center sm:justify-start ${isVipActive ? 'text-brand-emerald' : 'text-slate-400'}`}>
                        {isVipActive ? '🟢 VIP Automático ACTIVADO' : '⚪ VIP Pausado'}
                    </b>
                </div>
                <button 
                  onClick={() => setIsVipActive(!isVipActive)} 
                  className={`w-full sm:w-auto py-3 px-6 font-extrabold text-sm rounded-xl shadow-md transition-all ${isVipActive ? 'bg-brand-emerald text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
                >
                    {isVipActive ? '🟢 ACTIVADO' : '⚪ DESACTIVADO'}
                </button>
            </div>
            
            <div className="bg-brand-card border border-brand-border p-6 rounded-3xl space-y-4">
                <h3 className="text-sm font-black text-white border-b border-brand-border pb-3">📸 Publicar Novedad o Historia 24h</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Publicado en perfil'); }} className="space-y-3 text-sm">
                    <textarea rows={3} required placeholder="¿Qué deseas compartir hoy con tus clientes?..." className="w-full bg-brand-carbon border border-brand-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-emerald"></textarea>
                    <button type="submit" className="w-full py-3 bg-brand-emerald hover:bg-emerald-500 font-extrabold text-white rounded-xl transition-colors shadow-md">🚀 Publicar Ahora</button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}

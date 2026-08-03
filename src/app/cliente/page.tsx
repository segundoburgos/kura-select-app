"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ClienteDashboard() {
  const [activeTab, setActiveTab] = useState('wallet');

  return (
    <>
      <Navbar />
      <section className="pb-20 max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-brand-card border border-brand-border p-6 rounded-3xl shadow-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-2xl">👤</div>
                <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">Mi Cuenta Privada <span className="text-brand-emerald text-xs bg-brand-emerald/10 px-2 py-0.5 rounded-full border border-brand-emerald/30">✓ Verificada</span></h2>
                    <p className="text-xs text-slate-400 mt-1">Cliente VIP • Discreción Absoluta</p>
                </div>
            </div>
            <div className="flex bg-brand-carbon p-1 rounded-2xl border border-brand-border text-xs font-bold w-full sm:w-auto">
                <button onClick={() => setActiveTab('wallet')} className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl transition-colors ${activeTab === 'wallet' ? 'bg-brand-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}>Billetera</button>
                <button onClick={() => setActiveTab('favorites')} className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl transition-colors ${activeTab === 'favorites' ? 'bg-brand-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}>Favoritas</button>
                <button onClick={() => setActiveTab('vault')} className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl transition-colors ${activeTab === 'vault' ? 'bg-brand-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}>Bóveda</button>
            </div>
        </div>

        {activeTab === 'wallet' && (
            <div className="space-y-4">
                <div className="bg-brand-card border-2 border-brand-gold/60 p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left space-y-1">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Saldo Disponible</span>
                        <b className="text-3xl font-black text-brand-gold">$14.990 CLP</b>
                    </div>
                    <button onClick={() => alert('Redirigiendo a pasarela Webpay...')} className="w-full sm:w-auto px-6 py-4 bg-brand-emerald hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg">⚡ Recargar Saldo (+15% GRATIS)</button>
                </div>
            </div>
        )}

        {activeTab === 'favorites' && (
            <div className="space-y-4">
                <div className="bg-brand-card border border-brand-border p-6 rounded-3xl text-sm space-y-3">
                    <h3 className="font-bold text-white border-b border-brand-border pb-3">Mis Colaboradoras Guardadas (1)</h3>
                    <div className="flex justify-between items-center bg-brand-carbon p-4 rounded-2xl border border-brand-border">
                        <b className="text-white flex items-center gap-2"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&q=80" className="w-8 h-8 rounded-full" alt="avatar" /> Yumi ✓ (Las Condes)</b>
                        <button onClick={() => alert('Eliminada')} className="text-rose-500 font-bold hover:bg-rose-500/10 px-3 py-1.5 rounded-lg transition-colors">Eliminar 🗑️</button>
                    </div>
                </div>
            </div>
        )}

        {activeTab === 'vault' && (
            <div className="space-y-4">
                <div className="bg-brand-card border border-brand-border p-6 rounded-3xl text-sm space-y-3">
                    <h3 className="font-bold text-white border-b border-brand-border pb-3">Mi Bóveda Multimedia HD</h3>
                    <div className="flex justify-between items-center bg-brand-carbon p-4 rounded-2xl border border-brand-border">
                        <div className="flex flex-col">
                            <b className="text-white">Pack Sesión Estudio 📸</b>
                            <span className="text-xs text-slate-400 mt-0.5">Adquirido de Yumi</span>
                        </div>
                        <a href="#" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-brand-gold font-bold text-xs rounded-xl border border-brand-gold/30 transition-colors">Ver/Descargar</a>
                    </div>
                </div>
            </div>
        )}
      </section>
    </>
  );
}

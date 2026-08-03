"use client";

import Navbar from "@/components/Navbar";

export default function AgenciaDashboard() {
  return (
    <>
      <Navbar />
      <section className="pb-16 max-w-5xl mx-auto px-4 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-border pb-4 gap-4">
            <h2 className="font-black text-base text-white">Panel de Gestión - Agencia</h2>
        </div>

        <div className="space-y-5">
            <div className="bg-brand-card border-2 border-brand-gold/80 p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left space-y-1">
                    <b className="text-lg text-white block">Agencia "Elite Models"</b>
                    <span className="text-xs text-brand-emerald font-bold bg-brand-emerald/10 px-3 py-1 rounded-full border border-brand-emerald/30 inline-block mt-2">👑 Cuenta Exenta (0% Fees) • 12 Chicas Activas</span>
                </div>
                <button onClick={() => alert('Abriendo registro de nueva creadora...')} className="w-full sm:w-auto py-3 px-6 bg-brand-emerald hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md transition-all">+ Añadir Creadora</button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                 <div className="bg-brand-card p-5 rounded-2xl border border-brand-border shadow-md text-center sm:text-left">
                     <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Chicas Activas</span>
                     <b className="text-2xl font-black text-white">12</b>
                 </div>
                 <div className="bg-brand-card p-5 rounded-2xl border border-brand-border shadow-md text-center sm:text-left">
                     <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Leads Generados</span>
                     <b className="text-2xl font-black text-brand-emerald">184</b>
                 </div>
                 <div className="bg-brand-card p-5 rounded-2xl border border-brand-border shadow-md text-center sm:text-left">
                     <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Ventas PPV</span>
                     <b className="text-2xl font-black text-brand-gold">$480k</b>
                 </div>
                 <div className="bg-brand-card p-5 rounded-2xl border border-brand-border shadow-md text-center sm:text-left">
                     <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Días Gratis</span>
                     <b className="text-2xl font-black text-brand-emerald">20</b>
                 </div>
             </div>
        </div>
      </section>
    </>
  );
}

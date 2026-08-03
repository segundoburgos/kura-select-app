"use client";

export default function FilterBar() {
  return (
    <div className="px-4 max-w-7xl mx-auto my-4 space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-xl mx-auto">
            <select className="bg-brand-card border border-brand-border rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-brand-gold">
                <option value="las-condes">📍 Las Condes</option>
                <option value="providencia">📍 Providencia</option>
            </select>
            <select className="bg-brand-card border border-brand-border rounded-xl px-3 py-2 text-xs font-bold text-brand-gold focus:outline-none focus:border-brand-gold">
                <option>👑 VIP Elite Primero</option>
                <option>💰 Menor Tarifa</option>
            </select>
            <button className="col-span-2 sm:col-span-1 py-2 px-3 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 rounded-xl text-xs font-bold hover:bg-brand-emerald hover:text-white transition-all">📍 Cerca de mí</button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 max-w-xl mx-auto text-[11px] font-bold justify-center sm:justify-start">
            <button className="px-3 py-1.5 bg-brand-card border border-brand-border rounded-xl text-slate-300 hover:text-white whitespace-nowrap transition-colors">Depto Propio</button>
            <button className="px-3 py-1.5 bg-brand-card border border-brand-border rounded-xl text-slate-300 hover:text-white whitespace-nowrap transition-colors">Estacionamiento</button>
            <button className="px-3 py-1.5 bg-brand-card border border-brand-border rounded-xl text-slate-300 hover:text-white whitespace-nowrap transition-colors">Masajes</button>
        </div>
    </div>
  );
}

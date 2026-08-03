import Navbar from "@/components/Navbar";

export default function EscortsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-carbon text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl sm:text-4xl font-black text-brand-gold mb-4 text-center">Escort VIP</h1>
        <p className="text-slate-400 text-center max-w-lg mb-8">
          Encuentra los perfiles más exclusivos y verificados. (Grid de filtros avanzados en desarrollo).
        </p>
        <div className="animate-pulse flex gap-2">
           <div className="w-3 h-3 bg-brand-emerald rounded-full"></div>
           <div className="w-3 h-3 bg-brand-emerald rounded-full delay-75"></div>
           <div className="w-3 h-3 bg-brand-emerald rounded-full delay-150"></div>
        </div>
      </div>
    </>
  );
}

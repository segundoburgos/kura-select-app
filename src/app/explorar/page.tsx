import Navbar from "@/components/Navbar";

export default function ExplorarPage() {
  return (
    <>
      <Navbar />
      <div className="bg-black h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
        {/* TikTok style feed mockup */}
        <div className="relative w-full max-w-sm h-full max-h-[800px] bg-[#1b163a] sm:rounded-2xl sm:border border-[#3b326b] overflow-hidden shadow-2xl">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover">
               <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-black-dress-41551-large.mp4" type="video/mp4" />
           </video>
           
           {/* Overlay UI */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <div className="flex justify-between items-end">
                 <div className="text-white">
                    <h2 className="text-xl font-black flex items-center gap-1">@YumiVIP <span className="text-brand-gold text-sm">✓</span></h2>
                    <p className="text-sm text-slate-300 mt-1">Lista para esta noche. ¿Nos vemos? 🔥🥂 #SantiagodeChile</p>
                    <button className="mt-3 bg-brand-emerald text-white text-xs font-bold px-4 py-2 rounded-full">Ver Perfil</button>
                 </div>
                 
                 {/* Floating Actions Right */}
                 <div className="flex flex-col gap-4 text-white items-center mb-4">
                    <div className="flex flex-col items-center">
                       <button className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur hover:bg-rose-500 transition-colors">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                       </button>
                       <span className="text-xs mt-1 font-bold">12K</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <button className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur hover:bg-white/20 transition-colors">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>
                       </button>
                       <span className="text-xs mt-1 font-bold">450</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
}

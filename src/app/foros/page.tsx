import Navbar from "@/components/Navbar";

export default function ForosPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#1b163a] text-white p-4 sm:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 border-b border-[#3b326b] pb-4">
             <h1 className="text-3xl font-black text-brand-gold">Foro de la Comunidad</h1>
             <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 font-bold text-sm rounded-lg shadow-md transition-colors">Crear Tema</button>
          </div>
          
          <div className="space-y-4">
            {/* Hilo de ejemplo */}
            <div className="bg-[#29224f] border border-[#3b326b] rounded-xl p-4 flex gap-4 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-[#1b163a] rounded flex items-center justify-center text-2xl border border-[#3b326b]">💬</div>
              <div className="flex-1">
                 <h2 className="text-lg font-bold text-white mb-1">Reporte: Yumi, excelente atención</h2>
                 <p className="text-xs text-slate-400">Por <span className="text-brand-gold">VipMember123</span> • Hoy a las 14:30</p>
              </div>
              <div className="text-center text-xs text-slate-400 hidden sm:block">
                 <div className="font-bold text-white text-lg">45</div>
                 Respuestas
              </div>
            </div>

            {/* Hilo de ejemplo 2 */}
            <div className="bg-[#29224f] border border-[#3b326b] rounded-xl p-4 flex gap-4 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-[#1b163a] rounded flex items-center justify-center text-2xl border border-[#3b326b]">❓</div>
              <div className="flex-1">
                 <h2 className="text-lg font-bold text-white mb-1">¿Alguna recomendación en Providencia?</h2>
                 <p className="text-xs text-slate-400">Por <span className="text-brand-gold">NuevoUsuario</span> • Ayer a las 20:15</p>
              </div>
              <div className="text-center text-xs text-slate-400 hidden sm:block">
                 <div className="font-bold text-white text-lg">12</div>
                 Respuestas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

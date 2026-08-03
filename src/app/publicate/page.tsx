import Navbar from "@/components/Navbar";

export default function PublicatePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-carbon pb-20">
        
        {/* Hero Section */}
        <div className="bg-[#1b163a] border-b border-[#3b326b] py-16 px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Haz crecer tu cartera de <span className="text-brand-gold">Clientes VIP</span></h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">Únete al directorio más exclusivo de Chile. Vende contenido por chat, recibe reseñas reales y destaca en el mercado.</p>
            <button className="mt-8 px-8 py-4 bg-brand-gold hover:bg-yellow-400 text-slate-900 font-black text-lg rounded-xl shadow-xl transition-all">Empezar a Publicar Ahora</button>
        </div>

        {/* Pricing/Plans Mockup */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Elige tu Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Plan Basico */}
                <div className="bg-[#29224f] border border-[#3b326b] rounded-2xl p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-300">Plan Básico</h3>
                    <div className="text-4xl font-black text-white mt-4 mb-2">Gratis</div>
                    <p className="text-slate-400 text-sm mb-6">Perfecto para empezar y probar la plataforma.</p>
                    <ul className="space-y-3 mb-8 flex-1 text-slate-300 text-sm">
                        <li className="flex gap-2">✅ Perfil estándar</li>
                        <li className="flex gap-2">✅ Recibir mensajes básicos</li>
                        <li className="flex gap-2 text-slate-500">❌ Chat VIP monetizado</li>
                        <li className="flex gap-2 text-slate-500">❌ Muro Interactivo</li>
                    </ul>
                    <button className="w-full py-3 bg-[#3b326b] text-white font-bold rounded-lg hover:bg-[#4b427b]">Seleccionar</button>
                </div>

                {/* Plan Destacada */}
                <div className="bg-[#1b163a] border-2 border-brand-gold rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-brand-gold/20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-slate-900 font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider">Más Popular</div>
                    <h3 className="text-xl font-bold text-brand-gold">Plan VIP</h3>
                    <div className="text-4xl font-black text-white mt-4 mb-2">$35.000 <span className="text-lg text-slate-400 font-normal">/mes</span></div>
                    <p className="text-slate-400 text-sm mb-6">Accede a todas las herramientas interactivas.</p>
                    <ul className="space-y-3 mb-8 flex-1 text-slate-300 text-sm">
                        <li className="flex gap-2">✅ Posicionamiento Prioritario</li>
                        <li className="flex gap-2">✅ Muro Interactivo (Subir fotos/videos)</li>
                        <li className="flex gap-2">✅ Chat VIP monetizado (Gana el 100%)</li>
                        <li className="flex gap-2">✅ Sistema de Reseñas 👍</li>
                    </ul>
                    <button className="w-full py-3 bg-brand-gold text-slate-900 font-black rounded-lg hover:bg-yellow-400 shadow-lg">Seleccionar VIP</button>
                </div>

                {/* Plan Agencia */}
                <div className="bg-[#29224f] border border-[#3b326b] rounded-2xl p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-300">Agencias / Spa</h3>
                    <div className="text-4xl font-black text-white mt-4 mb-2">$80.000 <span className="text-lg text-slate-400 font-normal">/mes</span></div>
                    <p className="text-slate-400 text-sm mb-6">Administra múltiples perfiles desde una cuenta.</p>
                    <ul className="space-y-3 mb-8 flex-1 text-slate-300 text-sm">
                        <li className="flex gap-2">✅ Hasta 10 perfiles VIP</li>
                        <li className="flex gap-2">✅ Dashboard de administración</li>
                        <li className="flex gap-2">✅ Estadísticas avanzadas</li>
                        <li className="flex gap-2">✅ Destacado como Agencia Verificada</li>
                    </ul>
                    <button className="w-full py-3 bg-[#3b326b] text-white font-bold rounded-lg hover:bg-[#4b427b]">Contactar</button>
                </div>

            </div>
        </div>

      </div>
    </>
  );
}

"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AdminSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-black text-white border-b border-[#3b326b] pb-4">Ajustes del Sistema</h2>
      
      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">General</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nombre del Sitio</label>
            <input type="text" defaultValue="ELITE VIP" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Correo de Contacto (Soporte)</label>
            <input type="email" defaultValue="soporte@elitevip.cl" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
        </div>
      </div>

      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Pasarela de Pagos (Suscripciones VIP)</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Clave API de Transbank / Flow</label>
            <input type="password" defaultValue="************************" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
        </div>
      </div>
      
      <button className="bg-brand-emerald text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-emerald-500 transition-colors">Guardar Cambios del Sistema</button>
    </div>
  );
}

function EscortSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[#3b326b] pb-4">
         <h2 className="text-2xl font-black text-white">Configuración de Perfil</h2>
         {/* Estado Boost Simulando */}
         <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            BOOST ACTIVO (23h restantes)
         </div>
      </div>
      
      {/* Mensajes del Admin (CRM Simulador) */}
      <div className="bg-brand-gold/10 border border-brand-gold p-4 rounded-2xl relative overflow-hidden">
        <div className="flex items-start gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-brand-gold text-slate-900 flex items-center justify-center font-black shrink-0">
             SB
          </div>
          <div>
             <h3 className="text-brand-gold font-bold text-sm">Mensaje de S. Burgos (Agencia)</h3>
             <p className="text-sm text-slate-200 mt-1">"Hola Yumi, he notado que tu perfil tiene un 40% más de visitas los Jueves. Te sugiero comprar un 'Boost Destacado' para mañana y aprovechar el tráfico."</p>
             <button className="mt-3 text-xs bg-brand-gold text-slate-900 font-bold px-3 py-1.5 rounded hover:bg-yellow-400 transition-colors">
               Comprar Boost por $15.000
             </button>
          </div>
        </div>
      </div>

      {/* Mi Billetera Virtual */}
      <div className="bg-[#1b163a] border border-[#3b326b] rounded-2xl overflow-hidden flex flex-col sm:flex-row">
        <div className="p-6 bg-gradient-to-br from-brand-emerald to-emerald-700 sm:w-1/3 flex flex-col justify-center">
           <h3 className="text-white font-bold mb-1 flex items-center gap-2">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
             Saldo Disponible
           </h3>
           <p className="text-4xl font-black text-white mt-2">$100.000</p>
           <button className="mt-4 bg-white text-emerald-800 font-bold py-2 rounded-lg shadow-lg hover:bg-emerald-50 transition-colors text-sm">
             Solicitar Retiro
           </button>
        </div>
        <div className="p-6 flex-1">
           <h4 className="text-sm font-bold text-brand-gold mb-3 uppercase">Últimas Ventas (Packs VIP)</h4>
           <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-[#3b326b]/50">
                 <div>
                    <p className="text-sm text-white font-bold">Pack Fotografías Exclusivas</p>
                    <p className="text-xs text-slate-400">Hoy, 14:30 - Comprador: Cliente Premium</p>
                 </div>
                 <p className="text-brand-emerald font-bold">+$45.000</p>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#3b326b]/50">
                 <div>
                    <p className="text-sm text-white font-bold">Video Saludo Personalizado</p>
                    <p className="text-xs text-slate-400">Ayer, 20:15 - Comprador: Anónimo</p>
                 </div>
                 <p className="text-brand-emerald font-bold">+$55.000</p>
              </div>
           </div>
           <p className="text-xs text-slate-500 mt-4 italic">El saldo refleja tu 100%. Los cargos por servicio ya fueron cubiertos por el cliente.</p>
        </div>
      </div>

      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Datos Principales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nombre Artístico</label>
            <input type="text" defaultValue="Yumi VIP" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Edad</label>
            <input type="number" defaultValue={21} className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nacionalidad</label>
            <select className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold appearance-none">
              <option value="cl">Chilena</option>
              <option value="co">Colombiana</option>
              <option value="ve">Venezolana</option>
              <option value="ar">Argentina</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Categoría</label>
            <select className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold appearance-none">
              <option>Escort VIP</option>
              <option>Masajista</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Tarifas y Ubicación</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Precio 1 Hora (CLP)</label>
            <input type="text" defaultValue="120.000" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Ubicación / Comuna</label>
            <input type="text" defaultValue="Providencia" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[#3b326b]">
           <label className="flex items-center gap-3 cursor-pointer group">
             <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-brand-border bg-brand-carbon text-brand-gold focus:ring-brand-gold" />
             <span className="text-sm text-white font-bold">Atiendo en mi domicilio/hotel</span>
           </label>
        </div>
      </div>
      
      <button className="bg-brand-gold text-slate-900 font-black py-3 px-6 rounded-xl shadow-lg hover:bg-yellow-400 transition-colors">Actualizar Perfil Público</button>
    </div>
  );
}

function ClientSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-black text-white border-b border-[#3b326b] pb-4">Mi Cuenta VIP</h2>
      
      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Datos Personales</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Alias (Público en comentarios)</label>
            <input type="text" defaultValue="Cliente Premium" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Correo Electrónico</label>
            <input type="email" defaultValue="cliente@test.com" className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" />
          </div>
          <div>
             <button className="text-sm text-brand-gold hover:underline font-bold">Cambiar Contraseña</button>
          </div>
        </div>
      </div>

      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Privacidad</h3>
        <div className="space-y-4">
           <label className="flex items-center gap-3 cursor-pointer group">
             <input type="checkbox" className="w-5 h-5 rounded border-brand-border bg-brand-carbon text-brand-gold focus:ring-brand-gold" />
             <div>
               <span className="block text-sm text-white font-bold">Modo Incógnito</span>
               <span className="block text-xs text-slate-400 mt-1">Nadie verá cuándo estás en línea ni que visitaste su perfil.</span>
             </div>
           </label>
        </div>
      </div>
      
      <button className="bg-brand-emerald text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-emerald-500 transition-colors">Guardar Preferencias</button>
    </div>
  );
}

export default function SettingsPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return <div className="min-h-screen bg-brand-carbon text-white flex items-center justify-center">Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-brand-carbon p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          {user.role === 'admin' && <AdminSettings />}
          {user.role === 'escort' && <EscortSettings />}
          {user.role === 'client' && <ClientSettings />}
        </div>
      </div>
    </>
  );
}

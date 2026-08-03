"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function FinanzasPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Protect the route
  useEffect(() => {
    if (user === undefined) return;
    if (!user || user.role !== 'admin') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'admin' || !mounted) {
    return <div className="min-h-screen bg-brand-carbon text-white flex items-center justify-center">Cargando Finanzas...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-carbon p-4 sm:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button onClick={() => router.push('/admin')} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </button>
              <div>
                <h1 className="text-3xl font-black text-white flex items-center gap-2">
                  Panel Financiero
                  <span className="bg-brand-emerald text-white text-xs px-2 py-1 rounded-full">PAGOS Y LIQUIDACIONES</span>
                </h1>
                <p className="text-slate-400 mt-1">Control de comisiones y cuentas por pagar a las anunciantes.</p>
              </div>
            </div>
          </div>

          {/* Módulo de Finanzas y Liquidaciones */}
          <div className="bg-[#1b163a] border border-[#3b326b] rounded-2xl overflow-hidden flex flex-col mt-8 shadow-xl">
            <div className="p-6 border-b border-[#3b326b] flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#29224f]/50 gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Cuentas por Pagar (Venta de Contenido VIP)</h3>
                <p className="text-xs text-slate-400 mt-1">Modelo Markup: El cliente paga un 20% extra. La Escort recibe el 100% de lo que fijó.</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-brand-emerald uppercase font-bold">Ganancia de la Plataforma (Mensual)</p>
                <p className="text-3xl font-black text-white">$1.240.000</p>
              </div>
            </div>
            
            <div className="flex-1 p-0 overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[800px]">
                <thead className="bg-[#1b163a] text-slate-400 border-b border-[#3b326b]">
                  <tr>
                    <th className="p-4 font-bold">Anunciante</th>
                    <th className="p-4 font-bold text-slate-300">Cobrado al Cliente (+20%)</th>
                    <th className="p-4 font-bold text-brand-gold">Tu Ganancia Limpia</th>
                    <th className="p-4 font-bold text-brand-emerald">Neto a Pagar (Escort)</th>
                    <th className="p-4 font-bold text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  {/* Fila 1 */}
                  <tr className="border-b border-[#3b326b]/50 hover:bg-[#29224f]/30 transition-colors">
                    <td className="p-4 font-bold flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full object-cover" alt="Avatar" />
                      Yumi VIP
                    </td>
                    <td className="p-4 font-mono">$120.000</td>
                    <td className="p-4 font-mono text-brand-gold font-bold">+$20.000</td>
                    <td className="p-4 font-mono text-brand-emerald font-black">$100.000</td>
                    <td className="p-4 text-right">
                      <button onClick={() => { toast.success("Se ha notificado a Yumi que su pago fue enviado"); }} className="bg-brand-emerald text-white hover:bg-emerald-500 px-4 py-2 rounded font-bold shadow-lg transition-colors text-xs">
                        Marcar como Pagado
                      </button>
                    </td>
                  </tr>
                  
                  {/* Fila 2 */}
                  <tr className="border-b border-[#3b326b]/50 hover:bg-[#29224f]/30 transition-colors">
                    <td className="p-4 font-bold flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs">SM</div>
                      Sofia Masajes
                    </td>
                    <td className="p-4 font-mono">$54.000</td>
                    <td className="p-4 font-mono text-brand-gold font-bold">+$9.000</td>
                    <td className="p-4 font-mono text-brand-emerald font-black">$45.000</td>
                    <td className="p-4 text-right">
                      <button onClick={() => { toast.success("Se ha notificado a Sofia que su pago fue enviado"); }} className="bg-brand-emerald text-white hover:bg-emerald-500 px-4 py-2 rounded font-bold shadow-lg transition-colors text-xs">
                        Marcar como Pagado
                      </button>
                    </td>
                  </tr>

                  {/* Fila 3 (Ejemplo de muchas chicas) */}
                  <tr className="border-b border-[#3b326b]/50 hover:bg-[#29224f]/30 transition-colors">
                    <td className="p-4 font-bold flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">VA</div>
                      Valeria Antofagasta
                    </td>
                    <td className="p-4 font-mono">$240.000</td>
                    <td className="p-4 font-mono text-brand-gold font-bold">+$40.000</td>
                    <td className="p-4 font-mono text-brand-emerald font-black">$200.000</td>
                    <td className="p-4 text-right">
                      <button onClick={() => { toast.success("Se ha notificado a Valeria que su pago fue enviado"); }} className="bg-brand-emerald text-white hover:bg-emerald-500 px-4 py-2 rounded font-bold shadow-lg transition-colors text-xs">
                        Marcar como Pagado
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-[#1b163a] text-center">
               <p className="text-xs text-slate-500 italic">Total de páginas: 1 de 15. Hay 50+ transacciones pendientes este mes.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

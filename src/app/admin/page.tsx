"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from "recharts";

// Datos de prueba para gráficos (Se mantendrán estáticos temporalmente)
const rankingData = [
  { name: "Yumi VIP", citas: 45, reseñas: 98 },
  { name: "Valentina", citas: 38, reseñas: 90 },
  { name: "Sofia", citas: 30, reseñas: 85 },
  { name: "Catalina", citas: 25, reseñas: 88 },
  { name: "Isabella", citas: 15, reseñas: 75 },
];

const incomeData = [
  { name: "Lun", ingresos: 120000 },
  { name: "Mar", ingresos: 150000 },
  { name: "Mié", ingresos: 90000 },
  { name: "Jue", ingresos: 210000 },
  { name: "Vie", ingresos: 450000 },
  { name: "Sáb", ingresos: 580000 },
  { name: "Dom", ingresos: 320000 },
];

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  
  // KPIs reales
  const [escortsCount, setEscortsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  
  // Estados Dinámicos para Interactividad
  const [solicitudes, setSolicitudes] = useState<any[]>([]); // Por ahora vacío hasta implementar flujo de solicitudes reales
  const [admins, setAdmins] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  // Cargar datos de Firestore
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // 1. Contar escorts
        const escortsQuery = query(collection(db, 'users'), where('role', '==', 'escort'));
        const escortsSnap = await getDocs(escortsQuery);
        setEscortsCount(escortsSnap.size);

        // 2. Contar clientes
        const clientsQuery = query(collection(db, 'users'), where('role', '==', 'client'));
        const clientsSnap = await getDocs(clientsQuery);
        setClientsCount(clientsSnap.size);

        // 3. Obtener lista de administradores
        const adminsQuery = query(collection(db, 'users'), where('role', '==', 'admin'));
        const adminsSnap = await getDocs(adminsQuery);
        const adminsList: any[] = [];
        adminsSnap.forEach(doc => {
          if (doc.id !== user?.uid) { // Excluir al admin actual (Super Admin)
            adminsList.push({ id: doc.id, name: doc.data().name || 'Admin', role: 'Administrador', initial: doc.data().name?.[0] || 'A' });
          }
        });
        setAdmins(adminsList);

      } catch (error) {
        console.error("Error obteniendo datos del dashboard:", error);
      } finally {
        setDataLoading(false);
      }
    };

    if (user?.role === 'admin') {
      fetchAdminData();
    }
  }, [user]);

  // Protect the route
  useEffect(() => {
    if (!authLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  if (authLoading || dataLoading || !user || user.role !== 'admin') {
    return <div className="min-h-screen bg-brand-carbon text-white flex items-center justify-center">Cargando Panel de Mando...</div>;
  }

  // Funciones Interactivas (Mock Logic)
  const handleApprove = (id: number, name: string) => {
    setSolicitudes(prev => prev.filter(req => req.id !== id));
    toast.success(`Perfil de ${name} Aprobado`);
  };

  const handleReject = (id: number, name: string) => {
    setSolicitudes(prev => prev.filter(req => req.id !== id));
    toast.error(`Perfil de ${name} Rechazado`);
  };

  const handleSendAlert = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Alerta enviada correctamente a la anunciante.");
  };

  const handleActivateBoost = (boostName: string) => {
    toast.success(`¡${boostName} activado!`);
  };

  const handleRevokeAdmin = (id: number, name: string) => {
    // Aquí iría la lógica para cambiar el rol a 'client' en Firestore
    setAdmins(prev => prev.filter(admin => admin.id !== id));
    toast.success(`Acceso revocado a ${name}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-carbon p-4 sm:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-white flex items-center gap-2">
                Centro de Comando 
                <span className="bg-brand-gold text-slate-900 text-xs px-2 py-1 rounded-full">SUPER ADMIN</span>
              </h1>
              <p className="text-slate-400 mt-1">Bienvenido de vuelta, {user.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => router.push('/admin/finanzas')} className="px-4 py-2 bg-brand-emerald/10 hover:bg-brand-emerald text-brand-emerald hover:text-white border border-brand-emerald font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Liquidaciones y Finanzas
              </button>
              <button onClick={() => router.push('/settings')} className="px-4 py-2 bg-[#3b326b] hover:bg-[#4b427b] text-white font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-black/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Ajustes
              </button>
            </div>
          </div>

          {/* Tarjetas de Estadísticas (KPIs) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all"></div>
              <h3 className="text-slate-400 text-xs font-bold uppercase mb-2">Anunciantes VIP</h3>
              <p className="text-3xl font-black text-white">{escortsCount}</p>
            </div>
            <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-emerald/10 rounded-full blur-xl group-hover:bg-brand-emerald/20 transition-all"></div>
              <h3 className="text-slate-400 text-xs font-bold uppercase mb-2">Clientes Registrados</h3>
              <p className="text-3xl font-black text-brand-emerald">{clientsCount}</p>
            </div>
            <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl group-hover:bg-brand-gold/20 transition-all"></div>
              <h3 className="text-slate-400 text-xs font-bold uppercase mb-2">Ingresos VIP (Semana)</h3>
              <p className="text-3xl font-black text-brand-gold">$1.920.000</p>
            </div>
            <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-500/10 rounded-full blur-xl group-hover:bg-rose-500/20 transition-all"></div>
              <h3 className="text-slate-400 text-xs font-bold uppercase mb-2">Citas Agendadas (Hoy)</h3>
              <p className="text-3xl font-black text-white">87</p>
            </div>
          </div>

          {/* Gráficos de Analítica */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Gráfico 1: Evolución de Ingresos */}
            <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                Ingresos por Suscripciones
              </h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={incomeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3b326b" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1b163a', borderColor: '#3b326b', borderRadius: '8px' }}
                      itemStyle={{ color: '#d4b76a', fontWeight: 'bold' }}
                      formatter={(value: any) => [`$${Number(value).toLocaleString('es-CL')}`, 'Ingresos']}
                    />
                    <Line type="monotone" dataKey="ingresos" stroke="#d4b76a" strokeWidth={3} dot={{ fill: '#d4b76a', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Gráfico 2: Ranking Top Escorts */}
            <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Ranking de Popularidad (Citas)
              </h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rankingData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3b326b" horizontal={true} vertical={false} />
                    <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis dataKey="name" type="category" stroke="#fff" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{ fill: '#29224f' }}
                      contentStyle={{ backgroundColor: '#1b163a', borderColor: '#3b326b', borderRadius: '8px' }}
                      itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Bar dataKey="citas" name="Citas Simuladas" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="reseñas" name="Reseñas Positivas" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Listas de Gestión (Inferior) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Gestión de Administradores */}
            <div className="bg-[#1b163a] border border-[#3b326b] rounded-2xl overflow-hidden flex flex-col">
              <div className="p-6 border-b border-[#3b326b] flex justify-between items-center bg-[#29224f]/50">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  Equipo de Administración
                </h2>
                <button onClick={() => toast("Función de invitar admin pronto", { icon: '🚧' })} className="text-xs bg-brand-gold text-slate-900 font-bold px-3 py-1.5 rounded hover:bg-yellow-400 transition-colors">
                  + Nuevo Admin
                </button>
              </div>
              <div className="flex-1 p-0 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#1b163a] text-slate-400 border-b border-[#3b326b]">
                    <tr>
                      <th className="p-4 font-bold">Usuario</th>
                      <th className="p-4 font-bold">Rol</th>
                      <th className="p-4 font-bold text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    {/* Fila Fija Super Admin (El usuario actual conectado si es admin) */}
                    <tr className="border-b border-[#3b326b]/50 bg-[#29224f]/10">
                      <td className="p-4 font-bold flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-gold text-slate-900 flex items-center justify-center text-xs uppercase">{user.name?.[0] || 'A'}</div>
                        {user.name} (Tú)
                      </td>
                      <td className="p-4"><span className="bg-brand-gold/20 text-brand-gold px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Super Admin</span></td>
                      <td className="p-4 text-right">
                        <span className="text-slate-500 text-xs italic">Intransferible</span>
                      </td>
                    </tr>
                    
                    {/* Filas Dinámicas */}
                    {admins.map(admin => (
                      <tr key={admin.id} className="border-b border-[#3b326b]/50 hover:bg-[#29224f]/30 transition-colors">
                        <td className="p-4 font-bold flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs uppercase">{admin.initial}</div>
                          {admin.name}
                        </td>
                        <td className="p-4"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">{admin.role}</span></td>
                        <td className="p-4 text-right">
                          <button onClick={() => handleRevokeAdmin(admin.id, admin.name)} className="text-red-400 hover:text-red-300 text-xs font-bold transition-colors">Revocar</button>
                        </td>
                      </tr>
                    ))}
                    
                    {admins.length === 0 && (
                       <tr>
                         <td colSpan={3} className="p-4 text-center text-slate-500 italic text-xs">No hay más administradores.</td>
                       </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Solicitudes de Verificación */}
            <div className="bg-[#1b163a] border border-[#3b326b] rounded-2xl overflow-hidden flex flex-col">
              <div className="p-6 border-b border-[#3b326b] flex justify-between items-center bg-[#29224f]/50">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Nuevos Registros (Verificación)
                </h2>
                <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">{solicitudes.length} Nuevas</span>
              </div>
              <div className="flex-1 p-0 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#1b163a] text-slate-400 border-b border-[#3b326b]">
                    <tr>
                      <th className="p-4 font-bold">Anunciante</th>
                      <th className="p-4 font-bold">Fecha</th>
                      <th className="p-4 font-bold text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    {solicitudes.map(req => (
                      <tr key={req.id} className="border-b border-[#3b326b]/50 hover:bg-[#29224f]/30 transition-colors">
                        <td className="p-4 font-bold flex items-center gap-3">
                          {req.img ? (
                            <img src={req.img} className="w-8 h-8 rounded-full object-cover" alt="Avatar" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">{req.initial}</div>
                          )}
                          {req.name}
                        </td>
                        <td className="p-4 text-slate-400 text-xs">{req.time}</td>
                        <td className="p-4 text-right whitespace-nowrap">
                          <button onClick={() => handleApprove(req.id, req.name)} className="bg-brand-emerald/10 text-brand-emerald hover:bg-brand-emerald hover:text-white px-3 py-1.5 rounded text-xs font-bold mr-2 transition-colors">Aprobar</button>
                          <button onClick={() => handleReject(req.id, req.name)} className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-colors">Rechazar</button>
                        </td>
                      </tr>
                    ))}
                    
                    {solicitudes.length === 0 && (
                       <tr>
                         <td colSpan={3} className="p-4 text-center text-slate-500 italic text-xs">Todos los perfiles recientes han sido revisados.</td>
                       </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Módulo de Marketing y Monetización (NUEVO) */}
          <div className="mt-8 border-t border-[#3b326b] pt-8">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h2 className="text-2xl font-black text-white">Marketing y Monetización</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Centro de Alertas (CRM) */}
              <div className="bg-[#1b163a] border border-brand-gold/30 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-[100px]"></div>
                <h3 className="text-brand-gold font-bold mb-1 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  Alertas de Rendimiento (CRM)
                </h3>
                <p className="text-xs text-slate-400 mb-4">Envía consejos personalizados a las anunciantes basados en sus estadísticas.</p>
                
                <form onSubmit={handleSendAlert} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Seleccionar Destinataria</label>
                    <select className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-2.5 rounded-lg outline-none focus:border-brand-gold appearance-none text-sm">
                      <option>Yumi VIP (Rinde mejor los jueves)</option>
                      <option>Valentina (Pocas reservas este mes)</option>
                      <option>Todas las Escorts VIP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Mensaje / Consejo</label>
                    <textarea required rows={3} defaultValue="Hola Yumi, he notado que tu perfil tiene un 40% más de visitas los Jueves. Te sugiero comprar un 'Boost Destacado' para mañana y aprovechar el tráfico." className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-lg outline-none focus:border-brand-gold text-sm resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-gold text-slate-900 font-black py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Enviar Alerta
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
                </form>
              </div>

              {/* Venta de Boosts */}
              <div className="bg-[#1b163a] border border-brand-emerald/30 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-bl-[100px]"></div>
                <h3 className="text-brand-emerald font-bold mb-1 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Venta de "Boosts" (Destacados)
                </h3>
                <p className="text-xs text-slate-400 mb-4">Activa poderes especiales en perfiles que ya hayan transferido el pago extra.</p>
                
                <div className="space-y-4">
                  <div className="bg-[#29224f] p-4 rounded-lg flex items-center justify-between border border-[#3b326b]">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                       </div>
                       <div>
                         <p className="text-sm font-bold text-white">Boost de Portada (24h)</p>
                         <p className="text-xs text-brand-gold font-bold">Precio sugerido: $15.000</p>
                       </div>
                    </div>
                    <button onClick={() => handleActivateBoost("Boost de Portada")} className="px-3 py-1.5 bg-brand-emerald/20 text-brand-emerald font-bold text-xs rounded hover:bg-brand-emerald hover:text-white transition-colors">Activar a...</button>
                  </div>

                  <div className="bg-[#29224f] p-4 rounded-lg flex items-center justify-between border border-[#3b326b]">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                       </div>
                       <div>
                         <p className="text-sm font-bold text-white">Sello "En Vivo Ahora"</p>
                         <p className="text-xs text-rose-400 font-bold">Precio sugerido: $5.000</p>
                       </div>
                    </div>
                    <button onClick={() => handleActivateBoost("Sello En Vivo Ahora")} className="px-3 py-1.5 bg-brand-emerald/20 text-brand-emerald font-bold text-xs rounded hover:bg-brand-emerald hover:text-white transition-colors">Activar a...</button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[#3b326b]">
                     <p className="text-xs text-slate-400 italic text-center">Activar un boost coloca automáticamente una insignia en el perfil público de la chica, atrayendo más clics inmediatamente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

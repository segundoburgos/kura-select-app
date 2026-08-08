"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

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

function EscortSettings({ uid, currentName }: { uid: string, currentName: string }) {
  const [name, setName] = useState(currentName);
  const [age, setAge] = useState(18);
  const [nationality, setNationality] = useState("cl");
  const [category, setCategory] = useState("Escort VIP");
  const [price, setPrice] = useState("120.000");
  const [location, setLocation] = useState("Providencia");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.name) setName(data.name);
        if (data.age) setAge(data.age);
        if (data.nationality) setNationality(data.nationality);
        if (data.category) setCategory(data.category);
        if (data.price) setPrice(data.price);
        if (data.location) setLocation(data.location);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [uid]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateDoc(doc(db, 'users', uid), {
        name,
        age,
        nationality,
        category,
        price,
        location,
        updatedAt: new Date().toISOString()
      });
      toast.success("Perfil actualizado con éxito");
    } catch (error) {
      toast.error("Error al actualizar el perfil");
      console.error(error);
    }
    setSaving(false);
  };

  if (loading) return <div className="text-white text-center py-10">Cargando tu perfil...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[#3b326b] pb-4">
         <h2 className="text-2xl font-black text-white">Configuración de Perfil</h2>
      </div>
      
      {/* Mi Billetera Virtual */}
      <div className="bg-[#1b163a] border border-[#3b326b] rounded-2xl overflow-hidden flex flex-col sm:flex-row">
        <div className="p-6 bg-gradient-to-br from-brand-emerald to-emerald-700 sm:w-1/3 flex flex-col justify-center">
           <h3 className="text-white font-bold mb-1 flex items-center gap-2">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
             Saldo Disponible
           </h3>
           <p className="text-4xl font-black text-white mt-2">$0</p>
           <button className="mt-4 bg-white text-emerald-800 font-bold py-2 rounded-lg shadow-lg hover:bg-emerald-50 transition-colors text-sm">
             Solicitar Retiro
           </button>
        </div>
        <div className="p-6 flex-1 flex items-center justify-center">
            <p className="text-slate-400 text-sm text-center">Aún no tienes ventas registradas. Configura tu perfil para empezar a recibir clientes.</p>
        </div>
      </div>

      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Datos Principales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nombre Artístico</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Edad</label>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nacionalidad</label>
            <select 
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold appearance-none"
            >
              <option value="cl">Chilena</option>
              <option value="co">Colombiana</option>
              <option value="ve">Venezolana</option>
              <option value="ar">Argentina</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Categoría</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold appearance-none"
            >
              <option value="Escort VIP">Escort VIP</option>
              <option value="Masajista">Masajista</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Tarifas y Ubicación</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Precio 1 Hora (CLP)</label>
            <input 
              type="text" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Ubicación / Comuna</label>
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" 
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleSave}
        disabled={saving}
        className="w-full sm:w-auto bg-brand-gold text-slate-900 font-black py-3 px-8 rounded-xl shadow-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
      >
        {saving ? "Guardando..." : "Actualizar Perfil Público"}
      </button>
    </div>
  );
}

function ClientSettings({ uid, currentName, email }: { uid: string, currentName: string, email: string }) {
  const [name, setName] = useState(currentName);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateDoc(doc(db, 'users', uid), {
        name,
        updatedAt: new Date().toISOString()
      });
      toast.success("Perfil actualizado con éxito");
    } catch (error) {
      toast.error("Error al actualizar el perfil");
    }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-black text-white border-b border-[#3b326b] pb-4">Mi Cuenta VIP</h2>
      
      <div className="bg-[#1b163a] border border-[#3b326b] p-6 rounded-2xl">
        <h3 className="text-brand-gold font-bold mb-4 uppercase text-sm">Datos Personales</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Alias (Público en comentarios)</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Correo Electrónico</label>
            <input type="email" readOnly value={email} className="w-full bg-[#29224f] border border-[#3b326b] text-slate-400 px-4 py-3 rounded-xl outline-none opacity-70" />
          </div>
        </div>
      </div>

      <button 
        onClick={handleSave}
        disabled={saving}
        className="bg-brand-emerald text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-emerald-500 transition-colors disabled:opacity-50"
      >
        {saving ? "Guardando..." : "Guardar Preferencias"}
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user === null) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="min-h-screen bg-brand-carbon text-white flex items-center justify-center">Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-brand-carbon p-4 sm:p-8">
        <div className="max-w-3xl mx-auto">
          {user.role === 'admin' && <AdminSettings />}
          {user.role === 'escort' && <EscortSettings uid={user.uid} currentName={user.name} />}
          {user.role === 'client' && <ClientSettings uid={user.uid} currentName={user.name} email={user.email} />}
        </div>
      </div>
    </>
  );
}

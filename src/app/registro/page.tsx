"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useAuth, Role } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("client");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!terms) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }
    
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);

    const success = await register(email, password, name, role);

    if (success) {
      // Redirigir según el rol
      if (role === "escort") {
        router.push("/settings"); // Para que completen su perfil
      } else {
        router.push("/");
      }
    } else {
      setError("Hubo un error al crear la cuenta. Intenta de nuevo.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-brand-carbon flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-lg bg-[#1b163a] border border-[#3b326b] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* Decorative glow */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-emerald/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-white mb-2">Crear Cuenta</h1>
              <p className="text-sm text-slate-400">Únete a la comunidad más exclusiva de Chile</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-bold rounded-lg text-center">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nombre o Alias</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. VipMember" 
                    className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Tipo de Cuenta</label>
                  <select 
                    value={role || 'client'}
                    onChange={(e) => setRole(e.target.value as Role)}
                    className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors appearance-none"
                  >
                    <option value="client">Cliente (Busco servicios)</option>
                    <option value="escort">Anunciante (Quiero publicar)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com" 
                  className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Contraseña</label>
                <input 
                  type="password"
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres" 
                  className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-brand-border bg-brand-carbon text-brand-gold focus:ring-brand-gold focus:ring-offset-brand-carbon" 
                  />
                  <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                    Confirmo que soy mayor de 18 años y acepto los <a href="#" className="text-brand-gold hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-brand-gold hover:underline">Política de Privacidad</a> de la plataforma.
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 mt-6 bg-brand-emerald hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg transition-all text-center disabled:opacity-50"
              >
                {loading ? "Creando cuenta..." : "Completar Registro"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#3b326b] text-center">
              <p className="text-sm text-slate-400">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-white font-bold hover:text-brand-gold transition-colors">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

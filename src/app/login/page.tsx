"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const success = await login(email, password);
    
    if (success) {
      if (email === "admin@kuraselect.com") {
        router.push("/admin");
      } else if (email === "yumi@vip.com") {
        router.push("/settings");
      } else {
        router.push("/");
      }
    } else {
      setError("Credenciales incorrectas. Verifica tu correo y contraseña.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-brand-carbon flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#1b163a] border border-[#3b326b] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-white flex justify-center items-center gap-2 mb-2">
                Iniciar Sesión
              </h1>
              <p className="text-sm text-slate-400">Bienvenido de vuelta a la zona VIP</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-bold rounded-lg text-center">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Correo Electrónico / Usuario</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com o Usuario" 
                  className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase">Contraseña</label>
                  <a href="#" className="text-xs text-brand-gold hover:underline">¿Olvidaste tu contraseña?</a>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 mt-4 bg-brand-gold hover:bg-yellow-400 text-slate-900 font-black rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {loading ? "Entrando..." : "Entrar al Club"}
                {!loading && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#3b326b] text-center">
              <p className="text-sm text-slate-400">
                ¿Aún no tienes cuenta?{" "}
                <Link href="/registro" className="text-white font-bold hover:text-brand-gold transition-colors">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

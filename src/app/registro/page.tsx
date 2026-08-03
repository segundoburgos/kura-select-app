import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function RegistroPage() {
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

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Nombre de Usuario</label>
                  <input 
                    type="text" 
                    placeholder="Ej. VipMember" 
                    className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Tipo de Cuenta</label>
                  <select className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors appearance-none">
                    <option value="cliente">Cliente (Busco servicios)</option>
                    <option value="escort">Anunciante (Quiero publicar)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="tu@correo.com" 
                  className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Contraseña</label>
                <input 
                  type="password" 
                  placeholder="Crea una contraseña segura" 
                  className="w-full bg-[#29224f] border border-[#3b326b] text-white px-4 py-3 rounded-xl outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-brand-border bg-brand-carbon text-brand-gold focus:ring-brand-gold focus:ring-offset-brand-carbon" />
                  <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                    Confirmo que soy mayor de 18 años y acepto los <a href="#" className="text-brand-gold hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-brand-gold hover:underline">Política de Privacidad</a> de la plataforma.
                  </span>
                </label>
              </div>

              <button 
                type="button" 
                className="w-full py-3.5 mt-6 bg-brand-emerald hover:bg-emerald-500 text-white font-black rounded-xl shadow-lg transition-all text-center"
              >
                Completar Registro
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

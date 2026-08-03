"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  
  return (
    <nav className="sticky top-0 z-50 bg-[#29224f] border-b border-[#3b326b] px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo (Left) */}
        <div className="flex items-center gap-3 cursor-pointer w-full sm:w-auto justify-center sm:justify-start shrink-0">
            {/* Ícono de Corona */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-brand-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="border-l-2 border-brand-gold/50 pl-3">
                <Link href="/" className="font-black text-2xl tracking-widest text-brand-gold uppercase" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                    ELITE <span className="text-white font-light text-base">VIP</span>
                </Link>
            </div>
        </div>
        
        {/* Menu Links (Center) */}
        <div className="flex-1 flex items-center justify-center gap-6 overflow-x-auto no-scrollbar py-1 text-xs font-bold text-white w-full">
            <Link href="/escorts" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase flex items-center gap-1">Escort VIP <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></Link>
            <Link href="/masajes" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase">Masajes VIP</Link>
            <Link href="/experiencias" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase">Experiencias</Link>
            <Link href="/foros" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase">Foros</Link>
            <Link href="/explorar" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase flex items-center gap-1">Explorar <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></Link>
            <Link href="/actividad" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase flex items-center gap-1">Actividad <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></Link>
            <Link href="/publicate" className="hover:text-brand-gold whitespace-nowrap transition-colors uppercase">¡Publicate!</Link>
        </div>

        {/* Auth Buttons (Right) */}
        <div className="flex items-center gap-3 shrink-0">
            {user ? (
              <div className="flex items-center gap-4">
                 <Link href={user.role === 'admin' ? '/admin' : '/settings'} className="flex items-center gap-3 group cursor-pointer">
                   <div className="text-right hidden sm:block">
                      <p className="text-xs font-bold text-white leading-none group-hover:text-brand-gold transition-colors">{user.name}</p>
                      <p className="text-[10px] text-brand-gold uppercase leading-none mt-1">{user.role}</p>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-[#3b326b] border border-brand-gold flex items-center justify-center font-bold text-white group-hover:bg-brand-gold group-hover:text-slate-900 transition-colors">
                      {user.name.charAt(0)}
                   </div>
                 </Link>
                 <button onClick={logout} className="text-slate-400 hover:text-red-500 text-xs font-bold flex items-center gap-1 transition-colors ml-2" title="Cerrar Sesión">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                 </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-white text-xs font-bold hover:text-brand-gold flex items-center gap-1.5 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                    Iniciar Sesión
                </Link>
                <Link href="/registro" className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                    Regístrate
                </Link>
              </>
            )}
        </div>
    </nav>
  );
}

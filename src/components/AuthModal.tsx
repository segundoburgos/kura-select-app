"use client";

import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('quick');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-carbon/90 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-brand-card border border-brand-border p-6 rounded-3xl max-w-sm w-full space-y-5 shadow-2xl relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white font-black w-8 h-8 flex items-center justify-center bg-brand-carbon rounded-full transition-colors">✕</button>
            <h3 className="text-base font-black text-white mt-2">Ingresa a tu Cuenta Privada</h3>
            <p className="text-xs text-slate-400">Guarda tus colaboradoras favoritas y tu saldo PPV.</p>
            
            <div className="flex bg-brand-carbon p-1 rounded-xl border border-brand-border text-[11px] font-bold">
                <button onClick={() => setActiveTab('quick')} className={`flex-1 py-1.5 rounded-lg transition-colors ${activeTab === 'quick' ? 'bg-brand-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}>⚡ Rápido</button>
                <button onClick={() => setActiveTab('phone')} className={`flex-1 py-1.5 rounded-lg transition-colors ${activeTab === 'phone' ? 'bg-brand-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}>📱 Teléfono</button>
                <button onClick={() => setActiveTab('manual')} className={`flex-1 py-1.5 rounded-lg transition-colors ${activeTab === 'manual' ? 'bg-brand-gold text-slate-950' : 'text-slate-400 hover:text-white'}`}>✉️ Email</button>
            </div>

            {activeTab === 'quick' && (
                <div className="space-y-3">
                    <button onClick={() => { alert('Acceso correcto'); onClose(); }} className="w-full py-3 bg-white text-slate-900 font-extrabold text-xs rounded-xl flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        Entrar con Google en 1-Clic
                    </button>
                </div>
            )}
            
            {activeTab === 'phone' && (
                <div className="space-y-3">
                    <input type="tel" placeholder="+56 9 1234 5678" className="w-full bg-brand-carbon border border-brand-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-emerald" />
                    <button className="w-full py-3 bg-brand-emerald hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-colors">Enviar Código SMS</button>
                </div>
            )}

            {activeTab === 'manual' && (
                <div className="space-y-3 text-left">
                    <input type="email" placeholder="correo@ejemplo.com" className="w-full bg-brand-carbon border border-brand-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold" />
                    <button className="w-full py-3 bg-brand-gold hover:bg-yellow-400 text-slate-950 font-black text-xs rounded-xl transition-colors">Entrar con Correo</button>
                </div>
            )}
        </div>
    </div>
  );
}

"use client";

import Link from 'next/link';

interface ProfileCardProps {
  id: string;
  name: string;
  videoSrc: string; // Used as fallback or image source
  isLive?: boolean;
  nationalityFlag?: string;
  isTop?: boolean;
  hasChat?: boolean;
  status?: 'disponible' | 'fulltime' | 'nodisponible';
}

export default function ProfileCard({ id, name, videoSrc, isLive, nationalityFlag, isTop = true, hasChat = true, status = 'disponible' }: ProfileCardProps) {
  
  const statusColor = {
    'disponible': 'bg-green-500',
    'fulltime': 'bg-yellow-400',
    'nodisponible': 'bg-red-500'
  }[status];

  return (
    <article className={`relative bg-brand-card border-2 rounded-xl overflow-hidden shadow-xl group hover:shadow-brand-gold/30 transition-all aspect-[3/4] ${isLive ? 'border-rose-500 shadow-rose-500/20' : 'border-brand-gold/60'}`}>
        <Link href={`/perfil/${id}`}>
            <div className="absolute inset-0 cursor-pointer">
                {/* Asumimos que videoSrc es una imagen por el diseño del grid, pero si es video lo reproducimos */}
                <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <source src={videoSrc} type="video/mp4" />
                </video>
                {/* Gradiente inferior para legibilidad del nombre */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>
        </Link>
        
        {/* Top Left: Star */}
        {isTop && (
            <div className="absolute top-1.5 left-1.5 z-10 text-yellow-400 drop-shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
            </div>
        )}

        {/* Top Right: Flag and Chat */}
        <div className="absolute top-1.5 right-1.5 z-10 flex flex-col items-end gap-1">
            {nationalityFlag && (
                <span className="text-lg bg-black/40 rounded-full px-1 py-0.5 backdrop-blur-sm border border-white/10 leading-none">{nationalityFlag}</span>
            )}
            {hasChat && (
                <div className="text-purple-500 drop-shadow-md bg-white rounded-full p-0.5 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
        </div>

        {/* LIVE Indicator */}
        {isLive && (
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase shadow-md flex items-center gap-1 animate-pulse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span> LIVE
                </span>
            </div>
        )}

        {/* Bottom Bar: Status and Name */}
        <div className="absolute bottom-0 inset-x-0 z-10 p-2 text-center border-t border-brand-gold/30 bg-black/60 backdrop-blur-sm">
            <h2 className="font-extrabold text-sm text-white flex items-center justify-center gap-1.5 uppercase tracking-wide">
                <span className={`w-2.5 h-2.5 rounded-full ${statusColor} shadow-md border border-black`}></span>
                {name}
            </h2>
        </div>
    </article>
  );
}

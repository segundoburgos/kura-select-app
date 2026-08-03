"use client";

interface StoryProps {
  id: string;
  name: string;
  avatarSrc: string;
  icon: string;
  isLive?: boolean;
}

export default function StoryCarousel({ stories }: { stories: StoryProps[] }) {
  return (
    <div className="px-4 max-w-7xl mx-auto my-4">
        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">⚡ Historias Recientes y En Vivo</span>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
            {stories.map(story => (
                <div key={story.id} className="flex flex-col items-center gap-1 cursor-pointer flex-shrink-0 group relative">
                    <div className={`p-0.5 rounded-full p-[2px] group-hover:scale-105 transition-transform ${story.isLive ? 'bg-rose-500 animate-pulse' : 'bg-gradient-to-tr from-brand-gold via-brand-emerald to-amber-300'}`}>
                        <img src={story.avatarSrc} className="w-16 h-16 rounded-full object-cover border-2 border-brand-carbon" alt={story.name} />
                    </div>
                    {story.isLive && (
                        <span className="absolute bottom-4 bg-rose-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-md uppercase">LIVE</span>
                    )}
                    <span className={`text-[10px] font-bold ${story.isLive ? 'text-rose-400' : 'text-slate-300'}`}>{story.name} {story.icon}</span>
                </div>
            ))}
        </div>
    </div>
  );
}

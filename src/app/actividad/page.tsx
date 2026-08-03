import Navbar from "@/components/Navbar";
import TimelinePost from "@/components/TimelinePost";

export default function ActividadPage() {
  const posts = [
    {
      id: "1",
      authorName: "Sofia Vip",
      avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
      timeAgo: "Hace 10 minutos",
      content: "Acabo de llegar al spa, listas para sus masajes tántricos de hoy. ✨",
      likes: 45,
      comments: 3,
    },
    {
      id: "2",
      authorName: "Yumi",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      timeAgo: "Hace 2 horas",
      content: "¡Hola chicos! Hoy estaré disponible en Las Condes a partir de las 20:00hrs. \n¡Tengo un conjunto nuevo que quiero mostrarles! 😉✨",
      mediaUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      mediaType: "image" as const,
      likes: 124,
      comments: 18,
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-carbon p-4 sm:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
             <h1 className="text-3xl font-black text-brand-gold flex items-center gap-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Actividad Global
             </h1>
          </div>
          
          <div className="bg-[#1b163a] border border-[#3b326b] p-4 rounded-xl text-center text-sm text-slate-400 mb-6">
             Entérate de todo lo que publican las chicas en tiempo real.
          </div>

          <div className="space-y-4">
             {posts.map(post => <TimelinePost key={post.id} {...post} />)}
          </div>
        </div>
      </div>
    </>
  );
}

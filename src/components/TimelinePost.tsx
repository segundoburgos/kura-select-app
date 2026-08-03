export interface TimelinePostProps {
  id: string;
  authorName: string;
  avatarUrl: string;
  timeAgo: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  likes: number;
  comments: number;
}

export default function TimelinePost({ authorName, avatarUrl, timeAgo, content, mediaUrl, mediaType, likes, comments }: TimelinePostProps) {
  return (
    <div className="bg-[#1b163a] border border-[#3b326b] rounded-xl p-4 mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img src={avatarUrl} alt={authorName} className="w-10 h-10 rounded-full object-cover border border-brand-gold/50" />
        <div>
          <h3 className="text-white font-bold text-sm flex items-center gap-1">
            {authorName} <span className="text-brand-gold text-xs">✓</span>
          </h3>
          <p className="text-slate-400 text-xs">{timeAgo}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-slate-200 text-sm mb-3 whitespace-pre-wrap">{content}</p>

      {/* Media */}
      {mediaUrl && (
        <div className="mb-3 rounded-lg overflow-hidden border border-white/5">
          {mediaType === 'video' ? (
            <video controls className="w-full max-h-96 object-cover bg-black">
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <img src={mediaUrl} alt="Post media" className="w-full max-h-96 object-cover bg-black" />
          )}
        </div>
      )}

      {/* Footer / Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-slate-400">
        <button className="flex items-center gap-2 hover:text-rose-500 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          <span className="text-sm font-bold">{likes} Me gusta</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          <span className="text-sm font-bold">{comments} Comentarios</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
           <span className="text-sm font-bold">Regalar</span>
        </button>
      </div>
    </div>
  );
}

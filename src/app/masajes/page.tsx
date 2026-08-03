import Navbar from "@/components/Navbar";

export default function MasajesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-carbon text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl sm:text-4xl font-black text-brand-gold mb-4 text-center">Masajes VIP</h1>
        <p className="text-slate-400 text-center max-w-lg mb-8">
          Relajación y desconexión total. (Sección exclusiva de Spas y masajistas en desarrollo).
        </p>
      </div>
    </>
  );
}

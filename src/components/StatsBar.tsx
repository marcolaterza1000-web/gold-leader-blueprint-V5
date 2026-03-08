const stats = [
  { value: "500+", label: "Klienten betreut" },
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "98%", label: "Erreichen ihre Ziele" },
  { value: "24×", label: "Magazin-Titelseiten" },
];

const sectors = ["Finance", "Tech", "Real Estate", "Law", "Healthcare", "Sport"];

const StatsBar = () => (
  <section className="bg-[#0a0a0a] section-divider py-14 px-6">
    <div className="container mx-auto max-w-6xl">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-inter font-black text-3xl md:text-4xl text-[#f59e0b] mb-1">{s.value}</p>
            <p className="font-inter text-xs text-white/35 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Sector tags */}
      <div className="text-center">
        <p className="font-inter text-[10px] text-white/25 uppercase tracking-[0.2em] mb-4">
          Vertraut von Professionals aus
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {sectors.map((s, i) => (
            <span key={i} className="font-inter text-xs text-white/45 border border-white/10 rounded-full px-4 py-1.5 hover:border-[#f59e0b]/30 hover:text-[#f59e0b]/70 transition-all duration-200">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;

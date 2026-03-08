import portrait from "@/assets/marco-portrait.jpg";
import { ArrowRight, Star, Check } from "lucide-react";

const pricingCards = [
  {
    tag: "Einstieg",
    title: "Strategy Call",
    price: "Kostenlos",
    desc: "30 Minuten. Kein Druck. Wir analysieren wo du stehst und ob eine Zusammenarbeit Sinn macht.",
    features: ["Persönliche Situationsanalyse", "Klarer Aktionsplan", "Kein Verkaufsgespräch"],
    cta: "Jetzt buchen",
    href: "#kontakt",
    highlight: false,
  },
  {
    tag: "Empfohlen",
    title: "Peak Performance",
    price: "Auf Anfrage",
    desc: "Das Vollprogramm für Führungskräfte. Training, Ernährung, Mental Coaching und Bioanalyse in einem System.",
    features: ["Wöchentliche 1:1 Sessions", "Ernährungs- und Hormonanalyse", "Mental Coaching", "24/7 Direktzugang"],
    cta: "Programm anfragen",
    href: "#kontakt",
    highlight: true,
  },
  {
    tag: "Exklusiv",
    title: "VIP Intensive",
    price: "Auf Anfrage",
    desc: "Für Executives die maximale Diskretheit und absolute Individualität erwarten. Standort nach Wunsch.",
    features: ["Hausbesuch oder privates Studio", "Eigenes Protokoll in 72h", "Direktlinie zu Marco", "Quartals-Review"],
    cta: "VIP anfragen",
    href: "#kontakt",
    highlight: false,
  },
];

const HeroSection = () => (
  <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pt-24">
    {/* Subtle grid bg */}
    <div className="absolute inset-0 opacity-[0.025]" style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    <div className="container mx-auto max-w-7xl px-6 md:px-10 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT — Text + Pricing */}
        <div className="pt-8 lg:pt-16">
          {/* Niche label */}
          <div className="inline-flex items-center gap-2 border border-[#f59e0b]/30 bg-[#f59e0b]/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            <p className="font-inter text-xs text-[#f59e0b] tracking-[0.15em] uppercase">
              High Performance Coaching für anspruchsvolle Leader & Executives
            </p>
          </div>

          {/* Main headline */}
          <h1 className="font-inter font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(32px, 4.5vw, 62px)" }}>
            <span className="text-white block">Vom Burnout-Risiko zur</span>
            <span className="text-[#f59e0b] block">Peak Performance</span>
            <span className="text-white/60 block text-[0.75em] font-semibold mt-1">ohne Zeitverlust.</span>
          </h1>

          {/* Hook */}
          <p className="font-inter text-base md:text-lg text-white/55 max-w-lg mb-8 leading-relaxed">
            15-Stunden-Tage, hoher Druck, aber der Körper streikt? Als Ex-Banker weiss ich: Disziplin allein reicht nicht, wenn das System dahinter fehlt. Ich finde die Hebel die deine Performance verdoppeln.
          </p>

          {/* Social proof strip */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />)}
            </div>
            <span className="text-white/40 text-sm font-inter">59 Bewertungen · 4.9 ★</span>
            <span className="text-white/20">|</span>
            <span className="text-white/40 text-sm font-inter">500+ Klienten</span>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-4">
            {pricingCards.map((card, i) => (
              <div key={i} className={`rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                card.highlight
                  ? "bg-[#f59e0b]/8 border border-[#f59e0b]/25 shadow-amber"
                  : "glass-card hover:border-white/12"
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`font-inter text-[10px] uppercase tracking-[0.15em] font-semibold ${
                      card.highlight ? "text-[#f59e0b]" : "text-white/35"
                    }`}>{card.tag}</span>
                    <h3 className="font-inter font-bold text-white text-base mt-0.5">{card.title}</h3>
                  </div>
                  <span className={`font-inter font-bold text-sm ${
                    card.highlight ? "text-[#f59e0b]" : "text-white/50"
                  }`}>{card.price}</span>
                </div>
                <p className="font-inter text-white/40 text-xs leading-relaxed mb-3">{card.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {card.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className={`w-3 h-3 shrink-0 ${card.highlight ? "text-[#f59e0b]" : "text-white/30"}`} />
                      <span className="font-inter text-xs text-white/50">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={card.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-inter font-semibold transition-all ${
                    card.highlight
                      ? "text-[#f59e0b] hover:text-[#f59e0b]/80"
                      : "text-white/40 hover:text-white/70"
                  }`}>
                  {card.cta} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Portrait */}
        <div className="relative lg:pt-8 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[#f59e0b]/5 rounded-2xl blur-3xl scale-110" />
            <img
              src={portrait}
              alt="Marco Laterza Executive Performance Coach Zürich"
              className="relative z-10 w-full object-cover rounded-2xl grayscale contrast-110"
              style={{ aspectRatio: "4/5", objectPosition: "center top" }}
              loading="eager"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 z-20 glass-card rounded-xl px-5 py-4 shadow-amber">
              <p className="font-inter text-[10px] text-white/40 uppercase tracking-widest mb-1">International anerkannt</p>
              <p className="font-inter font-black text-white text-lg">24× Cover</p>
              <p className="font-inter text-[#f59e0b] text-xs">Muscle & Fitness · Men's Health · uvm.</p>
            </div>
            {/* Top badge */}
            <div className="absolute top-6 right-6 z-20 bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded-xl px-4 py-3 text-center">
              <p className="font-inter font-black text-[#f59e0b] text-xl">2</p>
              <p className="font-inter text-white/50 text-[10px]">Plätze frei</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default HeroSection;

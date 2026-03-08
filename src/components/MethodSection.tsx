import { Dumbbell, Apple, Brain, Activity, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Activity,
    title: "Diagnose — Daten statt Bauchgefühl",
    text: "Wir starten mit einer vollständigen Bioanalyse. Hormonstatus, HRV-Baseline, Körperzusammensetzung, Stress-Reaktionsmuster. Erst wenn wir wissen was in deinem Körper wirklich passiert erstellen wir deinen Plan.",
    tag: "Analyse",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Training — Präzision statt Volumen",
    text: "Kein Programm von der Stange. Jede Session wird nach deinem aktuellen HRV-Wert und Hormonstatus gesteuert. Maximale Wirkung in minimaler Zeit. Das ist Banker-Effizienz angewendet auf den Körper.",
    tag: "Training",
  },
  {
    number: "03",
    icon: Apple,
    title: "Ernährung — System statt Diät",
    text: "Eine Strategie die bei Geschäftsessen in Zürich genauso funktioniert wie auf Reisen nach Dubai. Kein Kalorienzählen. Keine Verbote. Ein klares System das du einmal lernst und dann automatisch lebst.",
    tag: "Ernährung",
  },
  {
    number: "04",
    icon: Brain,
    title: "Mental — Resilienz als Wettbewerbsvorteil",
    text: "Stress ist keine Schwäche — falsch gemanagter Stress schon. Wir arbeiten an den neuronalen Mustern die dich unbewusst bremsen und bauen mentale Ressourcen die dich in Drucksituationen schärfer machen.",
    tag: "Mental",
  },
];

const MethodSection = () => (
  <section id="methode" className="py-32 bg-[#0a0a0a] px-6 section-divider">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] text-center mb-3">Die Methode</p>
      <h2 className="font-inter font-bold text-white text-center mb-4 leading-snug"
        style={{ fontSize: "clamp(28px, 4vw, 50px)" }}>
        Leistung entsteht nicht im Referenzbereich,<br />
        <span className="text-white/40">sondern im Optimum.</span>
      </h2>
      <p className="text-center text-white/40 font-inter mb-20 max-w-xl mx-auto text-base leading-relaxed">
        Das System das ich entwickelt habe verbindet medizinische Präzision mit der Denkweise eines Hochleistungstrainers. Vier Phasen. Ein Ergebnis das bleibt.
      </p>

      <div className="space-y-5">
        {steps.map((s, i) => (
          <div key={i}
            className="glass-card rounded-xl p-7 grid md:grid-cols-[auto_1fr] gap-6 items-start group hover:border-[#f59e0b]/20 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex flex-col items-center gap-3">
              <span className="font-inter font-black text-[#f59e0b]/20 text-3xl leading-none group-hover:text-[#f59e0b]/40 transition-colors">
                {s.number}
              </span>
              <s.icon className="w-6 h-6 text-[#f59e0b]/60 group-hover:text-[#f59e0b] transition-colors" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-inter text-[10px] text-[#f59e0b]/50 border border-[#f59e0b]/15 rounded-full px-3 py-1">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-inter font-bold text-white text-lg mb-2 leading-snug">{s.title}</h3>
              <p className="font-inter text-white/40 text-sm leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#kontakt"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-bold text-base hover:brightness-110 transition shadow-amber">
          Das System für dich anfragen <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default MethodSection;

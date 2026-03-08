import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Robert Skrobak",
    text: "Marco geht individuell auf die Situation jedes Klienten ein. Besonders schätze ich seine Erfahrung mit Unternehmern und C-Level Menschen. Er versteht das stressvolle Umfeld und berät mit echtem Fokus auf Resilienz und Leistungsfähigkeit.",
  },
  {
    name: "Yvon Hochstrasser",
    text: "Die Zusammenarbeit mit Marco war eine echte Transformation. Nicht nur körperlich — auch mental. Seine Philosophie ist einzigartig: Es geht nicht nur ums Training sondern um einen Lebensstil der trägt.",
  },
  {
    name: "Nicola Hägeli",
    text: "Als Unternehmer war ich nie wirklich in einer stabilen Routine. Marco hat das verändert. Strukturiert, individuell und alltagstauglich. Energie, Fokus und mentale Stärke — alles auf einem neuen Niveau.",
  },
];

const GoogleReviews = () => (
  <section className="py-24 bg-[#0a0a0a] px-6 section-divider">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] text-center mb-3">Verifizierte Google Bewertungen</p>
      <h2 className="font-inter font-bold text-white text-center mb-12"
        style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
        Was Klienten über Marco sagen.
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card rounded-xl p-6 hover:border-[#f59e0b]/15 transition-all duration-300">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />)}
            </div>
            <p className="font-inter text-white/45 leading-relaxed mb-5 text-sm">{r.text}</p>
            <p className="font-inter font-semibold text-white text-sm">{r.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />)}
          </div>
          <span className="font-inter text-white font-semibold">4.9</span>
          <span className="font-inter text-white/35 text-sm">· 59 Bewertungen</span>
        </div>
        <a href="https://search.google.com/local/reviews?placeid=ChIJhZrzumoKkEcR9iO2vfn5Uh8"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 font-inter text-sm text-[#f59e0b] hover:underline">
          Alle Bewertungen lesen <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
);

export default GoogleReviews;

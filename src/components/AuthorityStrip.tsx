import { Award, Clock, Users, Star } from "lucide-react";

const items = [
  { icon: Award, text: "24× Titelseite internationaler Fitnessmagazine" },
  { icon: Clock, text: "Über 20 Jahre Erfahrung im High-End Segment" },
  { icon: Users, text: "Führungskräfte · Spitzensportler · Entscheider" },
  { icon: Star, text: "4.9 Google Bewertung · 59 verifizierte Rezensionen" },
];

const AuthorityStrip = () => (
  <section className="bg-[#111111] py-5 border-b border-white/5">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12 px-6">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="font-inter text-xs text-white/50">{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AuthorityStrip;

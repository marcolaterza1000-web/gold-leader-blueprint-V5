import { Clock } from "lucide-react";

const ScarcityBanner = () => (
  <div className="bg-primary/8 border-y border-primary/20 py-3.5 text-center">
    <p className="font-inter text-sm text-primary/90 flex items-center justify-center gap-2">
      <Clock className="w-3.5 h-3.5 shrink-0" />
      Marco betreut maximal 12 Klienten gleichzeitig. Aktuell sind{" "}
      <strong className="text-primary">2 Plätze verfügbar.</strong>{" "}
      <a href="#kontakt" className="underline underline-offset-2 hover:text-primary transition">
        Jetzt Erstgespräch sichern
      </a>
    </p>
  </div>
);

export default ScarcityBanner;

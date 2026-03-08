import { MapPin } from "lucide-react";

const locations = [
  { name: "Privatstudio Urdorf", address: "Dorfstrasse 11c, 8902 Urdorf" },
  { name: "Ultimate PT Zürich", address: "Jenatschstrasse 4, 8002 Zürich" },
];

const LocationsSection = () => (
  <section className="py-24 bg-secondary px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
        Exklusiv in Zürich — <span className="text-primary">wo du trainierst</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {locations.map((l, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-8 flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-playfair text-lg text-foreground mb-1">{l.name}</h3>
              <p className="font-inter text-muted-foreground text-sm">{l.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

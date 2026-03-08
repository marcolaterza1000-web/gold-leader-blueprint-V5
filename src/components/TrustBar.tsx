import trustBarLogos from "@/assets/trust-bar-logos.png";

const TrustBar = () => (
  <section className="py-10 bg-[#0a0a0a] border-b border-white/5">
    <div className="container mx-auto px-6">
      <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/25 text-center mb-8">
        Vertraut von führenden Institutionen
      </p>
      <div className="flex justify-center">
        <img
          src={trustBarLogos}
          alt="UBS, Zürcher Kantonalbank, Raiffeisen, LGT, Die Mobiliar, Basler Kantonalbank"
          className="w-full max-w-4xl opacity-50 hover:opacity-80 transition-opacity duration-500"
          style={{ filter: "grayscale(100%) brightness(1.8)" }}
        />
      </div>
    </div>
  </section>
);

export default TrustBar;

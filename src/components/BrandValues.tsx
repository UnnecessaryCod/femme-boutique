import { Gem, Sparkles, Heart } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Ropa Importada Exclusiva",
    description: "Cada prenda es importada directamente de colecciones internacionales, garantizando exclusividad y calidad superior.",
  },
  {
    icon: Sparkles,
    title: "Selección Curada",
    description: "Nuestro equipo selecciona personalmente cada pieza, asegurando que solo lo más refinado llegue a tu armario.",
  },
  {
    icon: Heart,
    title: "Elegancia Femenina",
    description: "Celebramos la feminidad con diseños que combinan sofisticación atemporal y un toque de audacia contemporánea.",
  },
];

const BrandValues = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestra esencia
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            ¿Por qué Femme Boutique?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border border-primary/30 rounded-full group-hover:border-primary transition-colors duration-500">
                <value.icon size={24} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;

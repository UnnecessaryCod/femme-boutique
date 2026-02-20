import heroImage from "@/assets/hero-femme.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moda femenina elegante"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Ropa importada exclusiva
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          Elegancia que trasciende el tiempo
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          Piezas cuidadosamente seleccionadas de las mejores casas de moda del mundo, para la mujer que define su propio estilo.
        </p>
        <a
          href="#colección"
          className="inline-block bg-gold-gradient px-10 py-4 font-body text-sm tracking-[0.2em] uppercase text-primary-foreground hover:opacity-90 transition-opacity duration-300 animate-fade-in"
          style={{ animationDelay: "1.1s", opacity: 0 }}
        >
          Descubrir colección
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-slow" style={{ animationDelay: "1.5s", opacity: 0 }}>
        <div className="w-px h-12 bg-primary/40 mx-auto mb-2" />
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;

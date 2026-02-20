const BrandStory = () => {
  return (
    <section id="sobre-femme" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestra historia
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            La Esencia de Femme Boutique
          </h2>
          
          <div className="w-12 h-px bg-primary mx-auto mb-8" />

          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Femme Boutique nació de una pasión por la moda femenina que trasciende tendencias pasajeras. 
            Cada temporada, viajamos a las capitales europeas de la moda para seleccionar personalmente 
            piezas que combinan artesanía excepcional con diseño atemporal.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Creemos que la verdadera elegancia no grita, sino que susurra. Nuestras colecciones están 
            pensadas para la mujer que aprecia la calidad sobre la cantidad, que busca prendas con historia 
            y carácter.
          </p>
          <p className="font-display text-xl italic text-foreground mt-10">
            "La moda pasa, el estilo permanece"
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

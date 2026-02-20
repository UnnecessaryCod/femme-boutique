const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-chocolate-gradient">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light/70 mb-4">
          Tu estilo te espera
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">
          Descubre la colección completa
        </h2>
        <p className="font-body text-base text-cream/70 max-w-lg mx-auto mb-10">
          Piezas exclusivas importadas que transformarán tu guardarropa con elegancia y distinción.
        </p>
        <a

          className="inline-block bg-gold-gradient px-12 py-4 font-body text-sm tracking-[0.2em] uppercase text-primary-foreground hover:opacity-90 transition-opacity duration-300" href="https://web.whatsapp.com/send?l=es&phone=51938749288&text=Hola,%20me%20gustaron%20algunos%20dise%C3%B1os">

          Comprar ahora
        </a>
      </div>
    </section>);

};

export default CtaSection;
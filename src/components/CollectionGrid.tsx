import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { image: product1, name: "Blusa de Seda Dorada", category: "Blusas", price: "$189" },
  { image: product2, name: "Abrigo Chocolate Vintage", category: "Abrigos", price: "$345" },
  { image: product3, name: "Vestido de Noche Champagne", category: "Vestidos", price: "$420" },
  { image: product4, name: "Suéter Crema con Perlas", category: "Tejidos", price: "$215" },
];

const CollectionGrid = () => {
  return (
    <section id="colección" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Temporada actual
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Colección Destacada
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-card aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                {product.category}
              </p>
              <h3 className="font-display text-lg text-foreground mb-1">
                {product.name}
              </h3>
              <p className="font-body text-sm text-primary">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;

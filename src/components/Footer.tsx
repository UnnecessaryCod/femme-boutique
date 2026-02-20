import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#" className="font-display text-2xl tracking-[0.2em] text-foreground mb-6">
            FEMME <span className="text-gold-gradient">BOUTIQUE</span>
          </a>

          {/* Tagline */}
          <p className="font-body text-sm text-muted-foreground mb-8 max-w-md">
            Ropa importada exclusiva para la mujer sofisticada. Elegancia, calidad y estilo atemporal.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Separator */}
          <div className="w-16 h-px bg-border mb-6" />

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground tracking-[0.1em]">
            © 2026 Femme Boutique. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

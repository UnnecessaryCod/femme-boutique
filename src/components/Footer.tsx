

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
            <a
              href="https://www.tiktok.com/@bea26287?_r=1&_t=ZS-944GhLDu0r1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
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

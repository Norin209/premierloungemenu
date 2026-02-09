import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-spa-cream/90 backdrop-blur-md border-b border-spa-gold/20 shadow-sm">
      <div className="container py-3">
        
        {/* Flexbox for Left-Center-Right balance */}
        <div className="d-flex justify-content-between items-center">
          
          {/* LEFT: The "Stamp" (Adds authority) */}
          <div className="hidden md:block w-[100px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-spa-gold border border-spa-gold/30 px-2 py-1 rounded-sm">
              Est. 2026
            </span>
          </div>

          {/* CENTER: The Main Brand */}
          <div className="text-center">
            <a href="/" className="text-3xl font-display font-bold text-spa-brown no-underline tracking-tighter hover:text-spa-gold transition-colors">
              PREMIER
            </a>
            {/* Tiny sub-text right under the logo */}
            <p className="text-[8px] uppercase tracking-[0.4em] text-spa-gold/80 m-0">
              Lounge
            </p>
          </div>

          {/* RIGHT: Visual Icon (Instagram/Gallery) */}
          <div className="w-[100px] d-flex justify-end">
            <button className="text-spa-brown hover:text-spa-gold transition-colors group d-flex items-center gap-2">
              <span className="hidden md:block text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100">
                Gallery
              </span>
              {/* Simple Instagram/Camera Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
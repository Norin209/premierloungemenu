import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-spa-cream/95 backdrop-blur-md border-b border-spa-gold/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        
        {/* RELATIVE PARENT */}
        <div className="flex justify-between items-center relative h-10 md:h-12">
          
          {/* LEFT: "Est. 2026" */}
          <div className="hidden md:flex w-25 justify-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-spa-gold border border-spa-gold/30 px-3 py-1 rounded-sm">
              Est. 2026
            </span>
          </div>

          {/* CENTER: LOGO (Adjusted visual alignment) */}
          {/* Added 'mt-2' to nudge the whole logo down slightly for visual balance */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-2">
            <a href="/" className="group block no-underline">
              <h1 className="text-2xl md:text-3xl font-display font-bold text-spa-brown tracking-tighter group-hover:text-spa-gold transition-colors duration-300 whitespace-nowrap">
                PREMIER
              </h1>
              <p className="text-[8px] uppercase tracking-[0.4em] text-spa-gold/80 mt-0.5 group-hover:text-spa-gold transition-colors duration-300">
                Lounge
              </p>
            </a>
          </div>

          {/* RIGHT: Gallery Icon */}
          <div className="w-auto md:w-25 flex justify-end items-center ml-auto">
            <button className="text-spa-brown hover:text-spa-gold transition-colors group flex items-center gap-2">
              <span className="hidden md:block text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                Gallery
              </span>
              <div className="p-2 -mr-2 rounded-full hover:bg-spa-gold/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
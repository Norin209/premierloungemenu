import React from 'react';

export default function Footer() {
  return (
    // 'overflow-hidden' prevents any accidental horizontal scrolling
    <footer className="w-full bg-spa-brown text-white/90 pt-16 pb-8 border-t-4 border-spa-gold overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* MOBILE: grid-cols-1 (Stacked) | DESKTOP: grid-cols-3 (Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          
          {/* COL 1: Brand & Vibe */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl font-display text-spa-gold mb-3">PREMIER</h3>
            <p className="text-sm font-light text-white/60 leading-relaxed mb-6 max-w-sm">
              Where luxury meets wellness. Experience the finest Japanese and Korean spa treatments in the heart of Phnom Penh.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                <svg key="fb" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
                <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                <svg key="tt" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              ].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-spa-gold hover:border-spa-gold hover:text-white transition-all text-white/60">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: Contact Info */}
          {/* Centered on Mobile, Aligned top on Desktop */}
          <div className="flex flex-col items-center justify-start pt-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-center">
              <li className="flex flex-col items-center gap-1">
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Location</span>
                <span className="font-display text-lg">Toul Kork, Phnom Penh</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Booking</span>
                <span className="font-display text-lg text-spa-gold hover:text-white transition-colors cursor-pointer">
                  012 260 68
                </span>
              </li>
            </ul>
          </div>

          {/* COL 3: Hours */}
          {/* Centered on Mobile, Right-aligned on Desktop */}
          <div className="flex flex-col items-center lg:items-end pt-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold mb-6">Opening Hours</h4>
            {/* Fixed width w-56 ensures alignment, max-w-full prevents overflow on tiny screens */}
            <div className="flex flex-col w-56 max-w-full">
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span className="text-white/60 text-sm">Mon - Fri</span>
                <span className="font-mono text-sm">9:00 - 21:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                <span className="text-white/60 text-sm">Sat - Sun</span>
                <span className="font-mono text-sm">10:00 - 22:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
            © 2026 Premier Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
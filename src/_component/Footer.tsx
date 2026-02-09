import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-spa-brown text-white/90 pt-16 pb-8 border-t-4 border-spa-gold">
      <div className="container">
        
        <div className="row g-5">
          
          {/* COL 1: Brand & Vibe */}
          <div className="col-lg-4 text-center text-lg-start">
            <h3 className="text-3xl font-display text-spa-gold mb-3">PREMIER</h3>
            <p className="text-sm font-light text-white/60 leading-relaxed mb-4">
              Where luxury meets wellness. Experience the finest Japanese and Korean spa treatments in the heart of Phnom Penh.
            </p>
            {/* Social Icons Row */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              {/* Facebook Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-spa-gold hover:border-spa-gold hover:text-white transition-all text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-spa-gold hover:border-spa-gold hover:text-white transition-all text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* TikTok/Video Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-spa-gold hover:border-spa-gold hover:text-white transition-all text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              </a>
            </div>
          </div>

          {/* COL 2: Contact Info */}
          <div className="col-lg-4 text-center">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold mb-4">Contact Us</h4>
            <ul className="list-unstyled space-y-3">
              <li className="d-flex flex-column items-center gap-1">
                <span className="text-white/40 text-xs uppercase">Location</span>
                <span className="font-display text-lg">Toul Kork, Phnom Penh</span>
              </li>
              <li className="d-flex flex-column items-center gap-1">
                <span className="text-white/40 text-xs uppercase">Booking</span>
                <span className="font-display text-lg text-spa-gold">012 999 888</span>
              </li>
            </ul>
          </div>

          {/* COL 3: Hours */}
          <div className="col-lg-4 text-center text-lg-end">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold mb-4">Opening Hours</h4>
            <div className="inline-block text-left">
              <div className="d-flex justify-between w-48 border-b border-white/10 pb-2 mb-2">
                <span className="text-white/60">Mon - Fri</span>
                <span>9:00 - 21:00</span>
              </div>
              <div className="d-flex justify-between w-48 border-b border-white/10 pb-2 mb-2">
                <span className="text-white/60">Sat - Sun</span>
                <span>10:00 - 22:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2026 Premier Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
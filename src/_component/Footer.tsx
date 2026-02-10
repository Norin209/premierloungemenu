import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-spa-cream text-spa-brown pt-20 pb-10 border-t border-spa-brown/5 overflow-hidden relative">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* COL 1: Brand */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-display font-bold text-spa-brown mb-6">PREMIER</h3>
            <p className="text-sm font-sans text-spa-brown/60 leading-relaxed max-w-xs mb-6">
              The Art of Wellness. <br/>
              Est. 2026 • Phnom Penh
            </p>
            
            {/* SOCIAL ICONS (Linked to your actual profiles) */}
            <div className="flex gap-4">
               {/* Instagram: @PREMIERLOUNGE_1 */}
               <a 
                 href="https://www.instagram.com/premierlounge_1/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-spa-brown/40 hover:text-spa-gold transition-colors"
                 aria-label="Instagram"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               
               {/* Facebook: Link Provided */}
               <a 
                 href="https://www.facebook.com/share/14NgD5WSaLg/?mibextid=wwXIfr" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-spa-brown/40 hover:text-spa-gold transition-colors"
                 aria-label="Facebook"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
            </div>
          </div>

          {/* COL 2: Visit */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold font-bold mb-6">Visit</h4>
            <address className="not-italic text-spa-brown/70 font-sans space-y-2 text-sm leading-loose">
              <p>Toul Kork District</p>
              <p>St 315, Phnom Penh</p>
              <p>Cambodia</p>
            </address>
          </div>

          {/* COL 3: Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold font-bold mb-6">Booking</h4>
            <ul className="space-y-4 text-sm text-spa-brown/70">
              <li>
                {/* FIXED: 'text-spa-brown!' forces the color, blocking Safari blue links */}
                <a 
                  href="tel:01226068" 
                  className="hover:text-spa-gold transition-colors text-xl font-display tracking-wide block text-spa-brown! no-underline"
                >
                  012 260 68
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@premierlounge.com" 
                  className="hover:text-spa-gold transition-colors text-xs uppercase tracking-wider opacity-60 text-spa-brown! no-underline"
                >
                  hello@premierlounge.com
                </a>
              </li>
            </ul>
          </div>

           {/* COL 4: Hours */}
           <div className="flex flex-col items-start">
            <h4 className="text-xs uppercase tracking-[0.2em] text-spa-gold font-bold mb-6">Hours</h4>
            <ul className="space-y-3 text-sm font-sans text-spa-brown/70 w-full">
              {/* FIXED: 'max-w-50' clears the yellow warning */}
              <li className="flex justify-between w-full max-w-50 border-b border-spa-brown/10 pb-2">
                <span>Mon - Fri</span>
                <span className="font-bold text-spa-brown">09:00 - 21:00</span>
              </li>
              <li className="flex justify-between w-full max-w-50 border-b border-spa-brown/10 pb-2">
                <span>Sat - Sun</span>
                <span className="font-bold text-spa-brown">10:00 - 22:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-spa-brown/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-[10px] text-spa-brown/30 uppercase tracking-[0.2em]">
            © 2026 Premier Lounge
          </p>

          {/* FIXED: '-bottom-2.5' clears the yellow warning */}
          <h1 className="text-4xl md:text-6xl font-display text-spa-brown/5 tracking-tighter pointer-events-none select-none absolute -bottom-2.5 right-0 md:static md:bottom-auto md:right-auto">
            PREMIER
          </h1>
        </div>

      </div>
    </footer>
  );
}
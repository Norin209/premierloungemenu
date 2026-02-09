"use client";

import React, { useState, useEffect, useRef } from 'react';
import { db } from '../_utils/firebase'; 
import { collection, onSnapshot } from 'firebase/firestore';

// --- 1. STABLE LUXURY IMAGES (Fixed & Tested) ---
const STOCK_IMAGES: Record<string, string> = {
  default:  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", 
  facial:   "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80", 
  hair:     "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80", 
  nails:    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80", 
  body:     "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", 
  deal:     "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80", 
};

// --- 2. ROBUST IMAGE COMPONENT ---
const ServiceImage = ({ src, alt, className }: { src?: string, alt: string, className?: string }) => {
  const [error, setError] = useState(false);

  const getStockImage = (keyword: string) => {
    const lower = keyword.toLowerCase();
    if (lower.includes('hair') || lower.includes('cut')) return STOCK_IMAGES.hair;
    if (lower.includes('face') || lower.includes('facial')) return STOCK_IMAGES.facial;
    if (lower.includes('nail') || lower.includes('manicure')) return STOCK_IMAGES.nails;
    if (lower.includes('body') || lower.includes('massage')) return STOCK_IMAGES.body;
    return STOCK_IMAGES.default;
  };

  const imageSource = error || !src ? getStockImage(alt) : src;

  return (
    <img 
      src={imageSource} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        if (!error) { setError(true); } 
        else { e.currentTarget.src = "https://placehold.co/600x800/F5F5DC/8B4513?text=Premier"; }
      }} 
    />
  );
};

// --- INTERFACES ---
interface ServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  promoPrice?: string;      
  isMonthlyPromo?: boolean; 
  description?: string;
  image?: string;
  duration?: string;
}

type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('deals');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const menuListRef = useRef<HTMLDivElement>(null);
  const [groupedMenu, setGroupedMenu] = useState<Record<string, MenuCategory>>({});
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      const allServices = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ServiceItem));

      const organized: Record<string, MenuCategory> = {
        deals:   { id: 'deals',   title: 'Seasonal Deals', subtitle: 'Limited Time Offers', items: [] },
        facials: { id: 'facials', title: 'Advanced Facials', subtitle: 'Medical-grade Treatments', items: [] },
        hair:    { id: 'hair',    title: 'Hair Artistry', subtitle: 'Cut, Color & Care', items: [] },
        nails:   { id: 'nails',   title: 'Nails & Lashes', subtitle: 'Manicures & Pedicures', items: [] },
        body:    { id: 'body',    title: 'Body & Wax', subtitle: 'Relaxation & Smooth Skin', items: [] },
      };

      allServices.forEach(service => {
        const cat = service.category?.toLowerCase() || "";
        if (service.isMonthlyPromo) organized.deals.items.push(service);
        
        if (cat.includes('facial') || cat.includes('face')) organized.facials.items.push(service);
        else if (cat.includes('hair')) organized.hair.items.push(service);
        else if (cat.includes('nail') || cat.includes('lash')) organized.nails.items.push(service);
        else if (cat.includes('body') || cat.includes('wax') || cat.includes('massage')) organized.body.items.push(service);
      });

      setGroupedMenu(organized);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // SCROLL MONITOR
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (tabId: string) => {
    setActiveTab(tabId);
    if (menuListRef.current) {
      menuListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCategory = groupedMenu[activeTab];

  const tabs = [
    { id: 'deals', label: 'Deals', special: true },
    { id: 'facials', label: 'Facials' },
    { id: 'hair', label: 'Hair' },
    { id: 'nails', label: 'Nails' },
    { id: 'body', label: 'Body' }
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-spa-brown bg-spa-cream">Loading Premier Menu...</div>;
  }

  return (
    <main className="min-h-screen bg-spa-cream text-spa-brown font-sans selection:bg-spa-gold selection:text-white relative">
      
      {/* HERO HEADER */}
      <header className="py-12 md:py-20 text-center animate-fade-in relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-8xl tracking-tighter mb-4 text-spa-brown font-display">
            PREMIER LOUNGE
          </h1>
          <p className="text-spa-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            The Art of Wellness • Est. 2026
          </p>
        </div>
      </header>

      {/* VISUAL CATALOG TABS */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            return (
              <div 
                key={tab.id}
                onClick={() => handleCategoryClick(tab.id)} 
                // Grid Logic: Deals spans 2 cols on mobile
                className={`
                  cursor-pointer group relative transition-all duration-500 ease-out
                  ${index === 0 ? 'col-span-2 md:col-span-1' : 'col-span-1'}
                `}
              >
                {/* VISUAL CONTAINER 
                  - Removed 'opacity-80' logic. Everything is now visible.
                  - Added 'ring' and 'scale' for selection.
                  - Added 'hover:scale' for interaction.
                */}
                <div className={`
                  ${index === 0 ? 'aspect-[2/1] md:aspect-[3/4]' : 'aspect-[3/4]'} 
                  relative overflow-hidden 
                  transition-all duration-500
                  ${isActive 
                    ? 'ring-2 ring-spa-gold ring-offset-2 ring-offset-spa-cream shadow-2xl scale-[1.02] z-10' 
                    : 'hover:scale-[1.02] hover:shadow-xl shadow-md border border-transparent'}
                `}>
                  
                  {/* Image Container */}
                  <div className="w-full h-full bg-spa-beige/20 relative">
                    <ServiceImage 
                      src="" 
                      alt={tab.label} 
                      className={`
                        w-full h-full object-cover transition-transform duration-700 
                        ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                      `} 
                    />
                    {/* Subtle Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Label Overlay */}
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-4">
                     <span className={`
                       text-xs md:text-sm font-bold uppercase tracking-widest text-white drop-shadow-lg 
                       border-b-2 pb-1 transition-all duration-300
                       ${isActive ? 'border-spa-gold text-spa-gold' : 'border-white/50 group-hover:border-white'}
                     `}>
                       {tab.label}
                     </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DYNAMIC LIST SECTION */}
      <div ref={menuListRef} className="bg-white/50 py-12 min-h-[600px] border-t border-spa-gold/10 scroll-mt-4">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-display text-spa-brown">{activeCategory?.title}</h2>
              <p className="text-gray-400 text-xs font-sans uppercase tracking-widest">{activeCategory?.subtitle}</p>
            </div>
            
            <div className="flex items-center gap-2 bg-white border border-spa-gold/20 rounded-md p-1 shadow-sm self-end md:self-auto">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-spa-brown text-white' : 'text-gray-400 hover:text-spa-brown'}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-spa-brown text-white' : 'text-gray-400 hover:text-spa-brown'}`}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              </button>
            </div>
          </div>

          <div className={`grid gap-4 md:gap-6 animate-fade-in ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
            {activeCategory?.items.length === 0 ? (
               <div className="col-span-full text-center text-gray-400 italic py-10">No services found in this category.</div>
            ) : (
              activeCategory?.items.map((item) => (
                <div key={item.id} className="group h-full">
                  {viewMode === 'grid' ? (
                    <div className="bg-white border border-spa-gold/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-[4/5] relative overflow-hidden bg-spa-beige/20">
                        <ServiceImage 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 md:p-4 flex flex-col flex-grow text-center">
                        <h3 className="font-display text-base md:text-lg text-spa-brown mb-1 leading-tight">{item.name}</h3>
                        <p className="text-spa-gold font-serif italic mb-2 text-sm">{item.price}</p>
                        <p className="text-gray-400 text-[10px] line-clamp-2 hidden md:block">{item.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white border border-spa-gold/10 hover:shadow-md transition-all duration-300 flex h-full">
                      <div className="w-24 md:w-[120px] shrink-0 relative overflow-hidden bg-spa-beige/20">
                         <ServiceImage 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 md:p-4 flex flex-col justify-center w-full">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-display text-base md:text-lg text-spa-brown">{item.name}</h3>
                          <span className="font-serif italic text-spa-gold text-sm md:text-base">{item.price}</span>
                        </div>
                        <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed mb-2 md:mb-3 line-clamp-2">{item.description}</p>
                        {item.duration && <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded w-fit">{item.duration}</span>}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* --- BACK TO TOP BUTTON --- */}
      <button 
        onClick={scrollToTop}
        className={`
          fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 
          bg-spa-brown text-white hover:bg-spa-gold 
          w-10 h-10 md:w-12 md:h-12 rounded-full shadow-xl flex items-center justify-center 
          transition-all duration-500 transform
          ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
        title="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

    </main>
  );
}
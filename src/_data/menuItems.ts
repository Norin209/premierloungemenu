export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    duration?: string;
    image: string; // New Image Field
  };
  
  export type MenuCategory = {
    id: string;
    title: string;
    subtitle: string;
    items: MenuItem[];
  };
  
  export const MENU_ITEMS: MenuCategory[] = [
    {
      id: "deals",
      title: "Seasonal Deals",
      subtitle: "Exclusive offers for a limited time",
      items: [
        { 
          id: "d1", 
          name: "The Holiday Glow", 
          description: "Full body scrub + Mini Facial + Champagne.", 
          price: "$85", 
          duration: "90 min",
          image: "/images/holiday-glow.jpg" 
        },
        { 
          id: "d2", 
          name: "Party Prep Duo", 
          description: "Keratin blowout combined with Gel Manicure.", 
          price: "$60", 
          duration: "120 min",
          image: "/images/party-prep.jpg" 
        }
      ]
    },
    {
      id: "facials",
      title: "Advanced Facials",
      subtitle: "Medical-grade skin rejuvenation",
      items: [
        { id: "f1", name: "EMS Lift & Firm", description: "Sculpting treatment to tone facial muscles.", price: "$65", duration: "60 min", image: "/images/ems.jpg" },
        { id: "f2", name: "Microneedling", description: "Collagen induction for texture & pores.", price: "$120", duration: "90 min", image: "/images/microneedle.jpg" },
        { id: "f3", name: "Glass Skin Ritual", description: "Intensive Korean hydration therapy.", price: "$80", duration: "75 min", image: "/images/glass-skin.jpg" },
        { id: "f4", name: "Acne Clear", description: "Deep pore cleansing and LED therapy.", price: "$55", duration: "60 min", image: "/images/acne.jpg" },
        { id: "f5", name: "Gold Mask", description: "24K Gold leaf application for radiance.", price: "$90", duration: "60 min", image: "/images/gold.jpg" }
      ]
    },
    {
      id: "hair",
      title: "Hair Artistry",
      subtitle: "Cuts, Color & Treatments",
      items: [
        { id: "h1", name: "Keratin Gold", description: "Ultimate smoothing for mirror-shine hair.", price: "$150+", duration: "120 min", image: "/images/keratin.jpg" },
        { id: "h2", name: "Botox Repair", description: "Deep conditioning filler for damaged hair.", price: "$100+", duration: "90 min", image: "/images/botox.jpg" },
        { id: "h3", name: "Balayage Color", description: "Hand-painted highlights for natural depth.", price: "$180+", duration: "180 min", image: "/images/balayage.jpg" },
        { id: "h4", name: "Precision Cut", description: "Wash, cut, and signature blowout.", price: "$35", duration: "60 min", image: "/images/cut.jpg" }
      ]
    },
    {
      id: "nails",
      title: "Nails & Lashes",
      subtitle: "Manicures, Pedicures & Extensions",
      items: [
        { id: "n1", name: "Gel Manicure", description: "Cuticle care with premium gel polish.", price: "$25", duration: "45 min", image: "/images/gel.jpg" },
        { id: "n2", name: "Spa Pedicure", description: "Foot soak, scrub, and massage.", price: "$35", duration: "60 min", image: "/images/pedi.jpg" },
        { id: "n3", name: "Lash Lift", description: "Natural curl and tint for your lashes.", price: "$45", duration: "60 min", image: "/images/lash.jpg" }
      ]
    },
    {
      id: "body",
      title: "Body & Wax",
      subtitle: "Relaxation & Smooth Skin",
      items: [
        { id: "b1", name: "Korean Scrub", description: "Vigorous exfoliation for baby-soft skin.", price: "$40", duration: "45 min", image: "/images/scrub.jpg" },
        { id: "b2", name: "Aroma Massage", description: "Full body oil massage.", price: "$50", duration: "60 min", image: "/images/massage.jpg" },
        { id: "b3", name: "Full Leg Wax", description: "Gentle wax for smooth results.", price: "$30", duration: "30 min", image: "/images/wax.jpg" }
      ]
    }
  ];
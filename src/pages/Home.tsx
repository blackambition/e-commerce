import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Heart, MapPin, ShoppingBag } from 'lucide-react';
import { products, tours } from '../data/mockData';
import { ProductCard, TourCard } from '../components/Cards';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { formatPrice } = useCart();
  const popularProducts = products.filter(p => p.isPopular).slice(0, 6);
  const featuredTours = tours.slice(0, 3);

  const categories = [
    { name: 'Travel & Hiking Gear', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80', query: 'Travel & Hiking Gear' },
    { name: 'Bundles & Kits', image: 'https://images.unsplash.com/photo-1547347498-84226d7010f3?auto=format&fit=crop&q=80', query: 'Bundles' },
    { name: 'Cultural Inspiration', image: 'https://images.unsplash.com/photo-1611077544831-29e20fc7df62?auto=format&fit=crop&q=80', query: 'Cultural & Lifestyle' },
    { name: 'Health & Protection', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80', query: 'Health & Protection' }
  ];

  return (
    <div className="bg-brand-sand-light">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550505101-7faaa618b76d?auto=format&fit=crop&q=80" 
            alt="Namibian Safari Landscape" 
            className="w-full h-full object-cover scale-105 origin-center animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="text-brand-ochre font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-6 block drop-shadow-xl">
              Himba Heritage Co.
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] drop-shadow-2xl">
              Built for <span className="text-brand-sand">Adventure.</span><br/>Inspired by Namibia.
            </h1>
            <p className="text-base md:text-xl font-light mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Premium travel gear, rugged outdoor apparel, and cultural expeditions designed for the global explorer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink 
                to="/shop" 
                className="w-full sm:w-auto bg-brand-terracotta text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#8A3A31] transition-colors shadow-2xl"
              >
                Shop Gear
              </NavLink>
              <NavLink 
                to="/tours" 
                className="w-full sm:w-auto bg-transparent border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-brand-charcoal transition-colors shadow-2xl backdrop-blur-sm"
              >
                Explore Tours
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Values Bar */}
      <section className="bg-brand-charcoal text-white border-y border-brand-charcoal/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
              <Heart className="w-6 h-6 text-brand-ochre mb-3" />
              <h3 className="font-serif text-lg tracking-wide mb-1">Cultural Support</h3>
              <p className="text-xs text-white/60 tracking-wider uppercase flex items-center justify-center">We celebrate Himba culture.</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
              <Compass className="w-6 h-6 text-brand-terracotta mb-3" />
              <h3 className="font-serif text-lg tracking-wide mb-1">Expedition Grade</h3>
              <p className="text-xs text-white/60 tracking-wider uppercase">Tested in the Namib Desert</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
              <Shield className="w-6 h-6 text-brand-sand mb-3" />
              <h3 className="font-serif text-lg tracking-wide mb-1">Secure & Fast</h3>
              <p className="text-xs text-white/60 tracking-wider uppercase">Global shipping & returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-charcoal">Field Tested Categories</h2>
          <div className="w-16 h-0.5 bg-brand-terracotta mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <NavLink to={`/shop?category=${encodeURIComponent(cat.query)}`} key={i} className="group relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden bg-brand-charcoal flex items-center justify-center rounded-sm">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
              <div className="relative z-10 text-center px-4">
                <h3 className="text-white font-serif text-xl md:text-2xl font-bold drop-shadow-md group-hover:-translate-y-2 transition-transform duration-300">{cat.name}</h3>
                <span className="text-brand-sand text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 absolute left-0 right-0 mt-2 hover:underline">Shop Now</span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Featured Products (Scrollable on Mobile like Shopify) */}
      <section className="py-20 bg-white border-y border-brand-sand">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Essential Travel Gear</h2>
              <p className="text-brand-charcoal/60 max-w-xl">High-performance gear built for the trail, designed for the world.</p>
            </div>
            <NavLink to="/shop" className="hidden md:flex items-center text-brand-charcoal font-bold text-xs uppercase tracking-widest hover:text-brand-terracotta transition-colors group pb-1 border-b border-transparent hover:border-brand-terracotta">
              View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
          
          <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-6 pb-8 snap-x snap-mandatory no-scrollbar">
            {popularProducts.map((product) => (
              <div key={product.id} className="min-w-[280px] w-[75vw] md:w-auto snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] w-full max-w-md mx-auto shadow-2xl relative z-10 p-2 bg-white rotate-[-2deg] transition-all hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1549480608-f9905c1d6833?auto=format&fit=crop&q=80" 
                alt="Himba woman in traditional jewelry" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 -right-4 md:-right-10 w-48 aspect-square bg-brand-sand/50 -z-10 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:w-1/2">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-terracotta mb-4">Our Heritage</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-brand-charcoal leading-tight">
              A Modern Brand with <br/><span className="italic text-[1.1em]">Ancient Roots</span>
            </h2>
            <p className="text-brand-charcoal/70 mb-6 leading-relaxed text-lg font-light">
              Himba Heritage Co. was born from a deep respect for the resilience and beauty of the Kaokoland region in northern Namibia. We engineer premium outdoor gear infused with an African identity.
            </p>
            <p className="text-brand-charcoal/60 mb-10 leading-relaxed text-sm">
              We are not just a brand; we are a bridge. A percentage of every sale goes directly towards community development projects for the Himba communities. Equip yourself for your next journey, while supporting theirs.
            </p>
            <NavLink 
              to="/about" 
              className="inline-block border border-brand-charcoal text-brand-charcoal px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-colors shadow-sm"
            >
              Read Our Mission
            </NavLink>
          </div>
        </div>
      </section>

      {/* Experiences/Tours Preview */}
      <section className="py-24 bg-brand-charcoal text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Unforgettable Expeditions</h2>
              <div className="w-16 h-0.5 bg-brand-terracotta mx-auto mb-6"></div>
              <p className="text-white/70 max-w-2xl mx-auto font-light">Experience the untamed beauty of Namibia with our guided, respectful cultural tours and wildlife safaris.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map(tour => (
                 <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            
            <div className="text-center mt-12">
               <NavLink to="/tours" className="inline-block border text-brand-charcoal bg-brand-sand border-brand-sand px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:border-white transition-colors shadow-xl">
                 View All Itineraries
               </NavLink>
            </div>
         </div>
      </section>

      {/* Email Collection / Upsell Bar */}
      <section className="bg-brand-terracotta text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4 drop-shadow-sm">Join the Expedition</h2>
            <p className="text-white/90 mb-8 font-light text-lg">Sign up for field notes, gear drops, and get 10% off your first adventure.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
               <button type="submit" className="bg-white text-brand-terracotta font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-brand-sand transition-colors shadow-lg">Subscribe</button>
            </form>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-4 bg-brand-charcoal">
        <div className="text-center py-12 text-white">
          <h2 className="font-serif text-3xl mb-3">@HimbaHeritage</h2>
          <p className="text-white/60 text-sm tracking-wide">Gear up. Get out there. Tag us.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-0.5">
          <div className="aspect-square bg-brand-sand relative group overflow-hidden">
             <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80" alt="IG 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-brand-terracotta/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><ShoppingBag className="text-white bg-black/50 p-3 rounded-full backdrop-blur-sm" /></div>
          </div>
          <div className="aspect-square bg-brand-sand relative group overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" alt="IG 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-brand-terracotta/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><ShoppingBag className="text-white bg-black/50 p-3 rounded-full backdrop-blur-sm" /></div>
          </div>
          <div className="aspect-square bg-brand-sand relative group overflow-hidden hidden md:block">
             <img src="https://images.unsplash.com/photo-1550505101-7faaa618b76d?auto=format&fit=crop&w=500&q=80" alt="IG 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="aspect-square bg-brand-sand relative group overflow-hidden hidden md:block">
             <img src="https://images.unsplash.com/photo-1596755094514-f87e32f85f2c?auto=format&fit=crop&w=500&q=80" alt="IG 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-brand-terracotta/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><ShoppingBag className="text-white bg-black/50 p-3 rounded-full backdrop-blur-sm" /></div>
          </div>
          <div className="aspect-square bg-brand-sand relative group overflow-hidden hidden xl:block">
             <img src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=500&q=80" alt="IG 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </div>
  );
}

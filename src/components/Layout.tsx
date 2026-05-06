import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, MessageCircle, MapPin, Search, User, CreditCard } from 'lucide-react';
import { useCart, Currency } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen, cart, cartTotal, removeFromCart, updateQuantity, currency, setCurrency, formatPrice } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Shop Gear', path: '/shop' },
    { name: 'Expeditions', path: '/tours' },
    { name: 'Our Identity', path: '/about' },
    { name: 'Journal', path: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-charcoal overflow-x-hidden">
      {/* Utility Bar */}
      <div className="bg-brand-charcoal text-white text-[10px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-widest uppercase font-medium">
          <div className="flex-1 flex justify-start">
            <span className="hidden sm:inline">Free Global Shipping over $150</span>
            <span className="sm:hidden">Shipping over $150</span>
          </div>
          <div className="flex-1 text-center text-brand-ochre hidden md:block">
            Supporting Namibian Artisans
          </div>
          <div className="flex-1 flex justify-end items-center gap-4 sm:gap-6">
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value as Currency)} 
              className="bg-transparent border-none outline-none cursor-pointer text-white appearance-none text-right font-bold tracking-widest"
              aria-label="Select Currency"
            >
              <option value="USD" className="text-brand-charcoal">USD $</option>
              <option value="NAD" className="text-brand-charcoal">NAD N$</option>
              <option value="EUR" className="text-brand-charcoal">EUR €</option>
            </select>
            <button className="hidden sm:inline hover:text-brand-terracotta transition-colors">Log In</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-brand-sand-light border-b border-brand-sand/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Mobile Menu Button - Left */}
            <div className="md:hidden flex items-center pr-4">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Nav - Left */}
            <nav className="hidden md:flex space-x-8 flex-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest font-bold transition-all hover:text-brand-terracotta relative group py-2 ${
                      isActive ? 'text-brand-terracotta' : 'text-brand-charcoal'
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </NavLink>
              ))}
            </nav>

            {/* Logo - Center */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <NavLink to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-brand-charcoal transition-transform hover:scale-105 active:scale-95">
                Himba Heritage Co<span className="text-brand-terracotta">.</span>
              </NavLink>
            </div>

            {/* Icons - Right */}
            <div className="flex items-center justify-end space-x-4 md:space-x-6 flex-1">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-brand-charcoal hover:text-brand-terracotta transition-colors hidden sm:block delay-75"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button className="text-brand-charcoal hover:text-brand-terracotta transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>

              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative text-brand-charcoal hover:text-brand-terracotta transition-colors group"
                aria-label="Cart"
              >
                <ShoppingBag className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" />
                {cartCount > 0 ? (
                  <span className="absolute -top-1 -right-2 bg-brand-terracotta text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                ) : null}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-down Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-white border-b border-brand-sand overflow-hidden absolute w-full top-full left-0 origin-top z-40"
            >
              <div className="max-w-4xl mx-auto px-4 py-8 relative">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-charcoal/40" />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search products, categories, or experiences..." 
                  className="w-full text-xl font-serif text-brand-charcoal py-4 pl-12 pr-12 border-b-2 border-brand-charcoal focus:outline-none focus:border-brand-terracotta bg-transparent transition-colors"
                />
                <button onClick={() => setIsSearchOpen(false)} className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-charcoal/50 hover:text-brand-charcoal p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden fixed top-[100px] sm:top-[104px] left-0 w-full bg-brand-sand-light z-40 overflow-y-auto pb-40"
            >
              <div className="flex flex-col h-full p-6 space-y-6">
                
                {/* Mobile Search Input */}
                 <div className="relative mb-6">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/50" />
                   <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-3 bg-white border border-brand-sand rounded-sm focus:outline-none focus:border-brand-terracotta font-serif text-lg" />
                 </div>

                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block text-2xl font-serif text-brand-charcoal hover:text-brand-terracotta border-b border-brand-sand/50 pb-4"
                  >
                    {link.name}
                  </NavLink>
                ))}
                
                <div className="pt-8 space-y-4">
                  <a href="#" className="flex items-center gap-3 text-brand-charcoal/80 font-bold uppercase tracking-widest text-sm"><User className="w-5 h-5" /> Account / Login</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1A19] text-brand-sand pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-brand-sand/10 pb-16">
            
            {/* Brand Col */}
            <div className="col-span-1 lg:col-span-1">
              <span className="font-serif text-3xl font-bold tracking-tight text-brand-sand mb-6 block">
                Himba Heritage Co<span className="text-brand-terracotta">.</span>
              </span>
              <p className="text-brand-sand/60 text-sm leading-relaxed mb-8 max-w-sm">
                Authentic craftsmanship, ethical tourism, and premium gear. Celebrating the resilient spirit of Kaokoland.
              </p>
              {/* Trust Badges Minimal */}
              <div className="flex gap-4 opacity-70">
                 <CreditCard className="w-8 h-8" />
                 {/* Simulate other payment icons visually via SVGs/letters if icons are limited */}
                 <div className="w-12 h-8 border border-current rounded flex items-center justify-center font-bold italic text-xs">Visa</div>
                 <div className="w-12 h-8 border border-current rounded flex items-center justify-center font-bold text-[10px]">PAYPAL</div>
              </div>
            </div>
            
            {/* Links Col 1 */}
            <div>
              <h4 className="font-serif font-bold mb-6 text-brand-sand text-lg">Shop</h4>
              <ul className="space-y-4 text-sm text-brand-sand/60">
                <li><NavLink to="/shop" className="hover:text-brand-terracotta transition-colors">Our Collection</NavLink></li>
                <li><NavLink to="/shop?category=Crafts" className="hover:text-brand-terracotta transition-colors">Himba Crafts</NavLink></li>
                <li><NavLink to="/shop?category=Apparel" className="hover:text-brand-terracotta transition-colors">Safari Apparel</NavLink></li>
                <li><NavLink to="/shop?category=Safari Gear" className="hover:text-brand-terracotta transition-colors">Outdoor Gear</NavLink></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 className="font-serif font-bold mb-6 text-brand-sand text-lg">Support</h4>
              <ul className="space-y-4 text-sm text-brand-sand/60">
                <li><a href="#" className="hover:text-brand-terracotta transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-brand-terracotta transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-brand-terracotta transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-brand-terracotta transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Newsletter Col */}
            <div>
              <h4 className="font-serif font-bold mb-6 text-brand-sand text-lg">Join the Journey</h4>
              <p className="text-sm text-brand-sand/60 mb-4">Subscribe for exclusive offers and stories from Namibia.</p>
              <div className="relative">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-sand/30 py-2 focus:outline-none focus:border-brand-terracotta text-sm text-brand-sand transition-colors pr-10" />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-sand hover:text-brand-terracotta uppercase text-[10px] font-bold tracking-widest">Join</button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-brand-sand/40">
            <p>&copy; {new Date().getFullYear()} Himba Heritage. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/264810000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] transition-transform hover:-translate-y-1 z-40 flex items-center justify-center pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Slide-over Cart (Shopify Style) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-sand/50 bg-brand-sand-light text-brand-charcoal">
              <h2 className="font-serif text-2xl font-bold flex items-center gap-3">
                Your Cart <span className="bg-brand-charcoal text-white text-xs w-6 h-6 rounded-full flex items-center justify-center -translate-y-0.5">{cartCount}</span>
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-brand-charcoal/50 mt-20">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-6 opacity-30" />
                  <p className="font-serif text-2xl text-brand-charcoal mb-4">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block border-b-2 border-brand-terracotta text-brand-terracotta font-bold uppercase tracking-widest pb-1 hover:text-[#8A3A31] hover:border-[#8A3A31] transition-colors mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-5 items-start group">
                    <div className="w-24 aspect-[4/5] flex-shrink-0 bg-brand-sand overflow-hidden rounded-sm">
                      <img 
                        src={item.product.image} 
                        alt={'name' in item.product ? item.product.name : item.product.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-grow flex flex-col h-full pt-1">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-bold text-sm font-serif leading-snug line-clamp-2">
                          {'name' in item.product ? item.product.name : item.product.title}
                        </h4>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-brand-charcoal/40 hover:text-red-500 transition-colors"
                          aria-label="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-brand-charcoal/60 text-xs uppercase tracking-widest mb-4">
                        {item.product.category || 'Expedition'}
                      </div>

                      <div className="mt-auto flex items-end justify-between">
                        {/* Quantity Selector Style */}
                        <div className="flex items-center border border-brand-sand w-fit">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-brand-sand text-brand-charcoal/60 transition-colors"
                          >−</button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-brand-sand text-brand-charcoal/60 transition-colors"
                          >+</button>
                        </div>
                        <div className="font-bold text-brand-charcoal">{formatPrice(item.product.price * item.quantity)}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-sand/50 bg-white">
                <div className="flex justify-between items-end mb-6">
                  <div>
                     <span className="block text-brand-charcoal/60 uppercase tracking-widest text-[10px] font-bold mb-1">Subtotal</span>
                     <span className="text-xs text-brand-charcoal/50">Taxes and shipping calculated at checkout</span>
                  </div>
                  <span className="font-serif text-2xl font-bold">{formatPrice(cartTotal)}</span>
                </div>
                
                <NavLink
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center bg-brand-charcoal text-white py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-terracotta transition-colors shadow-xl group"
                >
                  Checkout
                </NavLink>
                <div className="mt-4 flex justify-center text-[10px] text-brand-charcoal/40 uppercase tracking-widest font-bold">
                  <MapPin className="w-3 h-3 mr-1 inline-block" /> Ships securely worldwide
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

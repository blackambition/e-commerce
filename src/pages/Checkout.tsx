import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Lock, ChevronLeft, CreditCard } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, formatPrice } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cart.length === 0) {
    return (
      <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="font-serif text-4xl font-bold mb-6 text-brand-charcoal">Your cart is empty</h2>
        <p className="text-brand-charcoal/60 mb-10 text-lg">Let's find something beautiful for your journey.</p>
        <NavLink 
          to="/shop" 
          className="bg-brand-charcoal text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-terracotta transition-colors shadow-xl"
        >
          Return to Shop
        </NavLink>
      </div>
    );
  }

  // Base fixed amounts to demonstrate formatPrice handling numbers appropriately. 
  // In a real app we'd probably have shipping rates per currency. 
  // Here we assume base cart calculations are internally USD and formatPrice handles output.
  const shipping = 15.00;
  const taxes = cartTotal * 0.08; // 8% tax
  const finalTotal = cartTotal + shipping + taxes;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col lg:flex-row border-x border-brand-sand/30">
        
        {/* Left Column - Form */}
        <div className="lg:w-3/5 p-4 sm:p-8 lg:p-12 xl:pr-16 order-2 lg:order-1 pt-12">
          
          <div className="mb-8 hidden lg:block">
            <NavLink to="/" className="font-serif text-3xl font-bold tracking-tighter text-brand-charcoal">
              Himba Heritage Co<span className="text-brand-terracotta">.</span>
            </NavLink>
          </div>

          <nav className="mb-10 text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 flex items-center gap-2">
            <NavLink to="/cart" className="hover:text-brand-terracotta transition-colors flex items-center gap-1"><ChevronLeft className="w-3 h-3" /> Cart</NavLink> 
            <span className="text-brand-charcoal">/ Information</span> / Shipping / Payment
          </nav>

          <div className="space-y-12">
            {/* Contact Info */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h2 className="font-serif text-2xl font-bold text-brand-charcoal">Contact</h2>
                <div className="text-sm">
                  <span className="text-brand-charcoal/60">Have an account?</span> <a href="#" className="text-brand-terracotta hover:underline">Log in</a>
                </div>
              </div>
              <div className="space-y-4 relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm"
                />
                <label className="flex items-center gap-3 text-sm text-brand-charcoal/80 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-terracotta rounded border-brand-sand/80 focus:ring-brand-terracotta opacity-80" />
                  Email me with news and offers
                </label>
              </div>
            </section>

            {/* Shipping Info */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">Shipping address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full md:col-span-2 border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm appearance-none text-brand-charcoal">
                  <option>Country/Region</option>
                  <option>Namibia</option>
                  <option>South Africa</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
                <input type="text" placeholder="First name" className="w-full border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
                <input type="text" placeholder="Last name" className="w-full border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
                <input type="text" placeholder="Address" className="w-full md:col-span-2 border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full md:col-span-2 border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
                <input type="text" placeholder="City" className="w-full md:col-span-2 border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
                <input type="text" placeholder="Postal code" className="w-full border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
                <input type="tel" placeholder="Phone" className="w-full md:col-span-2 border border-brand-sand/80 px-4 py-3.5 rounded bg-white text-base focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta transition-all shadow-sm" />
              </div>
            </section>

            {/* Payment Section - visually mocked to look like Shopify securely hosted fields */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h2 className="font-serif text-2xl font-bold text-brand-charcoal">Payment</h2>
              </div>
              <p className="text-sm text-brand-charcoal/60 mb-4 flex items-center gap-2"><Lock className="w-4 h-4 text-brand-olive" /> All transactions are secure and encrypted.</p>
              
              <div className="border border-brand-sand/80 rounded bg-brand-sand/10 overflow-hidden">
                <div className="p-4 border-b border-brand-sand/80 flex items-center justify-between bg-[#F4F6F8]">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="text-brand-terracotta focus:ring-brand-terracotta" />
                    <span className="font-medium text-brand-charcoal">Credit card</span>
                  </label>
                  <div className="flex gap-1 opacity-70">
                    <CreditCard className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Simulated Card Fields */}
                <div className="p-4 space-y-4 bg-[#FAFAFA]">
                  <input type="text" placeholder="Card number" className="w-full border border-brand-sand/80 bg-white px-4 py-3 rounded text-base focus:outline-none opacity-60" disabled />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Expiration date (MM / YY)" className="w-full border border-brand-sand/80 bg-white px-4 py-3 rounded text-base focus:outline-none opacity-60" disabled />
                    <input type="text" placeholder="Security code" className="w-full border border-brand-sand/80 bg-white px-4 py-3 rounded text-base focus:outline-none opacity-60" disabled />
                  </div>
                  <input type="text" placeholder="Name on card" className="w-full border border-brand-sand/80 bg-white px-4 py-3 rounded text-base focus:outline-none opacity-60" disabled />
                </div>

                 <div className="p-4 flex items-center justify-between border-t border-brand-sand/80 bg-white">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="payment" className="text-brand-terracotta focus:ring-brand-terracotta" />
                    <span className="font-medium text-brand-charcoal">PayPal</span>
                  </label>
                  <span className="font-serif font-bold italic text-[#003087]">PayPal</span>
                </div>
              </div>
            </section>
            
            <div className="pt-6">
              <button className="w-full bg-brand-charcoal text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-brand-terracotta transition-colors rounded shadow-xl flex items-center justify-center gap-3 text-sm">
                <ShieldCheck className="w-5 h-5" />
                Pay {formatPrice(finalTotal)}
              </button>
            </div>
            
            <div className="border-t border-brand-sand/50 pt-8 mt-12 mb-8 text-xs text-brand-charcoal/50 flex flex-wrap gap-4 justify-center md:justify-start">
               <a href="#" className="hover:text-brand-terracotta">Refund policy</a>
               <a href="#" className="hover:text-brand-terracotta">Shipping policy</a>
               <a href="#" className="hover:text-brand-terracotta">Privacy policy</a>
               <a href="#" className="hover:text-brand-terracotta">Terms of service</a>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary Panel (Shopify style background) */}
        <div className="lg:w-2/5 bg-brand-sand-light/50 border-l border-brand-sand/30 p-4 sm:p-8 lg:p-12 order-1 lg:order-2 h-auto lg:h-screen lg:sticky top-0">
          
          <div className="mb-6 lg:hidden flex justify-center">
            <NavLink to="/" className="font-serif text-2xl font-bold tracking-tighter text-brand-charcoal">
              Himba Heritage Co<span className="text-brand-terracotta">.</span>
            </NavLink>
          </div>

          <div className="space-y-6 max-h-[50vh] lg:max-h-none overflow-y-auto pr-2 no-scrollbar">
            {cart.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-brand-sand rounded-lg border border-brand-sand/80 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={'name' in item.product ? item.product.name : item.product.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-brand-charcoal/90 backdrop-blur text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md z-10">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-sm text-brand-charcoal leading-snug">{'name' in item.product ? item.product.name : item.product.title}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/50">{item.product.category || 'Expedition'}</p>
                </div>
                <div className="font-medium text-sm text-brand-charcoal font-serif">
                  {formatPrice(item.product.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-sand pt-6 mt-6 space-y-4">
            {/* Discount Code Form */}
            <div className="flex gap-2">
              <input type="text" placeholder="Gift card or discount code" className="flex-grow border border-brand-sand/80 px-4 py-3 rounded bg-white text-sm focus:outline-none focus:border-brand-terracotta transition-colors shadow-sm" />
              <button className="bg-brand-charcoal/10 text-brand-charcoal/50 font-bold uppercase tracking-widest px-6 py-3 rounded text-xs">Apply</button>
            </div>
            
            <div className="pt-6 space-y-3 font-medium text-brand-charcoal">
              <div className="flex justify-between text-sm">
                <span className="text-brand-charcoal/70">Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-charcoal/70">Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-charcoal/70">Estimated taxes</span>
                <span>{formatPrice(taxes)}</span>
              </div>
            </div>
            
            <div className="border-t border-brand-sand pt-6 mt-6 flex justify-between items-center">
              <span className="text-lg text-brand-charcoal">Total</span>
              <div className="flex items-end gap-2 text-brand-charcoal">
                <span className="text-xs uppercase text-brand-charcoal/50 mb-1">USD</span>
                <span className="font-serif text-3xl font-bold">{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-brand-olive text-sm font-bold tracking-widest uppercase mb-4 block">Our Identity</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-charcoal mb-6">Designed for the Wild.<br/>Rooted in Heritage.</h1>
        </div>

        <div className="prose prose-lg prose-stone mx-auto text-brand-charcoal/80">
          <img 
            src="https://images.unsplash.com/photo-1489493887464-892be6d15e8d?auto=format&fit=crop&q=80" 
            alt="Baobab Tree in Namibia" 
            className="w-full h-[400px] object-cover rounded-sm mb-12 shadow-md"
          />

          <h3 className="font-serif text-2xl text-brand-terracotta font-bold mt-12 mb-4">The Himba Heritage Co. Philosophy</h3>
          <p className="mb-6 leading-relaxed">
            We are a premium outdoor and travel lifestyle brand born from the raw beauty of Namibia. Himba Heritage Co. bridges the gap between high-performance exploration gear and authentic African cultural identity. We don't just equip you for your journey; we ensure your journey gives back.
          </p>

          <p className="mb-6 leading-relaxed">
            The heart of our brand is heavily inspired by the Himba people of the Kunene Region (formerly Kaokoland). Known for their resilience in one of the harshest environments on earth, their deep connection to the land, and their iconic use of <em>otjize</em> (a protective red clay paste), they are the ultimate survivors and custodians of the wild.
          </p>

          <div className="bg-brand-sand-light border-l-4 border-brand-ochre p-6 my-10 italic text-brand-charcoal/90">
            "Our ultimate goal is to celebrate and support Himba culture with respect. We build gear that lasts, and we invest directly in the communities that inspired it."
          </div>

          <h3 className="font-serif text-2xl text-brand-terracotta font-bold mt-12 mb-4">Ethical Commerce & Impact</h3>
          <p className="mb-6 leading-relaxed">
            A portion of every sale of our premium travel backpacks, trail shoes, and apparel goes directly to community development initiatives in Kaokoland. Furthermore, our curated collection of cultural lifestyle pieces (jewelry, crafts) are sourced directly from Himba artisans through fair-trade agreements, ensuring sustainable income.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1549480838-89518dc90eeb?auto=format&fit=crop&q=80" 
            alt="Namib Desert" 
            className="w-full h-[300px] object-cover rounded-sm my-12 shadow-md"
          />

        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-brand-sand/50 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10 text-brand-charcoal">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-brand-sand-light p-6">
              <h4 className="font-bold text-brand-charcoal mb-2">How fast is international shipping?</h4>
              <p className="text-sm text-brand-charcoal/70">We ship globally using trusted premium carriers. Expedited shipping takes 3-5 business days to North America and Europe. Standard shipping usually arrive within 7-10 business days. Orders over $150 ship free.</p>
            </div>
            <div className="bg-brand-sand-light p-6">
              <h4 className="font-bold text-brand-charcoal mb-2">What is your return policy?</h4>
              <p className="text-sm text-brand-charcoal/70">We offer a 30-day authentic return policy for our travel gear and apparel. Items must be unworn and in their original packaging. Handcrafted cultural items are final sale unless damaged during transit, as the funds go directly to the artisans immediately upon purchase.</p>
            </div>
             <div className="bg-brand-sand-light p-6">
              <h4 className="font-bold text-brand-charcoal mb-2">Are the cultural items authentic?</h4>
              <p className="text-sm text-brand-charcoal/70">Yes. Our cultural crafts and jewelry are 100% handcrafted by indigenous Himba artisans in Namibia. We operate on a strict fair-trade model to ensure creators are compensated respectfully and fairly.</p>
            </div>
            <div className="bg-brand-sand-light p-6">
              <h4 className="font-bold text-brand-charcoal mb-2">Is checkout safe?</h4>
              <p className="text-sm text-brand-charcoal/70">Absolutely. Our checkout process is fully encrypted and secure, matching the security standards of the world's leading e-commerce platforms. We accept all major credit cards and Apple Pay / Google Pay.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <NavLink to="/shop" className="bg-brand-charcoal text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-terracotta transition-colors shadow-2xl">
              Shop The Gear
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

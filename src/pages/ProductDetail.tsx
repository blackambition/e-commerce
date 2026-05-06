import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/Cards';
import { Star, ShieldCheck, Truck, RefreshCcw, Heart, ChevronRight, ShoppingBag } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart, formatPrice } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-sand-light">
        <div className="text-center">
          <h2 className="text-4xl font-serif mb-6 text-brand-charcoal">Product Not Found</h2>
          <NavLink to="/shop" className="border-b-2 border-brand-terracotta text-brand-terracotta font-bold uppercase tracking-widest pb-1 hover:text-[#8A3A31] transition-colors">
            Return to Shop
          </NavLink>
        </div>
      </div>
    );
  }

  // Get some "You may also like" products
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.isPopular))
    .slice(0, 4);

  return (
    <div className="bg-brand-sand-light min-h-screen pb-20">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/50">
          <NavLink to="/" className="hover:text-brand-charcoal transition-colors">Home</NavLink>
          <ChevronRight className="w-3 h-3 mx-2" />
          <NavLink to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</NavLink>
          <ChevronRight className="w-3 h-3 mx-2" />
          <NavLink to={`/shop?category=${product.category}`} className="hover:text-brand-charcoal transition-colors">{product.category}</NavLink>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="aspect-[4/5] overflow-hidden bg-brand-charcoal relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.isPopular && (
                <span className="absolute top-4 left-4 bg-white text-brand-charcoal text-[10px] uppercase font-bold tracking-widest px-4 py-2 shadow-xl">
                  Bestseller
                </span>
              )}
            </div>
            {/* Thumbnail Mock (just duplicating the main image for UI completeness) */}
            <div className="flex gap-4 mt-4">
              <button className="w-20 aspect-square border-2 border-brand-charcoal p-0.5">
                <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
              </button>
              <button className="w-20 aspect-square border border-transparent opacity-50 hover:opacity-100 transition-opacity p-0.5">
                <img src={product.image} alt="Thumbnail 2" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 flex flex-col justify-start pt-4 lg:pt-10">
            <div className="text-[10px] text-brand-terracotta mb-4 tracking-[0.2em] uppercase font-bold">
              {product.category}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-charcoal leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-6 mb-8">
              <span className="text-3xl font-medium text-brand-charcoal">{formatPrice(product.price)}</span>
              <div className="flex flex-col border-l border-brand-sand/50 pl-6">
                <div className="flex items-center text-brand-ochre text-xs">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50 mt-1 cursor-pointer hover:underline">12 Reviews</span>
              </div>
            </div>

            <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-10 font-light max-w-lg">
              {product.description}
            </p>

            <div className="text-brand-terracotta text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse"></span>
              Only {Math.floor(Math.random() * 5) + 2} left in stock — Order soon
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <label className="sr-only">Quantity</label>
              <div className="flex items-center justify-between border border-brand-charcoal w-full sm:w-32 bg-white px-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-4 hover:text-brand-terracotta transition-colors font-medium text-lg text-brand-charcoal/70"
                >−</button>
                <span className="font-medium min-w-[2rem] text-center font-serif text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-4 hover:text-brand-terracotta transition-colors font-medium text-lg text-brand-charcoal/70"
                >+</button>
              </div>
              <button 
                onClick={() => {
                  for(let i=0; i<quantity; i++) addToCart(product, 'product');
                }}
                className="flex-grow bg-brand-charcoal text-white py-4 px-8 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-terracotta transition-colors shadow-2xl text-center"
              >
                Add to Cart
              </button>
            </div>

            {/* Quick Upsell / Bundle Suggestion */}
            {product.category === 'Travel & Hiking Gear' && (
              <div className="bg-brand-sand/30 border border-brand-sand p-4 mb-8 flex items-center gap-4">
                 <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 text-brand-charcoal/60" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-brand-charcoal mb-0.5">Complete your kit</p>
                   <p className="text-xs text-brand-charcoal/70 mb-2">Pairs perfectly with our Botanical Insect Repellent.</p>
                   <button className="text-[10px] font-bold uppercase tracking-widest text-brand-terracotta hover:underline">Add to Order +$24.00</button>
                 </div>
              </div>
            )}

            <div className="flex items-start gap-4 text-sm text-brand-charcoal/80 bg-white p-6 border border-brand-sand/50 shadow-sm mb-10">
               <Heart className="w-5 h-5 text-brand-terracotta flex-shrink-0 mt-0.5" />
               <p className="leading-relaxed">Every purchase directly supports Himba community development projects and the preservation of Kaokoland heritage.</p>
            </div>

            {/* Guarantees */}
            <div className="space-y-4 pt-8 border-t border-brand-sand/50">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                <Truck className="w-5 h-5 text-brand-olive" /> Free global shipping over $150
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                <RefreshCcw className="w-5 h-5 text-brand-olive" /> 30-day authentic return policy
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                <ShieldCheck className="w-5 h-5 text-brand-olive" /> Secure encrypted checkout
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Info Tabs */}
      <div className="bg-white py-20 border-y border-brand-sand/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10 border-b border-brand-sand/50 mb-10 justify-center" role="tablist">
            <button 
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors relative ${activeTab === 'description' ? 'text-brand-charcoal' : 'text-brand-charcoal/40 hover:text-brand-charcoal'}`}
            >
              Cultural Story
              {activeTab === 'description' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-terracotta"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('details')}
              className={`pb-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors relative ${activeTab === 'details' ? 'text-brand-charcoal' : 'text-brand-charcoal/40 hover:text-brand-charcoal'}`}
            >
              Details & Specs
              {activeTab === 'details' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-terracotta"></span>}
            </button>
          </div>

          <div className="text-brand-charcoal/70 leading-relaxed min-h-[150px] font-light md:text-lg text-center max-w-2xl mx-auto">
            {activeTab === 'description' && (
              <div className="animate-[fadeIn_.3s_ease-out]">
                <p className="mb-6">
                  The inspiration behind this piece comes directly from the heart of Kaokoland. Artisanal techniques passed down through generations are utilized to create items that aren't just beautiful, but carry the weight of history and resilience.
                </p>
                <p>
                  By choosing this item, you participate in a fair-trade ecosystem that empowers local artisans, preserves traditional methods against the pressure of modernization, and brings a true piece of Namibian heritage into your life.
                </p>
              </div>
            )}
            {activeTab === 'details' && (
              <ul className="text-left max-w-sm mx-auto space-y-4 animate-[fadeIn_.3s_ease-out]">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-brand-terracotta rounded-full flex-shrink-0 mt-2"></span> Authentically crafted or sourced in Namibia.</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-brand-terracotta rounded-full flex-shrink-0 mt-2"></span> Dimensions: Standard sizing. Refer to our size guide for specifics.</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-brand-terracotta rounded-full flex-shrink-0 mt-2"></span> Materials: Ethically sourced, local natural materials where applicable.</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-brand-terracotta rounded-full flex-shrink-0 mt-2"></span> Care Instructions: Handle with care, avoid prolonged exposure to harsh conditions.</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-16">
           <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-charcoal">You May Also Like</h2>
           <div className="w-12 h-0.5 bg-brand-terracotta mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-sand shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-4 lg:hidden z-40 flex items-center justify-between gap-4">
         <div>
           <div className="text-sm font-bold text-brand-charcoal truncate max-w-[150px]">{product.name}</div>
           <div className="text-xs font-serif text-brand-charcoal">{formatPrice(product.price)}</div>
         </div>
         <button 
            onClick={() => {
              for(let i=0; i<quantity; i++) addToCart(product, 'product');
            }}
            className="flex-grow max-w-[200px] bg-brand-charcoal text-white py-3 px-6 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-terracotta transition-colors shadow-xl text-center whitespace-nowrap"
          >
            Add to Cart
         </button>
      </div>
    </div>
  );
}

import React from 'react';
import { Product, Tour } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart, formatPrice, setIsCartOpen } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 'product');
  };

  return (
    <div className="group flex flex-col h-full transition-all hover:shadow-2xl rounded-md overflow-hidden bg-white border border-brand-sand/50">
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-sand">
        <NavLink to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
          />
        </NavLink>
        {product.isPopular && (
          <span className="absolute top-3 left-3 bg-brand-charcoal text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-none z-10">
            Bestseller
          </span>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Quick Add To Cart overlay for desktop */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hidden md:block z-20">
           <button 
              onClick={handleQuickAdd}
              className="w-full bg-white/95 backdrop-blur-sm text-brand-charcoal py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider hover:bg-brand-charcoal hover:text-white transition-colors shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" /> Quick Add
            </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow bg-white z-10 relative">
        <div className="text-[10px] text-brand-charcoal/40 mb-2 tracking-widest uppercase font-bold">{product.category}</div>
        <h3 className="font-serif text-lg leading-snug mb-3 flex-grow">
          <NavLink to={`/product/${product.id}`} className="hover:text-brand-terracotta transition-colors line-clamp-2">
            {product.name}
          </NavLink>
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-brand-charcoal font-medium text-lg">
            {formatPrice(product.price)}
          </div>
          {/* Mobile add to cart button */}
          <button 
              onClick={handleQuickAdd}
              className="w-10 h-10 rounded-full bg-brand-sand text-brand-charcoal flex items-center justify-center md:hidden hover:bg-brand-terracotta hover:text-white transition-colors shadow-sm"
              aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => {
  const { formatPrice } = useCart();
  return (
    <div className="group flex flex-col h-full bg-white transition-all hover:shadow-2xl rounded-md overflow-hidden border border-brand-sand/50">
      <div className="relative aspect-[3/2] overflow-hidden bg-brand-sand">
        <NavLink to={`/tours`} className="block w-full h-full">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
          />
        </NavLink>
        <div className="absolute top-4 right-4 bg-brand-charcoal/90 backdrop-blur text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 shadow-lg">
          {tour.duration}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold mb-3 line-clamp-1 hover:text-brand-terracotta transition-colors">
          <NavLink to={`/tours`}>{tour.title}</NavLink>
        </h3>
        <p className="text-brand-charcoal/60 text-sm mb-6 flex-grow line-clamp-2 leading-relaxed">
          {tour.description}
        </p>
        <div className="flex items-center justify-between border-t border-brand-sand/50 pt-4 mt-auto">
          <div>
            <span className="text-[10px] text-brand-charcoal/40 uppercase tracking-widest block">From</span>
            <span className="font-bold text-lg text-brand-terracotta">{formatPrice(tour.price)}</span>
          </div>
          <NavLink
            to={`/tours`}
            className="bg-transparent border border-brand-charcoal text-brand-charcoal px-5 py-2 text-xs uppercase font-bold tracking-widest hover:bg-brand-charcoal hover:text-white transition-colors"
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

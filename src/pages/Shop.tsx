import React, { useState, useEffect } from 'react';
import { products } from '../data/mockData';
import { ProductCard } from '../components/Cards';
import { Filter, Search as SearchIcon, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract category from URL if present
  const queryParams = new URLSearchParams(location.search);
  const initialCat = queryParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    // If URL changes, update category state
    const cat = new URLSearchParams(location.search).get('category');
    if (cat) setSelectedCategory(cat);
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    navigate(cat === 'All' ? '/shop' : `/shop?category=${cat}`);
    setIsMobileFiltersOpen(false);
  };

  const categories = ['All', 'Travel & Hiking Gear', 'Bundles', 'Cultural & Lifestyle', 'Health & Protection'];
  
  let filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort logic
  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'az') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Featured - put popular first, then simple sort
    filteredProducts.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
  }

  return (
    <div className="bg-brand-sand-light min-h-screen pb-24">
      {/* Search & Header Component */}
      <div className="bg-brand-charcoal text-white pt-16 pb-20 px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The Collection</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base font-light mb-10">
            Ethically sourced Himba crafts, durable safari wear, and authentic Namibian goods. Every piece tells a story.
          </p>
          
          <div className="relative max-w-xl mx-auto bg-white rounded-none shadow-2xl flex items-center p-1 md:p-2">
            <SearchIcon className="w-5 h-5 text-brand-charcoal ml-3 absolute left-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-brand-charcoal outline-none pl-12 pr-4 py-3 md:py-4 font-serif text-lg"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 text-brand-charcoal/50 hover:text-brand-charcoal">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white p-8 border border-brand-sand/60">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-brand-charcoal flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-brand-terracotta" /> Categories
              </h3>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full text-left flex items-center justify-between text-sm transition-colors group pb-1 border-b border-transparent ${
                        selectedCategory === category 
                          ? 'text-brand-terracotta font-bold border-brand-terracotta' 
                          : 'text-brand-charcoal/70 hover:text-brand-charcoal hover:border-brand-charcoal'
                      }`}
                    >
                      {category}
                      <span className={`text-[10px] tabular-nums font-bold group-hover:text-brand-charcoal ${selectedCategory === category ? 'text-brand-terracotta' : 'text-brand-charcoal/40'}`}>
                        {category === 'All' ? products.length : products.filter(p => p.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="flex-grow">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4 border-b border-brand-sand/50 pb-6">
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-charcoal border-b-2 border-brand-charcoal pb-1 self-start sm:self-auto"
              >
                <Filter className="w-4 h-4" /> Filters & Categories
              </button>
              
              <div className="text-sm font-medium text-brand-charcoal">
                Showing <span className="font-bold">{filteredProducts.length}</span> Products {searchQuery ? `for "${searchQuery}"` : ''}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50">Sort by</span>
                <div className="relative">
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-transparent border-b border-brand-charcoal text-sm font-bold text-brand-charcoal pr-6 py-1 cursor-pointer focus:outline-none focus:border-brand-terracotta transition-colors"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="az">Alphabetically, A-Z</option>
                  </select>
                  <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-terracotta" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-x-6 sm:gap-y-10">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-32 bg-white border border-brand-sand/50 mt-10">
                <SearchIcon className="w-12 h-12 text-brand-sand mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-3">No products found</h3>
                <p className="text-brand-charcoal/60 mb-8 font-medium">Try adjusting your category or search term.</p>
                <button 
                  onClick={() => { setSearchQuery(''); handleCategoryClick('All'); }}
                  className="bg-transparent border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-charcoal hover:text-white transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
          <div className="relative w-[300px] max-w-sm bg-brand-sand-light h-full shadow-2xl flex flex-col pointer-events-auto transform transition-transform duration-300 translate-x-0">
            <div className="flex items-center justify-between p-6 border-b border-brand-sand/50 bg-white">
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2">
                <X className="w-6 h-6 text-brand-charcoal/60" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow space-y-8 bg-white">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal/50 mb-4 block">Categories</label>
                <ul className="space-y-5">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left text-lg font-serif flex justify-between items-center ${selectedCategory === category ? 'text-brand-terracotta border-b border-brand-terracotta pb-1' : 'text-brand-charcoal/80 pb-1 border-b border-transparent'}`}
                      >
                        {category}
                        <span className="text-sm font-sans font-bold opacity-30">{category === 'All' ? products.length : products.filter(p => p.category === category).length}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 border-t border-brand-sand/50 bg-white">
               <button 
                 onClick={() => setIsMobileFiltersOpen(false)}
                 className="w-full bg-brand-charcoal text-white py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-terracotta transition-colors shadow-xl"
               >
                 View Results ({filteredProducts.length})
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

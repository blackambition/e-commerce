import React from 'react';
import { tours } from '../data/mockData';
import { TourCard } from '../components/Cards';
import { Map, Calendar, Users, Camera } from 'lucide-react';

export default function Tours() {
  return (
    <div className="bg-brand-sand-light min-h-screen">
      {/* Hero */}
      <div className="relative py-24 bg-brand-charcoal text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517457210660-642871f76da0?auto=format&fit=crop&q=80" 
            alt="Safari Jeep" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Namibian Expeditions</h1>
          <p className="text-lg md:text-xl text-brand-sand/80 font-light">
            Discover the untouched beauty of Kaokoland and Etosha. Authentic, respectful, and unforgettable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center border-b border-brand-sand pb-16">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-terracotta">
               <Map className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Local Guides</h4>
            <p className="text-xs text-brand-charcoal/60">Born and raised in Namibia</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-ochre">
               <Users className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Small Groups</h4>
            <p className="text-xs text-brand-charcoal/60">Max 8 people per tour</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-olive">
               <Camera className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Photography</h4>
            <p className="text-xs text-brand-charcoal/60">Incredible landscapes</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-blue">
               <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Flexible Dates</h4>
            <p className="text-xs text-brand-charcoal/60">Year-round departures</p>
          </div>
        </div>

        {/* Tours List */}
        <div className="space-y-16">
          {tours.map((tour, index) => (
            <div key={tour.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center bg-white p-6 md:p-8 rounded-sm shadow-sm border border-brand-sand/50`}>
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-brand-sand px-3 py-1 rounded-sm text-xs font-bold text-brand-charcoal/70 mb-4 uppercase tracking-wider">
                  {tour.duration}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{tour.title}</h2>
                <p className="text-brand-charcoal/70 mb-8 text-lg leading-relaxed">{tour.description}</p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 border-t border-brand-sand pt-8">
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    <span className="block text-xs uppercase tracking-wider text-brand-charcoal/50 mb-1">Starting from</span>
                    <span className="font-bold text-3xl text-brand-terracotta">${tour.price.toFixed(2)}</span>
                  </div>
                  <button className="w-full sm:w-auto flex-grow bg-brand-charcoal text-white py-4 px-8 text-sm font-bold uppercase tracking-wider hover:bg-brand-terracotta transition-colors rounded-sm shadow-md">
                    Book This Expedition
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

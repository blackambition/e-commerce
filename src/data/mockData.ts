import { Product, Tour } from '../context/CartContext';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Atlas 45L Travel Backpack',
    price: 185.00,
    category: 'Travel & Hiking Gear',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
    description: 'A rugged, sand-resistant travel backpack designed for the harsh but beautiful elements of the Namib Desert. Meets international carry-on requirements, includes a hydration sleeve and multiple compartments for seamless travel.',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Kaoko Lightweight Trail Sneakers',
    price: 135.00,
    category: 'Travel & Hiking Gear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
    description: 'Designed for rocky terrains and long travel days. These lightweight trail sneakers feature a breathable mesh upper, aggressive grip, and supportive cushioning to carry you comfortably from airport to summit.',
    isPopular: true
  },
  {
    id: 'p3',
    name: 'Namib Safari Performance Shirt',
    price: 85.00,
    category: 'Travel & Hiking Gear',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85f2c?auto=format&fit=crop&q=80',
    description: 'Breathable, durable, and stylish. Perfect for the African heat, this lightweight shirt offers UPF 50+ sun protection, moisture-wicking technology, and an airy fit for maximum comfort on safari or the trail.',
    isPopular: true
  },
  {
    id: 'p4',
    name: 'Ochre Infused Sunscreen SPF 50',
    price: 32.00,
    category: 'Health & Protection',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80',
    description: 'Inspired by the Otjize paste used by Himba women to protect their skin from the sun. This broad-spectrum mineral sunscreen combines zinc oxide, marula oil, and a sheer natural tint for superior protection.',
    isPopular: true
  },
  {
    id: 'p5',
    name: 'Makalani Wide-Brim Safari Hat',
    price: 45.00,
    category: 'Travel & Hiking Gear',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80',
    description: 'Woven from native Makalani palms, this wide-brimmed hat provides excellent sun protection while keeping you cool. Authentic Namibian craftsmanship adapted for modern travelers.',
  },
  {
    id: 'p6',
    name: 'Etosha Polarized Sunglasses',
    price: 95.00,
    category: 'Travel & Hiking Gear',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
    description: 'Essential for the glaring African sun. High-clarity polarized lenses cut through haze and reflection, ensuring you never miss a detail on the horizon. Features sustainable bamboo temples.',
  },
  {
    id: 'p7',
    name: 'Traditional Himba Copper Cuff',
    price: 65.00,
    category: 'Cultural & Lifestyle',
    image: 'https://images.unsplash.com/photo-1611077544831-29e20fc7df62?auto=format&fit=crop&q=80',
    description: 'Handcrafted by Himba artisans, this substantial copper cuff reflects centuries of tradition. A meaningful piece that directly supports fair-trade community development in the Kunene region.',
  },
  {
    id: 'p8',
    name: 'Botanical Insect Repellent Oil',
    price: 24.00,
    category: 'Health & Protection',
    image: 'https://images.unsplash.com/photo-1608248593842-8021f11181f0?auto=format&fit=crop&q=80',
    description: 'A DEET-free blend of powerful essential oils including citronella, eucalyptus, and Namibian myrrh. Safe, pleasant-smelling, and highly effective against mosquitoes in the bush.',
  },
  {
    id: 'p9',
    name: 'Desert Explorer Pack (Bundle)',
    price: 280.00,
    category: 'Bundles',
    image: 'https://images.unsplash.com/photo-1547347498-84226d7010f3?auto=format&fit=crop&q=80',
    description: 'The ultimate kit for your next adventure. Includes the Atlas 45L Travel Backpack, Makalani Safari Hat, and Namib Safari Performance Shirt. Save 15% when purchased as a bundle.',
    isPopular: true
  }
];

export const tours: Tour[] = [
  {
    id: 't1',
    title: 'Authentic Himba Village Visit',
    duration: 'Half Day',
    price: 80.00,
    image: 'https://images.unsplash.com/photo-1506456079983-bbb0e68e7ec8?auto=format&fit=crop&q=80',
    description: 'A respectful, guided tour to an authentic Himba settlement in Kaokoland. Learn about their semi-nomadic lifestyle, beliefs, and the significance of the sacred fire and Otjize.'
  },
  {
    id: 't2',
    title: 'Etosha Wildlife Safari',
    duration: '3 Days / 2 Nights',
    price: 450.00,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    description: 'Experience the magic of Etosha National Park. Guided game drives, comfortable lodge accommodation, and the chance to see four of the Big Five around iconic waterholes.'
  },
  {
    id: 't3',
    title: 'Kaokoland Expedition',
    duration: '5 Days / 4 Nights',
    price: 890.00,
    image: 'https://images.unsplash.com/photo-1550505101-7faaa618b76d?auto=format&fit=crop&q=80',
    description: 'A rugged 4x4 expedition into the heart of Kaokoland. Encounter desert-adapted elephants, stunning mountain vistas at Epupa Falls, and profound remote silence.'
  }
];

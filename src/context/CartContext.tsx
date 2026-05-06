import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Travel & Hiking Gear' | 'Cultural & Lifestyle' | 'Health & Protection' | 'Bundles';
  image: string;
  description: string;
  isPopular?: boolean;
}

export interface Tour {
  id: string;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem {
  product: Product | Tour;
  quantity: number;
  type: 'product' | 'tour';
}

export type Currency = 'USD' | 'NAD' | 'EUR';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Product | Tour, type: 'product' | 'tour') => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdPrice: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CURRENCY_RATES: Record<Currency, number> = {
  USD: 1,
  NAD: 19.2,
  EUR: 0.92
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  NAD: 'N$',
  EUR: '€'
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');

  const addToCart = (item: Product | Tour, type: 'product' | 'tour') => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product: item, quantity: 1, type }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(id);
    setCart(prev => prev.map(item => 
      item.product.id === id ? { ...item, quantity } : item
    ));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const formatPrice = (usdPrice: number) => {
    return `${CURRENCY_SYMBOLS[currency]}${(usdPrice * CURRENCY_RATES[currency]).toFixed(2)}`;
  };

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, 
      cartTotal, cartCount, isCartOpen, setIsCartOpen,
      currency, setCurrency, formatPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

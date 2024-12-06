import React from 'react';
import ProductCard from './product/ProductCard';
import { Product } from '../types';

const DEAL_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM4 Wireless Noise-Cancelling Headphones',
    description: 'Industry-leading noise cancellation with exceptional sound quality',
    price: 248.00,
    originalPrice: 399.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.8,
    reviewCount: 2547,
    dealEndsAt: new Date(Date.now() + 172800000), // 48 hours from now
  },
  {
    id: '2',
    title: 'Samsung 65" QLED 4K Smart TV',
    description: 'Quantum HDR, Alexa Built-in, Motion Xcelerator Turbo+',
    price: 799.99,
    originalPrice: 1299.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    rating: 4.7,
    reviewCount: 1823,
    dealEndsAt: new Date(Date.now() + 86400000), // 24 hours from now
  },
  {
    id: '3',
    title: 'MacBook Air M2',
    description: 'Apple M2 chip, 13.6" Liquid Retina display, 8GB RAM, 256GB SSD',
    price: 899.99,
    originalPrice: 1199.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    rating: 4.9,
    reviewCount: 3241,
  },
  {
    id: '4',
    title: 'Dyson V15 Detect Vacuum',
    description: 'Cordless vacuum with laser dust detection',
    price: 499.99,
    originalPrice: 749.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001',
    rating: 4.6,
    reviewCount: 892,
  },
  {
    id: '5',
    title: 'Nintendo Switch OLED',
    description: '7-inch OLED screen, enhanced audio, wide adjustable stand',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e',
    rating: 4.8,
    reviewCount: 1567,
  },
  {
    id: '6',
    title: 'KitchenAid Stand Mixer',
    description: 'Professional 5-quart stand mixer with 10 speeds',
    price: 279.99,
    originalPrice: 449.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48',
    rating: 4.9,
    reviewCount: 2134,
  },
  {
    id: '7',
    title: 'iPad Pro 12.9"',
    description: 'M2 chip, Liquid Retina XDR display, 128GB',
    price: 899.99,
    originalPrice: 1099.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    rating: 4.7,
    reviewCount: 1432,
  },
  {
    id: '8',
    title: 'Bose QuietComfort Earbuds II',
    description: 'Wireless noise cancelling earbuds',
    price: 199.99,
    originalPrice: 299.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    rating: 4.6,
    reviewCount: 892,
  },
  {
    id: '9',
    title: 'Samsung Galaxy S24 Ultra',
    description: '512GB, Titanium frame, AI-powered camera system',
    price: 999.99,
    originalPrice: 1399.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c',
    rating: 4.8,
    reviewCount: 756,
  },
  {
    id: '10',
    title: 'LG C3 65" OLED TV',
    description: '4K OLED evo Gallery Edition Smart TV',
    price: 1499.99,
    originalPrice: 2099.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    rating: 4.9,
    reviewCount: 1243,
  },
  {
    id: '11',
    title: 'Nespresso Vertuo Next',
    description: 'Premium coffee and espresso maker',
    price: 129.99,
    originalPrice: 199.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1517914309068-967f0767f1b2',
    rating: 4.5,
    reviewCount: 678,
  },
  {
    id: '12',
    title: 'Ring Video Doorbell Pro 2',
    description: 'Advanced home security with 3D motion detection',
    price: 169.99,
    originalPrice: 249.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827',
    rating: 4.4,
    reviewCount: 892,
  },
  {
    id: '13',
    title: 'Philips Hue Starter Kit',
    description: 'Smart LED bulb kit with bridge',
    price: 129.99,
    originalPrice: 199.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8',
    rating: 4.7,
    reviewCount: 567,
  },
  {
    id: '14',
    title: 'Roomba j7+ Robot Vacuum',
    description: 'Self-emptying robot vacuum with obstacle avoidance',
    price: 599.99,
    originalPrice: 799.99,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1563163447-12c1ed6cbd46',
    rating: 4.6,
    reviewCount: 789,
  },
  {
    id: '15',
    title: 'Apple Watch Series 9',
    description: 'GPS + Cellular, 45mm, Always-On Retina display',
    price: 399.99,
    originalPrice: 499.99,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    rating: 4.8,
    reviewCount: 1567,
  },
];

export default function DealGrid() {
  // Sort products by discount percentage (highest to lowest)
  const sortedProducts = [...DEAL_PRODUCTS].sort((a, b) => {
    const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
    const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
    return discountB - discountA;
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Top Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
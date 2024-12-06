import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../../types';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
        <ProductPrice price={product.price} originalPrice={product.originalPrice} />
        
        {product.dealEndsAt && (
          <div className="mt-2 text-sm text-red-600">
            Deal ends in {/* Add countdown timer component here */}
          </div>
        )}
      </div>
    </div>
  );
}
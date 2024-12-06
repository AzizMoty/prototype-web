import React from 'react';
import { Search, ShoppingCart, Bell, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">DealFinder</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for deals..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-blue-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
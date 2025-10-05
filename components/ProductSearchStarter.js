'use client';

import { useState, useEffect } from 'react';

export default function ProductSearchStarter() {
  // CORE FEATURES (Must Implement):
  
  // TODO: Add your state variables here
  // Hint: You'll need state for search term, sort order, and products

  // TODO: Fetch products from API
  // Hint: Use useEffect to call fetch('/api/products') on component mount

  // TODO: Implement filtering and sorting logic here


  // BONUS FEATURES (Extra Points):
  
  // BONUS: Add loading state
  // Hint: Add loading state and show spinner while fetching
  
  // BONUS: Add error handling
  // Hint: Add error state and display error messages
  
  // BONUS: Add debouncing to prevent filtering on every keystroke (300ms delay)
  // Hint: Use useEffect with setTimeout to delay searchTerm updates

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Product Search & Sort
      </h1>
      
      {/* Search and Sort Controls - UI is ready, just add the logic! */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Products
          </label>
          <input
            id="search"
            type="text"
            placeholder="Type to search products..."
            // TODO: Add value and onChange props to connect to state
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div className="sm:w-48">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Sort by Price
          </label>
          <select
            id="sort"
            // TODO: Add value and onChange props to connect to state
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>

      {/* CORE FEATURES - Display filtered and sorted products */}

      {/* TODO: Map over filtered products and display each one */}
      
      {/* TODO: Handle empty state when no products match search */}

      {/* BONUS FEATURES - Add these for extra points */}
      
      {/* BONUS: Add loading state */}
      
      {/* BONUS: Add error state */}
    </div>
  );
}

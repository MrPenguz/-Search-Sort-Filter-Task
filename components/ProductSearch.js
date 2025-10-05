'use client';

import { useState, useEffect } from 'react';

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('low-high'); // 'low-high' or 'high-low'
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        const result = await response.json();
        
        if (result.success) {
          setProducts(result.data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Error fetching products');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter and sort products
  const filteredAndSortedProducts = products.filter(product =>
    product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === 'low-high') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Product Search & Sort
      </h1>
      
      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Products
          </label>
          <input
            id="search"
            type="text"
            placeholder="Type to search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div className="sm:w-48">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Sort by Price
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-8 text-red-600">
          <p className="text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}



      {/* Product List */}
      {!loading && !error && (
        <div className="space-y-3">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">No products found</p>
              <p className="text-sm">Try adjusting your search term</p>
            </div>
          ) : (
            filteredAndSortedProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">${product.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

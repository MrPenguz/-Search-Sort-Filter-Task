import ProductSearchStarter from '@/components/ProductSearchStarter';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <ProductSearchStarter />

          {/* Interview Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">🎯 Coding Interview Task</h2>
            <div className="space-y-3 text-blue-800">
              <p><strong>Time Limit:</strong> 20 minutes</p>
              <p><strong>Core Requirements:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fetch products from API endpoint (/api/products)</li>
                <li>Connect search input to filter product names as user types</li>
                <li>Implement sorting functionality (Low to High / High to Low)</li>
                <li>Show all filtered products and display them</li>
              </ul>
              <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-green-800"><strong>✅ UI Ready:</strong> The interface is already built! Focus on connecting the logic.</p>
              </div>
              <p><strong>Bonus Points:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Add loading states while fetching data</li>
                <li>Add error handling with retry functionality</li>
                <li>Add debouncing to delay filtering logic (300ms)</li>
              </ul>

            </div>
          </div>
        </div>
    </div>
  );
}

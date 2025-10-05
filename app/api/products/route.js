// Mock product data
const PRODUCTS = [
  { id: 1, name: 'Apple MacBook Pro', price: 1999, category: 'Electronics' },
  { id: 2, name: 'Samsung Galaxy S24', price: 899, category: 'Electronics' },
  { id: 3, name: 'Nike Air Max', price: 120, category: 'Shoes' },
  { id: 4, name: 'Adidas Ultraboost', price: 180, category: 'Shoes' },
  { id: 5, name: 'iPhone 15 Pro', price: 999, category: 'Electronics' },
  { id: 6, name: 'Sony WH-1000XM5', price: 399, category: 'Electronics' },
  { id: 7, name: 'Converse Chuck Taylor', price: 60, category: 'Shoes' },
  { id: 8, name: 'Dell XPS 13', price: 1299, category: 'Electronics' },
  { id: 9, name: 'Vans Old Skool', price: 70, category: 'Shoes' },
  { id: 10, name: 'iPad Air', price: 599, category: 'Electronics' },
  { id: 11, name: 'New Balance 990', price: 185, category: 'Shoes' },
  { id: 12, name: 'Microsoft Surface Pro', price: 1099, category: 'Electronics' },
];

export async function GET() {
  // Add a small delay to simulate real API
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return Response.json({
    success: true,
    data: PRODUCTS,
    total: PRODUCTS.length
  });
}

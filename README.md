#  Coding Interview: Search & Sort Filter

## Overview
This is a 20-minute coding interview task focused on React fundamentals, state management, API integration, and user experience optimization.

## Task Requirements

### Core Features (Must Implement)
1. **API Integration**: Fetch products from `/api/products` endpoint
2. **Search Logic**: Connect search input to filter product names as the user types
3. **Sorting Logic**: Implement Low to High and High to Low sorting functionality by price
4. **Product Display**:  Show all filtered products and display them

**Note**: The UI is already implemented! Focus on connecting the logic to the existing interface.

### Bonus Features (Extra Points)
- **Loading States**: Show loading spinner while fetching data
- **Error Handling**: Display error messages with retry functionality
- **Debouncing**: Add 300ms delay to prevent excessive filtering on every keystroke


## Getting Started

1. **Run the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** to `http://localhost:3000`

3. **Start coding** in `components/ProductSearchStarter.js`

## API Endpoint

The application includes a mock API endpoint at `/api/products` that returns:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Apple MacBook Pro",
      "price": 1999,
      "category": "Electronics"
    },
    // ... more products
  ],
  "total": 12
}
```


## Tips for Success

1. **Start simple**: Get basic functionality working first
2. **Test frequently**: Check your work as you go
3. **Ask questions**: Clarify requirements if needed
4. **Focus on core features**: Don't get distracted by bonus features initially
5. **Explain your approach**: Talk through your thought process

## Sample Data
The API includes 12 sample products with varying prices from $60 to $1999.

Good luck! 

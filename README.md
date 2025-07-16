# Product CRUD System

A simple, responsive web-based CRUD (Create, Read, Update, Delete) application for managing products. Built with vanilla JavaScript, HTML, and Bootstrap for styling.

## Features

- **Create**: Add new products with name, category, price, and description
- **Read**: View all products in a table format
- **Update**: Edit existing product information
- **Delete**: Remove products from the system
- **Search**: Real-time search functionality across product name, category, and description
- **Persistent Storage**: Data is saved to browser's localStorage
- **Responsive Design**: Built with Bootstrap for mobile-friendly interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES5)
- Bootstrap 5
- LocalStorage API

## Project Structure

```
├── index.html          # Main HTML file
├── js/
│   ├── myScript.js     # Main JavaScript functionality
│   └── bootstrap.bundle.min.js
└── css/
    ├── style.css       # Custom styles
    └── bootstrap.min.css
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs locally in browser

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd product-crud-system
   ```

3. Open `index.html` in your web browser

## Usage

### Adding a Product

1. Fill in the product details in the form:
   - Product Name
   - Product Category
   - Product Price
   - Product Description

2. Click the "add product" button

### Updating a Product

1. Click the "update" button next to the product you want to modify
2. The form will be populated with the current product data
3. Make your changes
4. Click "update product" to save changes

### Deleting a Product

1. Click the "delete" button next to the product you want to remove
2. The product will be immediately removed from the list

### Searching Products

1. Use the search input field above the table
2. Type any keyword to filter products by name, category, or description
3. Results update in real-time as you type

## Data Storage

The application uses the browser's localStorage to persist data. This means:
- Data is saved locally in your browser
- Data persists between browser sessions
- Data is specific to the domain and browser
- Clearing browser data will remove all products

## Browser Compatibility

This application works in all modern browsers that support:
- localStorage API
- ES5 JavaScript
- CSS3

## Limitations

- Data is stored locally only (no server-side storage)
- No user authentication
- No data validation beyond basic type checking
- Limited to single-user usage

## Future Enhancements

Potential improvements could include:
- Input validation and error handling
- Export/import functionality
- Image upload for products
- Categories management
- Price formatting
- Confirmation dialogs for delete operations
- Pagination for large datasets
- Server-side storage integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Mohamed Taha Khattab - mohamed.taha.khattab0@gmail.com/

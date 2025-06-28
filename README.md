# Minimal Calculator

A clean, responsive web-based calculator built with vanilla HTML, CSS, and JavaScript. Features a modern interface with smooth animations and full mathematical functionality.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Clear Display**: Visual feedback for current operation and numbers
- **Error Handling**: Division by zero protection
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Interface**: Minimalist design with intuitive button layout
- **Visual Feedback**: Hover effects and smooth interactions

## File Structure

```
calculator/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd calculator
   ```

2. Open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or simply double-click the `index.html` file.

### Usage

1. **Numbers**: Click number buttons (0-9) to input values
2. **Operations**: Click operation buttons (+, -, ×, ÷) to perform calculations
3. **Calculate**: Press the equals button (=) to get the result
4. **Clear**: Press C to clear the display
5. **Delete**: Press ← to delete the last entered character
6. **Decimal**: Press . to add decimal points

## Technical Details

### HTML Structure
- Semantic HTML5 with proper accessibility attributes
- Input field for display with readonly attribute
- Button grid layout for calculator interface

### CSS Features
- CSS Grid for button layout
- Flexbox for responsive design
- CSS custom properties for theming
- Smooth hover and active states
- Mobile-responsive design

### JavaScript Functionality
- Event-driven architecture
- Proper state management for calculations
- Error handling for edge cases
- Clean separation of concerns

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Keyboard input support
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Scientific calculator mode
- [ ] History of calculations
- [ ] Themes and customization
- [ ] Unit tests

## License

This project is open source and available under the MIT License.

## Author

Created as a minimal calculator implementation demonstrating modern web development practices.

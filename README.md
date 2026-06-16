# Web Calculator

A simple calculator application built using React.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://web-calculator-ruddy-one.vercel.app/)
## Features

- Perform basic arithmetic operations
- Interactive calculator UI
- Real-time display updates
- Clear and reset functionality
- Responsive design

## Technologies Used

- React
- JavaScript
- CSS
- Vite

## Implementation Details

This calculator does not rely on JavaScript's `eval()` function.

The calculation process is implemented manually using:

- Expression building
- Tokenization
- Validator(Parser)
- Expression evaluation
- Operator precedence handling
- then Reault

## Application Flow

```text
User Input
    ↓
Expression Building
    ↓
Tokenization
    ↓
Validation
    ↓
Parsing (Infix → Postfix Conversion)
    ↓
Postfix Evaluation
    ↓
Result Generation
    ↓
Display Output
```


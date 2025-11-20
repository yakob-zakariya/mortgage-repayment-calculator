# Frontend Mentor - Mortgage Repayment Calculator Solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- ✅ Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- ✅ See form validation messages if any field is incomplete
- ✅ Complete the form only using their keyboard
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page

### Screenshot

![Mortgage Calculator Screenshot](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/yakob-zakariya/mortgage-repayment-calculator)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My Process

### Built With

- **React 19** - Latest React with React Compiler
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Semantic HTML5** markup
- **Flexbox** - For layout
- **Mobile-first workflow** - Responsive design approach
- **Plus Jakarta Sans** - Google Font

### What I Learned

This is my **Day 2** challenge on Frontend Mentor! Here's what I learned:

#### 1. **Mortgage Calculation Formulas**

I learned how to implement the proper mortgage calculation formulas:

**Repayment Mortgage:**

```js
const monthlyRate = annualRate / 100 / 12;
const numberOfPayments = termYears * 12;
const monthly =
  (principal *
    monthlyRate *
    Math.pow(1 + monthlyRate, numberOfPayments)) /
  (Math.pow(1 + monthlyRate, numberOfPayments) -
    1);
```

**Interest Only Mortgage:**

```js
const monthly = principal * monthlyRate;
const total =
  monthly * numberOfPayments + principal;
```

#### 2. **Form Validation in React**

Implemented real-time form validation with error states:

```js
const validateForm = () => {
  const newErrors = {};
  if (
    !mortgageAmount ||
    parseFloat(mortgageAmount) <= 0
  ) {
    newErrors.mortgageAmount =
      "This field is required";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

#### 3. **Conditional Styling with Tailwind**

Used dynamic classes for error states:

```jsx
className={`border ${errors.mortgageAmount ? 'border-red' : 'border-neutral-500'}`}
```

#### 4. **Number Formatting**

Learned to format currency properly for UK locale:

```js
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
```

#### 5. **Tailwind CSS v4 Custom Theme**

Used the new `@theme` directive in Tailwind v4:

```css
@theme {
  --color-lime: hsl(61, 70%, 52%);
  --color-neutral-900: hsl(202, 55%, 16%);
}
```

### Continued Development

Areas I want to focus on in future projects:

- **Accessibility**: Add ARIA labels and improve keyboard navigation
- **Testing**: Learn to write unit tests for React components
- **Animations**: Add smooth transitions and micro-interactions
- **TypeScript**: Convert this project to TypeScript for better type safety

## Author

- Frontend Mentor - [@yakob-zakariya](https://www.frontendmentor.io/profile/yourusername)
- GitHub - [@yakob-zakariya](https://github.com/yourusername](https://github.com/yakob-zakariya)

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/mortgage-repayment-calculator.git
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

---

**Challenge completed on Day 2 of my Frontend Mentor journey! 🎉**

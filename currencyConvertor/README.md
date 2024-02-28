# Currency Converter App

This is a simple React-based currency converter application that allows users to convert between different currencies.

## Features

- Convert from one currency to another.
- Real-time exchange rates fetched using a currency API.
- Customizable input boxes for amount and currency selection.
- Responsive design for a seamless user experience.

## Components

### InputBox Component

The `InputBox` component is a reusable React component providing input fields for currency-related input. It includes fields for amount and currency selection, with options for customization.

#### Props

- `label`: The label for the input box.
- `amount`: The amount value in the input field.
- `onAmountChange`: Callback for changes in the amount.
- `onCurrencyChange`: Callback for changes in the selected currency.
- `currencyOption`: Array of currency options for the dropdown.
- `selectCurrency`: Currently selected currency.
- `amountDisable`: Boolean to disable the amount input field.
- `currencyDisable`: Boolean to disable the currency dropdown.
- `className`: Additional CSS classes for styling.

### useCurrencyInfo Hook

The `useCurrencyInfo` hook is responsible for fetching currency information from a provided API based on the given currency code.

#### Usage

```jsx
import { useEffect, useState } from 'react';
import { useCurrencyInfo } from './hooks/useCurrencyInfo';

const MyComponent = () => {
  const currencyInfo = useCurrencyInfo('USD');
  // ... rest of your component logic
};


### Preview

![Currency Converter App](./ScreenshotCurr.png)

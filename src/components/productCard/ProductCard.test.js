import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  it('renders the product name', () => {
    render(<ProductCard name="testName" />);
    expect(screen.getByText('testName')).toBeInTheDocument();
  });
});

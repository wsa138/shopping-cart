import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  it('displays the product name', () => {
    render(<ProductCard name="testName" />);
    expect(screen.getByText('testName')).toBeInTheDocument();
  });

  it('displays a product price', () => {});

  it('displays an image of the product', () => {});

  it('changes the image of the product if the product card is hovered', () => {});
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import ProductCard from './ProductCard';
import guitarImageOne from '../../images/guitar-images/les-paul-standard-50s-faded.png';
import guitarImageTwo from '../../images/guitar-images/les-paul-standard-50s-faded(2).png';

const product = {
  name: 'testName',
  price: '$10',
  imageOne: guitarImageOne,
  imageTwo: guitarImageTwo,
};

describe('ProductCard component', () => {
  it('displays the product name', () => {
    render(<ProductCard name={product.name} />);
    expect(screen.getByText('testName')).toBeInTheDocument();
  });

  it('displays a product price', () => {});

  it('displays an image of the product', () => {});

  it('changes the image of the product if the product card is hovered', () => {});
});

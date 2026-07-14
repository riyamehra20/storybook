import { ProductCard } from './ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    price: { control: 'text' },
    badge: { control: 'text' },
    outOfStock: { control: 'boolean' },
  },
  args: {
    imageUrl: 'https://placehold.co/400x300',
    title: 'Wireless Headphones',
    price: '$89.99',
    badge: '',
    outOfStock: false,
  },
};

export const Default = {};

export const OnSale = {
  args: { badge: 'Sale' },
};

export const OutOfStock = {
  args: { outOfStock: true, badge: '' },
};

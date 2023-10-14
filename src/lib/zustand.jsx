import {create} from 'zustand';
import {mockProducts} from '../mock/products';

export const useProductStore = create(set => ({
  products: mockProducts,
  fetch: async () => {
    const response = await fetch('http://192.168.1.106:3000/products');
    const {items} = await response.json();
    set({products: items});
  },
  addProduct: (id, title, price, quantity) => {
    set(state => ({
      products: [
        ...state.products,
        {
          id,
          title,
          price,
          quantity,
        },
      ],
    }));
  },
  eraseAll: () => {
    set(() => ({
      products: [],
    }));
  },
  cleanAll: () => {
    set(() => ({
      products: mockProducts,
    }));
  },
  decreaseQuantity: serial => {
    set(state => ({
      products: state.products.map(product =>
        product.serial === serial
          ? {...product, quantity: product.quantity - 1}
          : product,
      ),
    }));
  },
  increaseQuantity: serial => {
    set(state => ({
      products: state.products.map(product =>
        product.serial === serial
          ? {...product, quantity: product.quantity + 1}
          : product,
      ),
    }));
  },
}));

import {create} from 'zustand';

export const useBearStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));

export const useProductStore = create(set => ({
  products: [],
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
  removeTodo: id => {
    set(state => ({
      products: state.products.filter(product => product.id !== id),
    }));
  },
  eraseAll: () => {
    set(() => ({
      products: [],
    }));
  },
  decreaseQuantity: id => {
    set(state => ({
      products: state.products.map(product =>
        product.id === id
          ? {...product, quantity: product.quantity - 1}
          : product,
      ),
    }));
  },
  increaseQuantity: id => {
    set(state => ({
      products: state.products.map(product =>
        product.id === id
          ? {...product, quantity: product.quantity + 1}
          : product,
      ),
    }));
  },
}));

// Cart state management with zustand
import { create } from 'zustand';

export type Course = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartState = {
  items: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  addToCart: (course) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === course.id);
      if (existingItem) {
        return state;
      }
      return { items: [...state.items, course] };
    }),
  removeFromCart: (courseId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== courseId),
    })),
  clearCart: () => set({ items: [] }),
}));

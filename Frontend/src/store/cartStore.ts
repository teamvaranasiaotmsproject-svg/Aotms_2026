import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    id: string; // Course ID
    name: string;
    price?: number; // Optional until price logic is added
    image?: string;
}

interface CartState {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addToCart: (item) => set((state) => {
                const exists = state.items.find((i) => i.id === item.id);
                if (exists) return state; // Prevent duplicates
                return { items: [...state.items, item] };
            }),
            removeFromCart: (id) => set((state) => ({
                items: state.items.filter((i) => i.id !== id),
            })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
        }
    )
);

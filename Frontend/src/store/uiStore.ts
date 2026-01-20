import { create } from 'zustand';

interface UIState {
    isAuthModalOpen: boolean;
    authModalMode: 'login' | 'register' | 'forgot';
    openAuthModal: (mode?: 'login' | 'register' | 'forgot') => void;
    closeAuthModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isAuthModalOpen: false,
    authModalMode: 'login',
    openAuthModal: (mode = 'login') => set({ isAuthModalOpen: true, authModalMode: mode }),
    closeAuthModal: () => set({ isAuthModalOpen: false }),
}));
